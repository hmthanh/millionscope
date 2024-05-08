"use client";

import path from "node:path";
import type { ProcessorOptions } from "@mdx-js/mdx";
import slash from "slash";
import type { FrontMatter, LoaderOptions, NextraInternalGlobal, PageOpts } from "@/global/types";
import { CWD, DEFAULT_LOCALE, ERROR_ROUTES, MARKDOWN_URL_EXTENSION_REGEX } from "@/server/constants";
import { logger, truthy } from "@/server/utils";

import { compileMdx } from "@/server/compile";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { serialize } from "@mdx-remote/serialize";
import { MDXRemote } from "@mdx-remote";
// import rehypePrism from "rehype-prism-plus";
import { getAllMdx, getAllMdxCustom, getMdx } from "@/server/mdx";
import { MDXFrontMatter } from "@/components/postlist";
// // import {rendererRich, transformerTwoslash} from '@shikijs/twoslash'
import { Page } from "@/components/page";
import { components } from "@/components/mdx";
import { PAGES_DIR } from "@/server/file-system";
import { MARKDOWN_EXTENSION_REGEX } from "@/client/contants";
import { myCompileMdx } from "@/server/myCompileMdx";
import { DEFAULT_DIR, NEXTRA_INTERNAL } from "@/global/constants";
import NextraLayout from "@/components/layout/NextraLayout";

interface ContextProps extends ParsedUrlQuery {
  id: string;
}

interface PostProps {
  id: string;
  locale: string;
  route: "";
  pageOpts: {};
  useToc: {};
  meta: string;
  frontMatter: MDXFrontMatter;
  mdx: any;
  previous: MDXFrontMatter | null;
  next: MDXFrontMatter | null;
}

const Post: NextPage<PostProps> = ({ id, locale, route, pageOpts, useToc, meta, frontMatter, mdx, previous, next }) => {
  return (
    <>
      <Page {...frontMatter}>
        {/*<NextraLayout locale={locale} route={route} pageOpts={pageOpts} useToc={useToc}>*/}
        <MDXRemote {...mdx} components={components} />
        {/*</NextraLayout>*/}
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

export const getStaticProps = async (context: any) => {
  const { id } = context.params as ContextProps;
  const mdxFiles = getAllMdx();
  const postDir = path.resolve(CWD, DEFAULT_DIR);
  const { pageMap, imports, dynamicMetaImports } = await getAllMdxCustom({ dir: postDir, route: "/", locale: "en" });
  console.log("pageMap", pageMap);
  // pageMap.map((children))

  const postIndex = mdxFiles.findIndex((p) => p.frontMatter.slug === id);
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

  let locale = locales[0] === "" ? "" : relativePath.split("/")[0];
  // In case when partial document is placed outside `pages` directory
  if (locale === "..") locale = "";

  const route = "/" + relativePath.replace(MARKDOWN_EXTENSION_REGEX, "").replace(/(^|\/)index$/, "");

  // const rrr = await compileMdx("", {});
  const { result, title, _frontMatter, structurizedData, searchIndexKey, hasJsxInH1, readingTime } = await compileMdx(content, {
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

  let timestamp: PageOpts["timestamp"];
  const pageOpts: Partial<PageOpts> = {
    filePath: slash(path.relative(CWD, mdxPath)),
    hasJsxInH1: false,
    timestamp: 100,
    readingTime,
  };
  const useToc = {};

  const mdxContent = await myCompileMdx({ content, frontMatter, isRemoteContent, flexsearch, readingTime, latex });

  // console.log("mdxContent", mdxContent.compiledSource);
  return {
    props: {
      frontMatter,
      mdx: mdxContent,
      previous: mdxFiles[postIndex + 1]?.frontMatter || null,
      next: mdxFiles[postIndex - 1]?.frontMatter || null,
      // id: id,
      // locale: locale,
      // // route: route,
      // // pageOpts,
      // // useToc,
      // meta: "",
      // frontMatter,
      // mdx: mdxContent,
      // previous: mdxFiles[postIndex + 1]?.frontMatter || null,
      // next: mdxFiles[postIndex - 1]?.frontMatter || null,
    },
  };
};

export default Post;
