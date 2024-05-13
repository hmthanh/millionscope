import Image from "next/image";
import type { GetStaticProps, GetStaticPaths, NextPage, InferGetStaticPropsType } from "next";
import { useEffect } from "react";
import { NextraGlobalData, NextraInternalGlobal, PageMapItem } from "@/global/types";
import { DEFAULT_LOCALE, NEXTRA_INTERNAL } from "@/global/constants";
import path from "path";
import { collectFiles } from "@/server/page-map";
import { getAllMdx } from "@/server/processing-mdx";
import { Page } from "@/components/page";
import { MDXFrontMatter, PostList } from "@/components/postlist";
import { loader } from "@/server/loader";
import { ICommonPageProps } from "@/global/customtypes";

interface IHome extends ICommonPageProps {}

export default function Home({ tag, posts, locale }: { tag: string; posts: Array<MDXFrontMatter>; locale: string }): InferGetStaticPropsType<typeof getStaticProps> {
  return (
    <Page title="Posts" description="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
      <PostList posts={posts} locale={locale} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // const cwd = process.cwd();
  // const filePath = path.join(cwd, "posts/hello-world.mdx")
  // console.log("filePath", filePath)
  // const mdxContent = await collectMdx(filePath, "en");
  // console.log("mdxContent", mdsxContent)
  // const dir = "posts"
  // const mdxFile = await collectFiles({ dir: dir })
  // console.log("mdxFile", mdxFile)

  // console.log("__nextra_resolvePageMap", __nextra_resolvePageMap)
  // console.log("__nextra_internal__.getStaticProps", __nextra_internal__)
  const root = process.cwd();
  const blogDir = path.join(root, "posts");
  // const transformPageMap = NextraConfig['transformPageMap'];
  const locale = DEFAULT_LOCALE;

  // const res = await collectPageMap({dir: blogDir, route: '/', locale: locale})
  // const files = await collectFiles({
  //   dir: blogDir,
  //   route: "/",
  //   isFollowingSymlink: false,
  // });
  // console.log("files", files)
  const mdxFiles = getAllMdx({ locale: "vn" }).map((post) => post["frontMatter"]);
  return {
    props: {
      locale: "vn",
      route: "/",
      posts: mdxFiles,
    },
  };
};
