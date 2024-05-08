import Image from "next/image";
import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useEffect } from "react";
import { NextraInternalGlobal, PageMapItem } from "@/global/types";
import { DEFAULT_LOCALE, NEXTRA_INTERNAL } from "@/global/constants";
import path from "path";
import { collectFiles, collectPageMap } from "@/server/page-map";
import { getAllMdx } from "@/server/mdx";
import { Page } from "@/components/page";
import { MDXFrontMatter, PostList } from "@/components/postlist";
// import { HOC_MDXWrapper } from "@/comsponents/layout/HOC_MDXWrapper";

export default function Home({ tag, posts, locale }: { tag: string; posts: Array<MDXFrontMatter>; locale: string }) {
  // console.log("tag", tag)${inter.className}
  useEffect(() => {
    const __nextra_internal__ = (globalThis as NextraInternalGlobal)[NEXTRA_INTERNAL];
    console.log("__nextra_internal_", __nextra_internal__);
  }, []);

  return (
    <Page title="Posts" description="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
      <PostList posts={posts} locale={locale} />
      {/*<Details>*/}
      {/*  <Summary>Hello</Summary>*/}
      {/*</Details>*/}
      {/*<HOC_MDXWrapper>Hello</HOC_MDXWrapper>*/}

      {/*<Details children={<div>Hello111122</div>}>*/}
      {/*</Details>*/}
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
  // const __nextra_resolvePageMap = ((globalThis as Record<string, any>)["__nextra_resolvePageMap"] ||= Object.create({ hello: "Thanh" }));
  // const __nextra_internal__ = ((globalThis as NextraInternalGlobal)[NEXTRA_INTERNAL] ||= Object.create({ hello: "Thanh" }));

  // console.log("__nextra_resolvePageMap", __nextra_resolvePageMap)
  // console.log("__nextra_internal__.getStaticProps", __nextra_internal__)
  const root = process.cwd();
  const blogDir = path.join(root, "posts");
  // const transformPageMap = NextraConfig['transformPageMap'];
  const locale = DEFAULT_LOCALE;
  // const res = await collectPageMap({dir: blogDir, route: '/', locale: locale})
  const files = await collectFiles({
    dir: blogDir,
    route: "/",
    isFollowingSymlink: false,
  });
  // console.log("files", files)
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles,
      locale: "vn",
    },
  };

  // const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  // return {
  //   props: {
  //     tag,
  //     posts: mdxFiles.filter((file) => {
  //       return file.tags?.includes(tag);
  //     }),
  //   },
  // };
};
