import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { getAllMdx, getAllMdxCustom } from "@/server/processing-mdx";
import slugify from "@sindresorhus/slugify";
import { MDXFrontMatter } from "@/components/postlist";
import { NextSEOHead } from "@/components/nextSEOHead";
import { PostList } from "@/components/postlist";
import { locale } from "dayjs";
import { useRouter } from "@/client/hooks";
import { DEFAULT_DIR, DEFAULT_LOCALE } from "@/global/constants";
import path from "path";
import { CWD, DEFAULT_POST_DIR } from "@/server/constants";
import { PageOpts } from "@/global/types";

interface ContextProps extends ParsedUrlQuery {
  tag: string;
}

interface PostsProps {
  tag: string;
  posts: Array<MDXFrontMatter>;
}

const Posts: NextPage<PostsProps> = ({ tag, posts }) => {
  const router = useRouter();
  const locale = router.query.locale ? String(router.query.locale) : DEFAULT_LOCALE;
  const route = router.query.route ? router.query.route : "/";
  return (
    <>
      <NextSEOHead title={`Posts tagged: "${tag}"`}>
        <PostList posts={posts} locale={locale} />
      </NextSEOHead>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  // const tags = Array.from(new Set(mdxFiles.map((file) => file.tags)))
  // console.log("\n tags", tags,"tags \n")
  // return {
  //   paths: Array.from(new Set(mdxFiles.map((file) => file.tags).flat())).map(
  //     (tag) => {
  //       return {
  //         params: {
  //           tag: slugify(tag!),
  //         },
  //       };
  //     }
  //   ),
  //   fallback: false,
  // };
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { pageMap, imports, dynamicMetaImports } = await getAllMdxCustom({ dir: DEFAULT_POST_DIR, route: "/", locale: DEFAULT_LOCALE });
  const locale = "vn";

  const pageOpts: Partial<PageOpts> = {
    pageMap: pageMap,
    title: "Homepage",
    frontMatter: {},
    // filePath: slash(path.relative(CWD, mdxPath)),
    hasJsxInH1: false,
    timestamp: 100,
    readingTime: {} as any,
  };

  const { tag } = context.params as ContextProps;
  const mdxFiles = getAllMdx({ locale }).map((post) => post["frontMatter"]);
  return {
    props: {
      tag,
      posts: mdxFiles.filter((file) => {
        return file.tags?.includes(tag);
      }),
      pageOpts,
      locale,
    },
  };
};

export default Posts;
