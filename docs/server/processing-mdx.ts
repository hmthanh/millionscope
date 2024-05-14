import fs from "fs";
import path from "path";
import { promisify } from "node:util";
import matter from "gray-matter";
import { DEFAULT_DIR, DEFAULT_LOCALE, MARKDOWN_EXTENSION_REGEX } from "@/global/constants";
import type { MDXFrontMatter } from "@/components/postlist";
import { collectFiles } from "@/server/page-map";
import { MdxFile, NextraConfig, PageMapItem } from "@/global/types";
import { CWD, DEFAULT_LOCALES } from "@/server/constants";
import { PAGES_DIR } from "@/server/file-system";

const root = process.cwd();

export const postsPath = path.join(root, "posts");

export const getMdx = (fileName: string, locale: string) => {
  const fullPath = path.join(postsPath, locale, fileName);
  const isMarkDown = MARKDOWN_EXTENSION_REGEX.test(fileName);
  if (isMarkDown) {
    // return null
  }

  const docSource = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(docSource);

  let searchIndexKey: string | null = null;

  return {
    frontMatter: {
      ...data,
      slug: fileName.replace(".mdx", ""),
    } as MDXFrontMatter,
    content,
  };
};

export const getAllMdx = ({ locale }: { locale: string }) => {
  const postPaths = path.join(postsPath, locale);
  const files: string[] = fs.readdirSync(postPaths);
  const metaFiles = files.filter((file) => path.extname(file) === ".json");
  const mdxFiles = files.filter((file) => path.extname(file) === ".mdx");
  const items = mdxFiles.map((item) => getMdx(item, locale));
  return items.sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime());
};

var cachedResolvedPageMap: Record<string, PageMapItem[]> = Object.create(null);

export const getAllMdxCustom = async ({ dir, route = "/", locale = "en", transformPageMap }: { dir: string; route?: string; locale?: string; transformPageMap?: NextraConfig["transformPageMap"] }) => {
  const dirPath = path.join(dir, locale);

  const { pageMap, imports, dynamicMetaImports } = await collectFiles({
    dir: dirPath,
    route: locale,
    isFollowingSymlink: false,
  });
  // console.log("pageMap", pageMap);
  const pageMapFiltered = pageMap.filter((page: PageMapItem) => "frontMatter" in page);

  return { pageMap: pageMapFiltered, imports, dynamicMetaImports };
};

export const collectAllPageRoute = async () => {
  const defaultDirPath = path.resolve(CWD, DEFAULT_DIR);

  const locale = "";
  const { pageMap, imports, dynamicMetaImports } = await collectFiles({
    dir: defaultDirPath,
    route: "/",
    isFollowingSymlink: false,
  });

  return { pageMap, imports, dynamicMetaImports };
};

// function collectPageMaps(locale: string): PageMapItem[] {}

// export const getAllMdxLocale = async () => {
//   const postDir = path.resolve(CWD, DEFAULT_DIR);
//   const locales: string[] = [];
//   // for (let locale in locales) {
//   //
//   // }
//
//   const { pageMap, imports } = await collectFiles({
//     dir: postDir,
//     route: "/",
//     isFollowingSymlink: true,
//   });
//
//   return { pageMap, imports };
// };
