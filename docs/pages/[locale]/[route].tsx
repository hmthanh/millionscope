"use client";

import type { ProcessorOptions } from "@mdx-js/mdx";
import slash from "slash";
import { DynamicFolder, DynamicMetaItem, Folder, FrontMatter, Heading, LoaderOptions, MdxFile, Meta, NextraInternalGlobal, PageMapItem, PageOpts, UseTOC } from "@/global/types";
import { CHUNKS_DIR, CWD, DEFAULT_LOCALE, DEFAULT_PROPERTY_PROPS, ERROR_ROUTES, IMPORT_FRONTMATTER, MARKDOWN_URL_EXTENSION_REGEX } from "@/server/constants";
import { createAstExportConst, logger, truthy } from "@/server/utils";

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
import { useMDXComponents } from "@/client/mdx";
import React, { useEffect, useMemo } from "react";
import { jsxRuntime } from "@mdx-remote/jsx-runtime";
import { getComponents } from "@/theme/mdx";

import { MDXWrapper } from "@/components/layout/MDXWrapper";
import { ImportDeclaration } from "estree";
import { useRouter } from "@/client/hooks";
import { collectCatchAllRoutes, processingPagemap } from "@/server/processing-pagemap";
import { convertPageMapToAst } from "@/server/page-map";
import path from "path";
import { toJs } from "estree-util-to-js";
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

const postDir = path.resolve(CWD, DEFAULT_DIR);

export function evaluate(compiledSource: string, scope: Record<string, unknown> = {}) {
  const keys = Object.keys(scope);
  const values = Object.values(scope);
  const hydrateFn = Reflect.construct(Function, ["$", ...keys, compiledSource]);

  return hydrateFn({ useMDXComponents, ...jsxRuntime }, ...values);
}

const Post: NextPage<PostProps> = ({ route: string, locale, pageOpts, meta, compiledSource, scope }) => {
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
    <Page {...pageOpts.frontMatter}>
      <MDXWrapper toc={headings}>
        <MDXContent components={components} />
      </MDXWrapper>
    </Page>
  );
};

// function isFolder(value: PageMapItem): value is PageMapItem {
//   return !!value && typeof value === "object" && value.type === "folder";
// }

interface PageRouteItem {
  params: { locale: string; id: string };
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const { pageMap, imports, dynamicMetaImports } = await getAllMdxCustom({ dir: postDir, route: "/", locale: "" });

  const pageMap: PageMapItem[] = [
    {
      name: "en",
      route: "/en",
      children: [
        {
          name: "diffusion-models",
          route: "/en/diffusion-models",
          frontMatter: {
            title: "What are Diffusion Models?",
            description: "What are Diffusion Models?",
            date: "2022-01-15 11:00:00",
            comments: true,
            mathjax: true,
            tags: ["diffusion"],
          },
        },
        {
          name: "hello-world",
          route: "/en/hello-world",
          frontMatter: {
            title: "Hello World",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ex!",
            date: "2022-01-15",
            tags: ["css"],
          },
        },
      ],
    },
    {
      name: "vn",
      route: "/vn",
      children: [
        {
          name: "diffusion-models",
          route: "/vn/diffusion-models",
          frontMatter: {
            title: "What are Diffusion Models?",
            description: "What are Diffusion Models?",
            date: "2022-01-15 11:00:00",
            comments: true,
            mathjax: true,
            tags: ["diffusion"],
          },
        },
        {
          name: "get-started",
          route: "/vn/get-started",
          frontMatter: {
            title: "Get Started",
            description: "You can start by creating your own Nextra site and deploying to Vercel",
            date: "2022-01-15",
            tags: ["css"],
          },
        },
        {
          name: "hello-world",
          route: "/vn/hello-world",
          frontMatter: {
            title: "Hello world",
            description: "Sample of hello world version using nextras",
            date: "2024-06-15",
            tags: ["hello", "world"],
          },
        },
      ],
    },
  ];
  // const mdxFiles = getAllMdx({ locale: "vn" });
  const pageParams: PageRouteItem[] = [];

  pageMap.map((page: PageMapItem) => {
    const pageItem = page as Folder;
    pageItem.children.map((item: PageMapItem) => {
      const fileItem = item as MdxFile;

      pageParams.push({ params: { locale: pageItem.name, id: fileItem.name } });
    });
  });
  // console.log("pageParams", pageParams);
  // pageMap.map((page: PageMapItem) => {
  //   const folder = page as Folder<PageMapItem>;
  //   // const locale = folder.route.replace("/", "");
  //   // const id = "";
  //   //
  //   // folder.children.map((item: PageMapItem) => {
  //   //   const fileItem = item as MdxFile;
  //   //
  //   //   // return {
  //   //   //   locale: locale,
  //   //   //   id: fileItem.name,
  //   //   // };
  //   // })
  // });

  return {
    // paths: [
    //   {
    //     params: {
    //       locale: "vn",
    //       id: "hello-world",
    //     },
    //   },
    //   {
    //     params: {
    //       locale: "vn",
    //       id: "diffusion-models",
    //     },
    //   },
    // ],
    paths: [
      { params: { locale: "en", route: "diffusion-models" } },
      { params: { locale: "en", route: "hello-world" } },
      { params: { locale: "vn", route: "diffusion-models" } },
      { params: { locale: "vn", route: "get-started" } },
      { params: { locale: "vn", route: "hello-world" } },
    ],
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { route, locale } = context.params as ContextProps;

  const { pageMap, imports, dynamicMetaImports } = await getAllMdxCustom({ dir: postDir, route: "/", locale: "" });

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

  const readingTimeResult = readingTime != undefined ? readingTime : 0;
  let timestamp: PageOpts["timestamp"];
  const pageOpts: Partial<PageOpts> = {
    pageMap: pageMap || {},
    title: title,
    frontMatter: frontMatter || {},
    filePath: slash(path.relative(CWD, mdxPath)),
    hasJsxInH1: false,
    timestamp: 100,
    readingTime: readingTimeResult,
  };

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
