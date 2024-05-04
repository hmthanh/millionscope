import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/components/postlist";
import { Page } from "@/components/page";
import { PostList } from "@/components/postlist";
import { useEffect } from "react";
import { NextraInternalGlobal } from "@/global/types";
import { NEXTRA_INTERNAL } from "@/global/constants";
// import { Page } from "@/components/Page";
// import { PostList } from "@/components/PostList";

interface PostsProps {
    posts: Array<MDXFrontMatter>;
}

const Posts: NextPage<PostsProps> = ({ posts }) => {
    useEffect(() => {
        const __nextra_internal__ = (globalThis as NextraInternalGlobal)[NEXTRA_INTERNAL] ||= Object.create(null)
        console.log("__nextra_internal__", __nextra_internal__)
    }, [])

    return (
        <>
            <Page
                title="Posts"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            >
                <PostList posts={posts} />
            </Page>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
    return {
        props: {
            posts: mdxFiles,
        },
    };
};

export default Posts;
