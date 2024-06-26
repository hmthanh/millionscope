import path from "node:path";
import { compile, ProcessorOptions } from "@mdx-js/mdx";
import { createProcessor } from "@mdx-js/mdx";
// import type {Processor} from '@mdx-js/mdx/lib/core'
// @ts-ignore
import type { Processor } from "@mdx-js/mdx/lib/core";
import { rendererRich, transformerTwoslash } from "@shikijs/twoslash";
// @ts-ignore
import { remarkMermaid } from "@theguild/remark-mermaid";
// import {remarkNpm2Yarn} from '@theguild/remark-npm2yarn'
import type { Program } from "estree";
import rehypeKatex, { type Options as RehypeKatexOptions } from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeRaw from "rehype-raw";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkReadingTime from "remark-reading-time";
import remarkSmartypants from "remark-smartypants";
import type { Pluggable, Plugin } from "unified";
import type { FrontMatter, LoaderOptions, PageOpts, ReadingTime, StructurizedData } from "@/global/types";
import { CWD, DEFAULT_LOCALE, ERROR_ROUTES, MARKDOWN_URL_EXTENSION_REGEX, PUBLIC_DIR } from "@/server/constants";
import { recmaRewriteFunctionBody, recmaRewriteJsx } from "@/server/recma-plugins";
import { DEFAULT_REHYPE_PRETTY_CODE_OPTIONS, rehypeAttachCodeMeta, rehypeBetterReactMathjax, rehypeExtractTocContent, rehypeIcon, rehypeParseCodeMeta } from "@/server/rehype-plugins";
import {
  remarkCustomHeadingId,
  remarkEmbedImages,
  remarkHeadings,
  remarkLinkRewrite,
  remarkMdxDisableExplicitJsx,
  remarkMdxFrontMatter,
  remarkMdxTitle,
  remarkRemoveImports,
  remarkStaticImage,
  remarkStructurize,
} from "@/server/remark-plugins";
import { logger, truthy } from "@/server/utils";
import { compile as myCustomCompile, CompileOptions } from "@mdx-js/mdx";
import { createFormattedMDXError } from "@mdx-remote/format-mdx-error";
import { VFile, VFileCompatible } from "vfile";
import rehypeShiki from "@shikijs/rehype";
import { matter } from "vfile-matter";
import { removeImportsExportsPlugin } from "@mdx-remote/mdx-plugin/remove-imports-exports";

const cachedCompilerForFormat: Record<Exclude<ProcessorOptions["format"], undefined | null>, Processor> = Object.create(null);

type MdxOptions = LoaderOptions["mdxOptions"] & Pick<ProcessorOptions, "jsx" | "outputFormat">;

// @ts-expect-error -- Without bind is unable to use `remarkLinkRewrite` with `buildDynamicMDX`
// because we already use `remarkLinkRewrite` function to remove .mdx? extensions
const clonedRemarkLinkRewrite = remarkLinkRewrite.bind(null);

type CompileMdxOptions = Pick<LoaderOptions, "staticImage" | "search" | "defaultShowCopyCode" | "readingTime" | "latex" | "codeHighlight"> & {
  mdxOptions?: MdxOptions;
  route?: string;
  locale?: string;
  filePath?: string;
  useCachedCompiler?: boolean;
  isPageImport?: boolean;
  isPageMapImport?: boolean;
};

function getMdxOption(frontMatter: any): CompileOptions {
  const isRemoteContent = true;
  const defaultShowCopyCode = true;
  const flexsearch = {};
  const latexOptions: RehypeKatexOptions = {};

  const mdxOptions: Omit<CompileOptions, "outputFormat" | "providerImportSource"> = {
    remarkPlugins: [
      // should be before remarkRemoveImports because contains `import { Mermaid } from ...`
      // ...(remarkPlugins || []),
      // [
      //     remarkNpm2Yarn, // should be before remarkRemoveImports because contains `import { Tabs as $Tabs, Tab as $Tab } from ...`
      //     {
      //         packageName: 'nextra/banner.tsx',
      //         tabNamesProp: 'items',
      //         storageKey: 'selectedPackageManager'
      //     }
      // ] satisfies Pluggable,
      // isRemoteContent && remarkRemoveImports,
      remarkRemoveImports,
      remarkFrontmatter, // parse and attach yaml node
      [remarkMdxFrontMatter] satisfies Pluggable,
      remarkGfm as Pluggable,
      remarkMath,
      [
        remarkMdxDisableExplicitJsx,
        // Replace the <summary> and <details> with customized banner.tsx
        { whiteList: ["details", "summary"] },
      ] satisfies Pluggable,
      remarkCustomHeadingId,
      // remarkMdxTitle,
      [remarkHeadings, { isRemoteContent }] satisfies Pluggable,
      // search && ([remarkStructurize, search] satisfies Pluggable),
      [remarkStructurize, flexsearch] satisfies Pluggable,
      // staticImage && remarkStaticImage,
      // [remarkEmbedImages, { dirname: PUBLIC_DIR }],
      // readingTime &&
      remarkReadingTime,
      // latex &&
      remarkMath,
      [
        clonedRemarkLinkRewrite,
        {
          pattern: MARKDOWN_URL_EXTENSION_REGEX,
          replace: "",
          excludeExternalLinks: true,
        },
      ] satisfies Pluggable,
      remarkRemoveImports,
      // isFileOutsideCWD && remarkReplaceImports,
    ],

    rehypePlugins: [
      // ...(rehypePlugins || []),
      // [
      //     rehypePrettyCode,
      //     {
      //         ...DEFAULT_REHYPE_PRETTY_CODE_OPTIONS,
      //         // ...rehypePrettyCodeOptions
      //     }
      // ] satisfies Pluggable,
      [
        // To render <details /> and <summary /> correctly
        rehypeRaw,
        // fix Error: Cannot compile.ts `mdxjsEsm` node for npm2yarn and mermaid
        { passThrough: ["mdxjsEsm", "mdxJsxFlowElement"] },
      ],
      [rehypeIcon, rehypeAttachCodeMeta],
      [rehypeParseCodeMeta, { defaultShowCopyCode }],
      // [
      //
      //     !isRemoteContent && rehypeIcon,
      //     rehypeAttachCodeMeta
      // ],

      // [
      //
      //     !isRemoteContent && rehypeIcon,
      //     rehypeAttachCodeMeta
      // ],
      [rehypeKatex, latexOptions],
      // (typeof latex === 'object'
      //     ? latex.renderer === 'mathjax'
      //         ? [rehypeBetterReactMathjax, latex.options, isRemoteContent]
      //         : [rehypeKatex, latex.options]
      //     : rehypeKatex),
      // ...(codeHighlight === false
      //     ? []
      //     :),
      // latex && rehypeKatex,
      // codeHighlight !== false &&
      // ([
      //     rehypePrettyCode,
      //     {
      //         ...DEFAULT_REHYPE_PRETTY_CODE_OPTIONS,
      //         // ...rehypePrettyCodeOptions
      //     }
      // ] as any),
      // attachMeta,
      [
        rehypeShiki,
        {
          theme: "github-dark",
          // themes: { dark: 'github-dark', light: "github-light" }
        },
      ] satisfies Pluggable,
      [rehypeExtractTocContent, { isRemoteContent }],
    ],
  };

  return mdxOptions;
}

export async function compileMdx(
  source: string,
  {
    staticImage,
    search,
    readingTime,
    latex,
    codeHighlight,
    defaultShowCopyCode,
    route = "",
    locale,
    mdxOptions = {},
    filePath = "",
    useCachedCompiler,
    isPageImport = true,
    isPageMapImport,
  }: CompileMdxOptions = {},
  frontMatter: any,
) {
  const { jsx = false, format: _format = "mdx", outputFormat = "function-body", remarkPlugins, rehypePlugins, rehypePrettyCodeOptions }: MdxOptions = mdxOptions;

  const format = _format === "detect" ? (filePath.endsWith(".mdx") ? "mdx" : "md") : _format;

  const fileCompatible: VFileCompatible = filePath ? { value: source, path: filePath } : source;
  if (isPageMapImport) {
    const compiler = createProcessor({
      format,
      remarkPlugins: [
        remarkFrontmatter, // parse and attach yaml node
        remarkMdxFrontMatter,
      ],
    });
    const vFile = await compiler.process(fileCompatible);
    const content = vFile.toString();

    const index = content.lastIndexOf("function _createMdxContent(props) {");
    const result = content.slice(0, index);

    // console.log("isPageMapImport.result", result);
    return { result } as any;
  }

  let searchIndexKey: string | null = null;
  if (ERROR_ROUTES.has(route)) {
    /* skip */
  } else if (typeof search === "object") {
    if (search.indexKey) {
      searchIndexKey = search.indexKey(filePath, route, locale);
      if (searchIndexKey === "") {
        searchIndexKey = locale || DEFAULT_LOCALE;
      }
    } else {
      searchIndexKey = locale || DEFAULT_LOCALE;
    }
  } else if (search) {
    searchIndexKey = locale || DEFAULT_LOCALE;
  }

  // https://github.com/shuding/nextra/issues/1303
  const isFileOutsideCWD = !isPageImport && path.relative(CWD, filePath).startsWith("..");

  if (isFileOutsideCWD) {
    throw new Error(`Unexpected import of "${filePath}" that is outside of working directory, use symlinks instead`);
  }

  const isRemoteContent = outputFormat === "function-body";

  const compiler = !useCachedCompiler || isRemoteContent ? createCompiler() : (cachedCompilerForFormat[format] ??= createCompiler());
  // console.log("compiler", compiler)
  const processor = compiler();

  // *****************************
  try {
    const vfile = new VFile(fileCompatible);
    matter(vfile, { strip: true });
    const compiledMdx = await myCustomCompile(vfile, getMdxOption(frontMatter));
    let compiledSource = String(compiledMdx);
    // console.log("compiledMdx", compiledSource);
    return { result: compiledSource };
  } catch (error: any) {
    // throw createFormattedMDXError(error, String(vfile));
  }
  // *****************************

  try {
    const vFile = await processor.process(fileCompatible);
    // console.log("vFile", vFile);
    // console.log("vFile", JSON.stringify(vFile.data.toc));

    const data = vFile.data as {
      readingTime?: ReadingTime;
      structurizedData: StructurizedData;
      title?: string;
      frontMatter: FrontMatter;
    } & Pick<PageOpts, "hasJsxInH1">;

    const { readingTime, structurizedData, title, frontMatter, hasJsxInH1 } = data;
    // https://github.com/shuding/nextra/issues/1032
    const result = String(vFile).replaceAll("__esModule", "_\\_esModule");

    if (typeof title !== "string") {
      logger.error("`title` is not defined");
    }
    if (!frontMatter) {
      logger.error("`frontMatter` is not defined");
    }

    if (frontMatter.mdxOptions) {
      throw new Error("`frontMatter.mdxOptions` is no longer supported");
    }

    return {
      result,
      title,
      ...(hasJsxInH1 && { hasJsxInH1 }),
      ...(readingTime && { readingTime }),
      ...(searchIndexKey !== null && { searchIndexKey, structurizedData }),
      frontMatter,
    };
    return {};
  } catch (err) {
    console.error(`[nextra] Error compiling ${filePath}.`);
    throw err;
  }

  function createCompiler(): Processor {
    return createProcessor({
      jsx,
      format,
      outputFormat,
      // providerImportSource: "thanhminh/mdx",
      // Fix TypeError: _jsx is not a function for remote content
      development: process.env.NODE_ENV === "development",
      remarkPlugins: [
        ...(remarkPlugins || []),
        remarkMermaid, // should be before remarkRemoveImports because contains `import { Mermaid } from ...`
        // [
        //     remarkNpm2Yarn, // should be before remarkRemoveImports because contains `import { Tabs as $Tabs, Tab as $Tab } from ...`
        //     {
        //         packageName: 'nextra/banner.tsx',
        //         tabNamesProp: 'items',
        //         storageKey: 'selectedPackageManager'
        //     }
        // ] satisfies Pluggable,
        isRemoteContent && remarkRemoveImports,
        remarkFrontmatter, // parse and attach yaml node
        [remarkMdxFrontMatter] satisfies Pluggable,
        remarkGfm,
        format !== "md" &&
          ([
            remarkMdxDisableExplicitJsx,
            // Replace the <summary> and <details> with customized banner.tsx
            { whiteList: ["details", "summary"] },
          ] satisfies Pluggable),
        remarkCustomHeadingId,
        remarkMdxTitle,
        [remarkHeadings, { isRemoteContent }] satisfies Pluggable,
        // structurize should be before `remarkHeadings` because we attach #id attribute to heading node
        search && ([remarkStructurize, search] satisfies Pluggable),
        staticImage && remarkStaticImage,
        readingTime && remarkReadingTime,
        latex && remarkMath,
        // Remove the markdown file extension from links
        [
          clonedRemarkLinkRewrite,
          {
            pattern: MARKDOWN_URL_EXTENSION_REGEX,
            replace: "",
            excludeExternalLinks: true,
          },
        ] satisfies Pluggable,
        remarkSmartypants,
      ].filter(truthy),
      rehypePlugins: [
        ...(rehypePlugins || []),
        format === "md" && [
          // To render <details /> and <summary /> correctly
          rehypeRaw,
          // fix Error: Cannot compile `mdxjsEsm` node for npm2yarn and mermaid
          {
            passThrough: ["mdxjsEsm", "mdxJsxFlowElement", "mdxTextExpression"],
          },
        ],
        [rehypeParseCodeMeta, { defaultShowCopyCode }],
        // Should be before `rehypePrettyCode`
        latex && (typeof latex === "object" ? (latex.renderer === "mathjax" ? [rehypeBetterReactMathjax, latex.options, isRemoteContent] : [rehypeKatex, latex.options]) : rehypeKatex),
        ...(codeHighlight === false
          ? []
          : [
              [
                rehypePrettyCode,
                {
                  ...DEFAULT_REHYPE_PRETTY_CODE_OPTIONS,
                  // TODO: For some reason I get Error: Cannot find module 'path' in remote content,
                  // disable twoslash temporarily
                  transformers: isRemoteContent
                    ? []
                    : [
                        transformerTwoslash({
                          renderer: rendererRich(),
                          explicitTrigger: true,
                        }),
                      ],
                  ...rehypePrettyCodeOptions,
                },
              ] as any,
              !isRemoteContent && rehypeIcon,
              rehypeAttachCodeMeta,
            ]),
        [rehypeExtractTocContent, { isRemoteContent }],
      ].filter(truthy),
      recmaPlugins: [
        (() => (ast: Program, file) => {
          const mdxContentIndex = ast.body.findIndex((node) => {
            if (node.type === "ExportDefaultDeclaration") {
              return (node.declaration as any).id.name === "MDXContent";
            }
            if (node.type === "FunctionDeclaration") {
              return node.id.name === "MDXContent";
            }
          });

          // Remove `MDXContent` since we use custom HOC_MDXContent
          let [mdxContent] = ast.body.splice(mdxContentIndex, 1) as any;

          // In MDX3 MDXContent is directly exported as export default when `outputFormat: 'program'` is specified
          if (mdxContent.type === "ExportDefaultDeclaration") {
            mdxContent = mdxContent.declaration;
          }

          const mdxContentArgument = mdxContent.body.body[0].argument;

          file.data.hasMdxLayout = !!mdxContentArgument && mdxContentArgument.openingElement.name.name === "MDXLayout";

          const localExports = new Set(["title", "frontMatter" /* 'useTOC' */]);

          for (const node of ast.body) {
            if (node.type === "ExportNamedDeclaration") {
              let varName: string;
              const { declaration } = node;
              if (!declaration) {
                // skip for `export ... from '...'` declaration
                continue;
              } else if (declaration.type === "VariableDeclaration") {
                const [{ id }] = declaration.declarations;
                varName = (id as any).name;
              } else if (declaration.type === "FunctionDeclaration") {
                varName = declaration.id.name;
              } else {
                throw new Error(`\`${declaration.type}\` unsupported.`);
              }

              if (localExports.has(varName)) {
                Object.assign(node, node.declaration);
              }
            }
          }
        }) satisfies Plugin<[], Program>,
        isRemoteContent ? recmaRewriteFunctionBody : recmaRewriteJsx,
      ].filter(truthy),
    });
  }
}
