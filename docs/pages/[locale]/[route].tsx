"use client";

import slash from "slash";
import { Folder, Heading, MdxFile, PageMapItem, PageOpts } from "@/global/types";
import { CHUNKS_DIR, CWD, DEFAULT_POST_DIR } from "@/server/constants";
import { logger } from "@/server/utils";

import { compileMdx } from "@/server/compile";

import { GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
// import rehypePrism from "rehype-prism-plus";
import { collectAllPageRoute, getAllMdx, getAllMdxCustom } from "@/server/processing-mdx";
import { NextSEOHead } from "@/components/nextSEOHead";
import { PAGES_DIR } from "@/server/file-system";
import { myCompileMdx } from "@/server/myCompileMdx";
import { useConfig, useThemeConfig } from "@/contexts";
import { useMDXComponents } from "@/client/mdx";
import React from "react";
import { jsxRuntime } from "@mdx-remote/jsx-runtime";
import { getComponents } from "@/theme/mdx";

import { MDXWrapper } from "@/components/layout/MDXWrapper";
import path from "path";
import { ICommonPageProps } from "@/global/customtypes";

interface ContextProps extends ParsedUrlQuery {
  route: string;
  locale: string;
}

interface PostProps extends ICommonPageProps {
  locale: string;
  route: string;
  pageOpts: PageOpts<any>;
  heading: Heading[];
  pageProps: Heading[];
  meta: string;
  compiledSource: any;
  scope: Record<string, unknown>;
}

export function evaluate(compiledSource: string, scope: Record<string, unknown> = {}) {
  const keys = Object.keys(scope);
  const values = Object.values(scope);
  const hydrateFn = Reflect.construct(Function, ["$", ...keys, compiledSource]);

  return hydrateFn({ useMDXComponents, ...jsxRuntime }, ...values);
}

const Post: NextPage<PostProps> = ({ route: string, locale, pageOpts, meta, compiledSource, scope, ...pageProps }) => {
  const themeConfig = useThemeConfig();
  const config = useConfig();
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
    <NextSEOHead {...pageOpts.frontMatter}>
      <MDXWrapper toc={headings}>
        <MDXContent components={components} />
      </MDXWrapper>
    </NextSEOHead>
  );
};

// function isFolder(value: PageMapItem): value is PageMapItem {
//   return !!value && typeof value === "object" && value.type === "folder";
// }

/*
 * Use relative path instead of absolute, because it's fails on Windows
 * https://github.com/nodejs/node/issues/31710
 */
function getImportPath(filePath: string) {
  return slash(path.relative(CHUNKS_DIR, filePath));
}

interface PageRouteItem {
  params: { locale: string; route: string };
}

function findAllPageRoutes(cacheRoute: PageRouteItem, pageMap: PageMapItem[], isRoot: boolean = true) {
  pageMap.map((page: PageMapItem) => {
    // Check is folder
    if ("children" in pageMap) {
      const pageFolder = page as Folder;
      findAllPageRoutes(cacheRoute, pageFolder.children, false);
    }
    if ("frontmatter" in pageMap) {
      const pageMdx = page as MdxFile;
      // pageMdx.
    }
  });
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { pageMap, imports, dynamicMetaImports } = await collectAllPageRoute();
  // console.log("pageMap", JSON.stringify(pageMap));
  // const metaImportsAST: ImportDeclaration[] = imports
  //   // localeCompare to avoid race condition
  //   .sort((a, b) => a.filePath.localeCompare(b.filePath))
  //   .map(({ filePath, importName }) => ({
  //     type: "ImportDeclaration",
  //     source: { type: "Literal", value: getImportPath(filePath) },
  //     specifiers: [
  //       {
  //         local: { type: "Identifier", name: importName },
  //         ...(IMPORT_FRONTMATTER && MARKDOWN_EXTENSION_REGEX.test(filePath)
  //           ? {
  //               type: "ImportSpecifier",
  //               imported: { type: "Identifier", name: "frontMatter" },
  //             }
  //           : { type: "ImportDefaultSpecifier" }),
  //       },
  //     ],
  //   }));

  const locale = "en";
  // const rs = await fetchAllPageRoute(locale);
  // const abc = await rs();
  // const globalInternal = (globalThis as NextraInternalGlobal)[NEXTRA_INTERNAL];

  const pageParams: PageRouteItem[] = [];
  // console.log("pageMap", pageMap);

  pageMap.map((page: PageMapItem) => {
    const pageItem = page as Folder;
    pageItem.children.map((item: PageMapItem) => {
      if ("frontMatter" in item) {
        // console.log("pageItem", pageItem);
        pageParams.push({ params: { locale: pageItem.name, route: item.route } });
      }
    });
  });

  // console.log("pageParams", pageParams);

  return {
    // paths: [{ params: { locale: "en", route: "hello-world" } }, { params: { locale: "vn", route: "hello-world" } }],
    paths: pageParams,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { route, locale } = context.params as ContextProps;
  // collectCatchAllRoutes();
  const { pageMap, imports, dynamicMetaImports } = await getAllMdxCustom({ dir: DEFAULT_POST_DIR, route: route, locale: locale });

  // console.log("pageMap", JSON.stringify(pageMap));
  // console.log("imports", imports);
  const mdxFiles = getAllMdx({ locale: "vn" });
  // console.log("imports", imports);

  const postIndex = mdxFiles.findIndex((p) => p.frontMatter.slug === route);
  const post = mdxFiles[postIndex];
  const { frontMatter, content } = post;

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

  // const route = "/" + relativePath.replace(MARKDOWN_EXTENSION_REGEX, "").replace(/(^|\/)index$/, "");

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

  const ss = pageMap;
  const readingTimeResult = readingTime != undefined ? readingTime : 0;
  let timestamp: PageOpts["timestamp"];
  const pageOpts: Partial<PageOpts> = {
    pageMap: pageMap || {},
    title: title || "",
    frontMatter: frontMatter || {},
    filePath: slash(path.relative(CWD, mdxPath)),
    hasJsxInH1: false,
    timestamp: 100,
    readingTime: readingTimeResult,
  };

  // console.log("pageMap", pageMap)

  // const mdxContent = await myCompileMdx({ content, frontMatter, isRemoteContent, flexsearch, readingTime, latex });
  const mdxContent = await myCompileMdx({ content, frontMatter, isRemoteContent, flexsearch, readingTime, latex });

  return {
    props: {
      locale: locale,
      route: route,
      pageOpts,
      compiledSource: mdxContent.compiledSource, // mdxContent.compiledSource,
      scope: mdxContent.scope, // mdxContent.scope,
    },
  };
};

export default Post;
