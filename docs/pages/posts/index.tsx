import type {GetStaticProps, NextPage} from "next";
import {getAllMdx, postsPath} from "@/lib/mdx";
import {MDXFrontMatter} from "@/components/postlist";
import {Page} from "@/components/page";
import {PostList} from "@/components/postlist";
import {useEffect} from "react";
import {type NextraConfig, NextraInternalGlobal} from "@/global/types";
import {DEFAULT_LOCALE, NEXTRA_INTERNAL} from "@/global/constants";
import {collectPageMap} from "@/server/page-map";
import path from "path";
// import { Page } from "@/components/Page";
// import { PostList } from "@/components/PostList";

interface PostsProps {
    posts: Array<MDXFrontMatter>;
}

const Posts: NextPage<PostsProps> = ({posts}) => {
    useEffect(() => {
        const __nextra_internal__ = (globalThis as NextraInternalGlobal)[NEXTRA_INTERNAL] ||= Object.create(null)
        // console.log("__nextra_internal__", __nextra_internal__)
    }, [])

    return (
        <>
            <Page
                title="Posts"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            >
                <PostList posts={posts}/>
            </Page>
        </>
    );
};

// {
//     dir: string
//     route?: string
//     locale?: string
//     transformPageMap?: NextraConfig['transformPageMap']
// }

export const getStaticProps: GetStaticProps = async () => {
    const __nextra_internal__ = (globalThis as NextraInternalGlobal)[NEXTRA_INTERNAL] ||= Object.create(null)
    // console.log("__nextra_internal__.getStaticProps", __nextra_internal__)
    const root = process.cwd();
    const blogDir = path.join(root, "posts")
    // const transformPageMap = NextraConfig['transformPageMap'];
    const locale = DEFAULT_LOCALE
    const res = await collectPageMap({dir: blogDir, route: '/', locale: locale})
    console.log("res", res)
    const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
    return {
        props: {
            posts: mdxFiles,
        },
    };
};

export default Posts;
