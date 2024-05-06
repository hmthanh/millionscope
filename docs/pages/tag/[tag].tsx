import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { getAllMdx } from "@/server/mdx";
import slugify from "@sindresorhus/slugify";
import { MDXFrontMatter } from "@/components/postlist";
import { Page } from "@/components/page";
import { PostList } from "@/components/postlist";

interface ContextProps extends ParsedUrlQuery {
  tag: string;
}

interface PostsProps {
  tag: string;
  posts: Array<MDXFrontMatter>;
}

const Posts: NextPage<PostsProps> = ({ tag, posts }) => {
  return (
    <>
      <Page title={`Posts tagged: "${tag}"`}>
        <PostList posts={posts} />
      </Page>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("getStaticPaths", getStaticPaths)
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
    fallback: false
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("getStaticProps", getStaticProps)

  const { tag } = context.params as ContextProps;
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      tag,
      posts: mdxFiles.filter((file) => {
        return file.tags?.includes(tag);
      }),
    },
  };
};

export default Posts;
