import Image from "next/image";
import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Inter } from "next/font/google";
import { collectMdx, collectFiles } from '../utils/mdx-loader';
import path from "path"

const inter = Inter({ subsets: ["latin"] });

export default function Home({ tag, posts }: any) {
  console.log("tag", tag)
  console.log("posts", posts)

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      Hello
    </main>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // const cwd = process.cwd();
  // const filePath = path.join(cwd, "posts/hello-world.mdx")
  // console.log("filePath", filePath)
  // const mdxContent = await collectMdx(filePath, "en");
  // console.log("mdxContent", mdxContent)
  // const dir = "posts"
  // const mdxFile = await collectFiles({ dir: dir })
  // console.log("mdxFile", mdxFile)

  return {
    props: {
      tag: [],
      posts: []
    }
  }
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
