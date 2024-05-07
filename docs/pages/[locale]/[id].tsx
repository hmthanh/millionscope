"use client";

import path from "node:path";
import type { ProcessorOptions } from "@mdx-js/mdx";
import slash from "slash";
import type { FrontMatter, LoaderOptions, PageOpts } from "@/global/types";
import {
  CWD,
  DEFAULT_LOCALE,
  ERROR_ROUTES,
  MARKDOWN_URL_EXTENSION_REGEX,
} from "@/server/constants";
import { logger, truthy } from "@/server/utils";

import { compileMdx } from "@/server/compile";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { serialize } from "@mdx-remote/serialize";
import { MDXRemote } from "@mdx-remote";
// import rehypePrism from "rehype-prism-plus";
import { getAllMdx, getMdx } from "@/server/mdx";
import { MDXFrontMatter } from "@/components/postlist";
// // import {rendererRich, transformerTwoslash} from '@shikijs/twoslash'
import { Page } from "@/components/page";
import { components } from "@/components/mdx";
import { PAGES_DIR } from "@/server/file-system";
import { MARKDOWN_EXTENSION_REGEX } from "@/client/contants";
import { myCompileMdx } from "@/server/myCompileMdx";

interface ContextProps extends ParsedUrlQuery {
  id: string;
}

interface PostProps {
  id: string;
  locale: string;
  meta: string;
  frontMatter: MDXFrontMatter;
  mdx: any;
  previous: MDXFrontMatter | null;
  next: MDXFrontMatter | null;
}

const Post: NextPage<PostProps> = ({
  id,
  locale,
  meta,
  frontMatter,
  mdx,
  previous,
  next,
}) => {
  return (
    <>
      <Page {...frontMatter}>
        <MDXRemote {...mdx} components={components} />
        {/*{previous || next ? (*/}
        {/*    <nav*/}
        {/*        className={cx(*/}
        {/*            "mt-8 pt-8 grid grid-cols-2 gap-8 border-t",*/}
        {/*            "border-gray-200",*/}
        {/*            "dark:border-gray-700"*/}
        {/*        )}*/}
        {/*    >*/}
        {/*        {previous ? (*/}
        {/*            <div>*/}
        {/*                <p*/}
        {/*                    className={cx(*/}
        {/*                        "mb-2 uppercase tracking-wider text-sm",*/}
        {/*                        "text-gray-500",*/}
        {/*                        "dark:text-gray-400"*/}
        {/*                    )}*/}
        {/*                >*/}
        {/*                    Previous*/}
        {/*                </p>*/}
        {/*                <Link href={`/posts/${previous?.slug}`} className="font-bold">*/}
        {/*                    {previous?.title}*/}
        {/*                </Link>*/}
        {/*            </div>*/}
        {/*        ) : null}*/}
        {/*        {next ? (*/}
        {/*            <div className="col-start-2 text-right">*/}
        {/*                <p*/}
        {/*                    className={cx(*/}
        {/*                        "mb-2 uppercase tracking-wider text-sm",*/}
        {/*                        "text-gray-500",*/}
        {/*                        "dark:text-gray-400"*/}
        {/*                    )}*/}
        {/*                >*/}
        {/*                    Next*/}
        {/*                </p>*/}
        {/*                <Link href={`/posts/${next?.slug}`} className="font-bold">*/}
        {/*                    {next?.title}*/}
        {/*                </Link>*/}
        {/*            </div>*/}
        {/*        ) : null}*/}
        {/*    </nav>*/}
        {/*) : null}*/}
      </Page>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxFiles = getAllMdx();
  return {
    paths: mdxFiles.map((file) => ({
      params: {
        locale: "vn",
        id: file.frontMatter.slug,
      },
    })),
    fallback: false,
  };
};

// const cachedCompilerForFormat: Record<
//     Exclude<ProcessorOptions['format'], undefined | null>,
//     Processor
// > = Object.create(null)
//
// type MdxOptions = LoaderOptions['mdxOptions'] &
//     Pick<ProcessorOptions, 'jsx' | 'outputFormat'>
//
// // @ts-expect-error -- Without bind is unable to use `remarkLinkRewrite` with `buildDynamicMDX`
// // because we already use `remarkLinkRewrite` function to remove .mdx? extensions
// const clonedRemarkLinkRewrite = remarkLinkRewrite.bind(null)

type MdxOptions = LoaderOptions["mdxOptions"] &
  Pick<ProcessorOptions, "jsx" | "outputFormat">;

type CompileMdxOptions = Pick<
  LoaderOptions,
  | "staticImage"
  | "search"
  | "defaultShowCopyCode"
  | "readingTime"
  | "latex"
  | "codeHighlight"
> & {
  mdxOptions?: MdxOptions;
  route?: string;
  locale?: string;
  filePath?: string;
  useCachedCompiler?: boolean;
  isPageImport?: boolean;
  isPageMapImport?: boolean;
};

interface IBlogPostProps {
  id: string; // Blog post name id
  locale: string; // "en" | "vn" | "fr"
  meta?: FrontMatter;
}

export const getStaticProps = async (context: any) => {
  const { id } = context.params as ContextProps;
  const mdxFiles = getAllMdx();
  const postIndex = mdxFiles.findIndex((p) => p.frontMatter.slug === id);
  const post = mdxFiles[postIndex];
  const { frontMatter, content } = post;

  // *************** Config ***************
  // const isRemoteContent = false
  const isRemoteContent = false;
  const flexsearch = {};
  const filePath = "";
  const useCachedCompiler = {};

  // const clonedRemarkLinkRewrite = remarkLinkRewrite.bind(null)

  // const isFileOutsideCWD = !isPageImport && path.relative(CWD, filePath).startsWith('..')
  const isFileOutsideCWD = {};
  // *************** Config ***************

  const isPageImport = false;
  const isPageMapImport = false;
  const isMetaFile = true;
  const theme = "nextra-theme-docs";
  const themeConfig = "./theme.config.tsx";
  const defaultShowCopyCode = true;
  const search = { codeblocks: false };
  const staticImage = true;
  const _readingTime = true;
  const latex = true;
  const codeHighlight = true;
  const transform = true;
  const mdxOptions = {};
  const locales = ["en"];

  const mdxPath =
    "/Users/thanh/Workspace/millionscope/docs/posts/diffusion-models.mdx";
  // const mdxPath = resourceResolveData
  //     ? // to make it work with symlinks, resolve the mdx path based on the relative path
  //     /*
  //      * `context.rootContext` could include path chunk of
  //      * `context._module.resourceResolveData.relativePath` use
  //      * `context._module.resourceResolveData.descriptionFileRoot` instead
  //      */
  //     path.join(
  //         this._module.resourceResolveData.descriptionFileRoot,
  //         this._module.resourceResolveData.relativePath
  //     )
  //     : this.resourcePath

  const currentPath = slash("./posts/"); // slash(mdxPath)

  if (currentPath.includes("/pages/api/")) {
    logger.warn(
      `Ignoring ${currentPath} because it is located in the "pages/api" folder.`,
    );
  }

  if (currentPath.includes("/pages/_app.mdx")) {
    throw new Error(
      "Nextra v3 no longer supports _app.mdx, use _app.{js,jsx} or _app.{ts,tsx} for TypeScript projects instead.",
    );
  }

  const isLocalTheme = theme.startsWith(".") || theme.startsWith("/");
  const layoutPath = isLocalTheme ? slash(path.resolve(theme)) : theme;
  const relativePath = slash(path.relative(PAGES_DIR, mdxPath));

  let locale = locales[0] === "" ? "" : relativePath.split("/")[0];
  // In case when partial document is placed outside `pages` directory
  if (locale === "..") locale = "";

  const route =
    "/" +
    relativePath
      .replace(MARKDOWN_EXTENSION_REGEX, "")
      .replace(/(^|\/)index$/, "");

  // const rrr = await compileMdx("", {});
  const {
    result,
    title,
    _frontMatter,
    structurizedData,
    searchIndexKey,
    hasJsxInH1,
    readingTime,
  } = await compileMdx(content, {
    mdxOptions: {
      ...mdxOptions,
      jsx: true,
      outputFormat: "program",
      format: "detect",
    },
    readingTime: _readingTime,
    defaultShowCopyCode,
    staticImage,
    search,
    latex,
    codeHighlight,
    route,
    locale,
    filePath: mdxPath,
    useCachedCompiler: true,
    isPageImport,
    isPageMapImport,
  });

  // console.log("result", result)

  // Imported as a normal component, no need to add the layout.
  //     if (!isPageImport) {
  //         return `${result}
  // export default MDXLayout`
  //     }
  //     if (searchIndexKey) {
  //         // Store all the things in buildInfo.
  //         const {buildInfo} = this._module as any
  //         buildInfo.nextraSearch = {
  //             indexKey: searchIndexKey,
  //             ...(frontMatter.searchable !== false && {
  //                 title,
  //                 data: structurizedData,
  //                 route
  //             })
  //         }
  //     }

  let timestamp: PageOpts["timestamp"];
  // const {repository, gitRoot} = await initGitRepo
  // if (repository && gitRoot) {
  //     try {
  //         timestamp = await repository.getFileLatestModifiedDateAsync(
  //             path.relative(gitRoot, mdxPath)
  //         )
  //     } catch {
  //         // Failed to get timestamp for this file. Silently ignore it
  //     }
  // }
  const pageOpts: Partial<PageOpts> = {
    filePath: slash(path.relative(CWD, mdxPath)),
    hasJsxInH1,
    timestamp,
    readingTime,
  };

  // const finalResult = transform ? await transform(result, {route}) : result

  // const rawJs = `import { HOC_MDXWrapper } from 'nextra/setup-page'
  //     import { pageMap } from '${slash(pageMapPath)}'
  //     ${isAppFileFromNodeModules ? cssImports : ''}
  //     ${finalResult}
  //
  //     export default HOC_MDXWrapper(
  //       MDXLayout,
  //       '${route}',
  //       ${stringifiedPageOpts},pageMap,frontMatter,title},
  //       typeof RemoteContent === 'undefined' ? useTOC : RemoteContent.useTOC
  //     )`

  // console.log("structurizedData", structurizedData)
  // console.log("_frontMatter", _frontMatter)

  // const mdxContent = await serialize(content, {
  //     mdxOptions: {
  //         remarkPlugins: [ // should be before remarkRemoveImports because contains `import { Mermaid } from ...`
  //             // [
  //             //     remarkNpm2Yarn, // should be before remarkRemoveImports because contains `import { Tabs as $Tabs, Tab as $Tab } from ...`
  //             //     {
  //             //         packageName: 'nextra/components',
  //             //         tabNamesProp: 'items',
  //             //         storageKey: 'selectedPackageManager'
  //             //     }
  //             // ] satisfies Pluggable,
  //             isRemoteContent && remarkRemoveImports,
  //             remarkFrontmatter, // parse and attach yaml node
  //             // [remarkMdxFrontMatter] satisfies Pluggable,
  //             remarkGfm as Pluggable,
  //             remarkMath,
  //             [
  //                 remarkMdxDisableExplicitJsx,
  //                 // Replace the <summary> and <details> with customized components
  //                 {whiteList: ['details', 'summary']}
  //             ] satisfies Pluggable,
  //             remarkCustomHeadingId,
  //             [remarkHeadings, {isRemoteContent}] satisfies Pluggable,
  //             [remarkStructurize, flexsearch] satisfies Pluggable,
  //             // staticImage && remarkStaticImage,
  //             [remarkEmbedImages, {dirname: "./posts"}],
  //             _readingTime && remarkReadingTime,
  //             latex && remarkMath,
  //             // isFileOutsideCWD && remarkReplaceImports,
  //         ],
  //         rehypePlugins: [
  //             [
  //                 // To render <details /> and <summary /> correctly
  //                 rehypeRaw,
  //                 // fix Error: Cannot compile.ts `mdxjsEsm` node for npm2yarn and mermaid
  //                 {passThrough: ['mdxjsEsm', 'mdxJsxFlowElement']}
  //             ],
  //             latex && rehypeKatex,
  //             // codeHighlight !== false &&
  //             ([
  //                 rehypePrettyCode,
  //                 {
  //                     ...DEFAULT_REHYPE_PRETTY_CODE_OPTIONS,
  //                     // ...rehypePrettyCodeOptions
  //                 }
  //             ] as any),
  //             // attachMeta,
  //             // [rehypeExtractTocContent, {isRemoteContent}]
  //         ],
  //     },
  //     scope: frontMatter,
  // });
  const mdxContent = await myCompileMdx({
    content,
    frontMatter,
    isRemoteContent,
    flexsearch,
    readingTime,
    latex,
  });
  // console.log("mdxContent", mdxContent)
  // const mdxContent = "Than"
  return {
    props: {
      id: id,
      locale: locale,
      meta: "",
      frontMatter,
      mdx: mdxContent,
      previous: mdxFiles[postIndex + 1]?.frontMatter || null,
      next: mdxFiles[postIndex - 1]?.frontMatter || null,
    },
  };
};

export default Post;
