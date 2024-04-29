"use client"

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { serialize } from "@mdx-remote/serialize";
import { MDXRemote } from "@mdx-remote";
import rehypePrism from "rehype-prism-plus";
import { getAllMdx, getMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/page";
import { components } from "@/components/mdx";
import { cx } from "@/lib/utils";
import rehypeRaw from 'rehype-raw'
import remarkGfm from "remark-gfm";
// import { remarkMermaid } from "@theguild/remark-mermaid"
import type { Pluggable } from 'unified'

import remarkFrontmatter from 'remark-frontmatter'
import grayMatter from "gray-matter"
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from "rehype-pretty-code"
import remarkMath from "remark-math"
import remarkReadingTime from "remark-reading-time"
import { remarkNpm2Yarn } from '@theguild/remark-npm2yarn'
import { remarkRemoveImports } from "@/lib/mdx-plugins";

interface ContextProps extends ParsedUrlQuery {
    slug: string;
}

interface PostProps {
    frontMatter: MDXFrontMatter;
    mdx: any;
    previous: MDXFrontMatter | null;
    next: MDXFrontMatter | null;
}

const Post: NextPage<PostProps> = ({ frontMatter, mdx, previous, next }) => {
    return (
        <>
            <Page {...frontMatter}>
                <MDXRemote {...mdx} components={components} />
                {previous || next ? (
                    <nav
                        className={cx(
                            "mt-8 pt-8 grid grid-cols-2 gap-8 border-t",
                            "border-gray-200",
                            "dark:border-gray-700"
                        )}
                    >
                        {previous ? (
                            <div>
                                <p
                                    className={cx(
                                        "mb-2 uppercase tracking-wider text-sm",
                                        "text-gray-500",
                                        "dark:text-gray-400"
                                    )}
                                >
                                    Previous
                                </p>
                                <Link href={`/posts/${previous?.slug}`} className="font-bold">
                                    {previous?.title}
                                </Link>
                            </div>
                        ) : null}
                        {next ? (
                            <div className="col-start-2 text-right">
                                <p
                                    className={cx(
                                        "mb-2 uppercase tracking-wider text-sm",
                                        "text-gray-500",
                                        "dark:text-gray-400"
                                    )}
                                >
                                    Next
                                </p>
                                <Link href={`/posts/${next?.slug}`} className="font-bold">
                                    {next?.title}
                                </Link>
                            </div>
                        ) : null}
                    </nav>
                ) : null}
            </Page>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const mdxFiles = getAllMdx();
    return {
        paths: mdxFiles.map((file) => ({
            params: { slug: file.frontMatter.slug },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as ContextProps;
    const mdxFiles = getAllMdx();
    const postIndex = mdxFiles.findIndex((p) => p.frontMatter.slug === slug);
    const post = mdxFiles[postIndex];
    const { frontMatter, content } = post;
    const mdxContent = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [ // should be before remarkRemoveImports because contains `import { Mermaid } from ...`
                remarkGfm as Pluggable, remarkGfm as Pluggable, remarkMath],
            rehypePlugins: [],
        },
        scope: frontMatter,
    });
    return {
        props: {
            frontMatter,
            mdx: mdxContent,
            previous: mdxFiles[postIndex + 1]?.frontMatter || null,
            next: mdxFiles[postIndex - 1]?.frontMatter || null,
        },
    };
};

export default Post;