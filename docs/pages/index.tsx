import Image from "next/image";
import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useEffect } from "react";
import { NextraInternalGlobal } from "@/global/types";
import { NEXTRA_INTERNAL } from "@/global/constants";


export default function Home({ tag, posts }: any) {
    // console.log("tag", tag)${inter.className}
    useEffect(() => {
        const __nextra_internal__ = (globalThis as NextraInternalGlobal)[NEXTRA_INTERNAL] ||= Object.create(null)
        console.log("__nextra_internal__", __nextra_internal__)
    }, [])

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 `}
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
    // console.log("mdxContent", mdsxContent)
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
