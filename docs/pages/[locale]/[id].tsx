"use client";

import path from "node:path";
import type { ProcessorOptions } from "@mdx-js/mdx";
import slash from "slash";
import { FrontMatter, Heading, LoaderOptions, NextraInternalGlobal, PageOpts, UseTOC } from "@/global/types";
import { CHUNKS_DIR, CWD, DEFAULT_LOCALE, ERROR_ROUTES, IMPORT_FRONTMATTER, MARKDOWN_URL_EXTENSION_REGEX } from "@/server/constants";
import { logger, truthy } from "@/server/utils";

import { compileMdx } from "@/server/compile";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { serialize } from "@mdx-remote/serialize";
import { MDXRemote } from "@mdx-remote";
// import rehypePrism from "rehype-prism-plus";
import { getAllMdx, getAllMdxCustom } from "@/server/processing-mdx";
import { MDXFrontMatter } from "@/components/postlist";
import { Page } from "@/components/page";
import { PAGES_DIR } from "@/server/file-system";
import { MARKDOWN_EXTENSION_REGEX } from "@/client/contants";
import { myCompileMdx } from "@/server/myCompileMdx";
import { DEFAULT_DIR, NEXTRA_INTERNAL } from "@/global/constants";
import { useConfig, useThemeConfig } from "@/contexts";
import { MDXProvider, useMDXComponents } from "@/client/mdx";
import * as mdx from "@mdx-js/react";
import React, { useEffect, useMemo } from "react";
import { jsxRuntime } from "@mdx-remote/jsx-runtime";
import { getComponents } from "@/theme/mdx";

import { RemoteContent } from "@/client/components";
import { MDXWrapper } from "@/components/layout/MDXWrapper";
import { ImportDeclaration } from "estree";

// import { useMDXComponents as _provideComponents } from "@/client/mdx";

interface ContextProps extends ParsedUrlQuery {
  id: string;
}

interface PostProps {
  id: string;
  locale: string;
  route: "";
  pageOpts: PageOpts<any>;
  pageProps: Heading[];
  // useTOC: UseTOC;
  meta: string;
  // frontMatter: MDXFrontMatter;
  frontmatter: MDXFrontMatter; // Record<string, unknown>;
  compiledSource: any;
  scope: Record<string, unknown>;
  mdx: {
    frontmatter: Record<string, unknown>;
    compiledSource: any;
    scope: Record<string, unknown>;
  };
  previous: MDXFrontMatter | null;
  next: MDXFrontMatter | null;
}

export function evaluate(compiledSource: string, scope: Record<string, unknown> = {}) {
  const keys = Object.keys(scope);
  const values = Object.values(scope);
  const hydrateFn = Reflect.construct(Function, ["$", ...keys, compiledSource]);

  return hydrateFn({ useMDXComponents, ...jsxRuntime }, ...values);
}

const Post: NextPage<PostProps> = ({ id, locale, route, pageOpts, meta, frontmatter, compiledSource, scope, mdx, previous, next, pageProps }) => {
  // const themeConfig = useThemeConfig();

  // const router = useRouter()
  // const {asPath, query} = router

  // const slug = asPath.split('/')[1]
  // const langSlug = languages.includes(slug) && slug
  // const language = query.lang || langSlug || defaultLanguage
  // const pageOpts = { filePath: "", frontMatter: {}, pageMap: [], title: "" };
  // (props: Record<string, any>) => Heading[];
  // const useToc: UseTOC = (props) => [];
  // const pageProps = {};

  const themeConfig = useThemeConfig();
  const config = useConfig();
  // console.log("config", config)
  // const { locale } = useRouter();
  const { direction } = themeConfig.i18n.find((l) => l.locale === locale) || themeConfig;
  const dir = direction === "rtl" ? "rtl" : "ltr";
  const { activeThemeContext: themeContext, topLevelNavbarItems } = config.normalizePagesResult;

  const components = getComponents({
    isRawLayout: themeContext.layout === "raw",
    components: themeConfig.components,
  });
  const { default: MDXContent, useTOC } = evaluate(compiledSource, scope);
  const headings: Heading[] = useTOC();

  return (
    <Page {...frontmatter}>
      <MDXWrapper toc={headings}>
        <MDXContent components={components} />
      </MDXWrapper>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mdxFiles = getAllMdx({ locale: "vn" });
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

type MdxOptions = LoaderOptions["mdxOptions"] & Pick<ProcessorOptions, "jsx" | "outputFormat">;

type CompileMdxOptions = Pick<LoaderOptions, "staticImage" | "search" | "defaultShowCopyCode" | "readingTime" | "latex" | "codeHighlight"> & {
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

/*
 * Use relative path instead of absolute, because it's fails on Windows
 * https://github.com/nodejs/node/issues/31710
 */
function getImportPath(filePath: string) {
  return slash(path.relative(CHUNKS_DIR, filePath));
}

export const getStaticProps = async (context: any) => {
  const { id } = context.params as ContextProps;
  const postDir = path.resolve(CWD, DEFAULT_DIR);
  const { pageMap, imports } = await getAllMdxCustom({ dir: postDir, route: id, locale: "en" });

  const metaImportsAST: ImportDeclaration[] = imports
    // localeCompare to avoid race condition
    .sort((a, b) => a.filePath.localeCompare(b.filePath))
    .map(({ filePath, importName }) => ({
      type: "ImportDeclaration",
      source: { type: "Literal", value: getImportPath(filePath) },
      specifiers: [
        {
          local: { type: "Identifier", name: importName },
          ...(IMPORT_FRONTMATTER && MARKDOWN_EXTENSION_REGEX.test(filePath)
            ? {
                type: "ImportSpecifier",
                imported: { type: "Identifier", name: "frontMatter" },
              }
            : { type: "ImportDefaultSpecifier" }),
        },
      ],
    }));

  // console.log("pageMap", JSON.stringify(pageMap));
  // console.log("imports", imports);
  const mdxFiles = getAllMdx({ locale: "vn" });
  // console.log("imports", imports);

  const postIndex = mdxFiles.findIndex((p) => p.frontMatter.slug === id);
  const post = mdxFiles[postIndex];
  const { frontMatter, content } = post;
  // console.log("content", content)

  // *************** Config ***************
  // const isRemoteContent = false
  const isRemoteContent = true;
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

  const mdxPath = "/Users/thanh/Workspace/millionscope/docs/posts/diffusion-models.mdx";
  const currentPath = slash("./posts/"); // slash(mdxPath)

  if (currentPath.includes("/pages/api/")) {
    logger.warn(`Ignoring ${currentPath} because it is located in the "pages/api" folder.`);
  }

  if (currentPath.includes("/pages/_app.mdx")) {
    throw new Error("Nextra v3 no longer supports for TypeScript projects instead.");
  }

  const isLocalTheme = theme.startsWith(".") || theme.startsWith("/");
  const layoutPath = isLocalTheme ? slash(path.resolve(theme)) : theme;
  const relativePath = slash(path.relative(PAGES_DIR, mdxPath));

  let locale = locales[0] === "" ? "" : relativePath.split("/")[0];
  // In case when partial document is placed outside `pages` directory
  if (locale === "..") locale = "";

  const route = "/" + relativePath.replace(MARKDOWN_EXTENSION_REGEX, "").replace(/(^|\/)index$/, "");

  const { result, title, _frontMatter, structurizedData, searchIndexKey, hasJsxInH1, readingTime } = await compileMdx(
    content,
    {
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
    },
    frontMatter,
  );
  // console.log("\n\n\n result", result);

  const readingTimeResult = readingTime != undefined ? readingTime : 0;
  let timestamp: PageOpts["timestamp"];
  const pageOpts: Partial<PageOpts> = {
    filePath: slash(path.relative(CWD, mdxPath)),
    hasJsxInH1: false,
    timestamp: 100,
    readingTime: readingTimeResult,
  };

  // const mdxContent = await myCompileMdx({ content, frontMatter, isRemoteContent, flexsearch, readingTime, latex });
  const mdxContent = await myCompileMdx({ content, frontMatter, isRemoteContent, flexsearch, readingTime, latex });
  // const { pageMap, imports, dynamicMetaImports } = await collectFiles({
  //   "./",
  //   "/",
  //   isFollowingSymlink: false,
  // });

  return {
    props: {
      frontMatter,
      mdx: mdxContent,
      compiledSource: mdxContent.compiledSource, // mdxContent.compiledSource,
      scope: {}, // mdxContent.scope,
      frontmatter: {}, // mdxContent.frontmatter,
      previous: mdxFiles[postIndex + 1]?.frontMatter || null,
      next: mdxFiles[postIndex - 1]?.frontMatter || null,
      id: id,
      locale: locale,
      route: route,
      pageOpts,
      // useTOC: [],
      // meta: "",
      // mdx: mdxContent,
      // previous: mdxFiles[postIndex + 1]?.frontMatter || null,
      // next: mdxFiles[postIndex - 1]?.frontMatter || null,
    },
  };
};

export default Post;
