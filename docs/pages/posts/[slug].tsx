"use client"

import path from 'node:path'
import {createRequire} from 'node:module'

import type {ProcessorOptions} from '@mdx-js/mdx'
import {createProcessor} from '@mdx-js/mdx'
// import type { Processor } from '@mdx-js/mdx/lib/global'

import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ParsedUrlQuery} from "querystring";
import Link from "next/link";
import {serialize} from "@mdx-remote/serialize";
import {MDXRemote} from "@mdx-remote";
import rehypePrism from "rehype-prism-plus";
import {getAllMdx, getMdx} from "@/lib/mdx";
import {MDXFrontMatter} from "@/lib/types";
import {Page} from "@/components/page";
import {components} from "@/components/mdx";
import {cx} from "@/lib/utils";
import rehypeRaw from 'rehype-raw'
import remarkGfm from "remark-gfm";
// import { remarkMermaid } from "@theguild/remark-mermaid"
import type {Pluggable} from 'unified'

import remarkFrontmatter from 'remark-frontmatter'
import grayMatter from "gray-matter"
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from "rehype-pretty-code"
import remarkMath from "remark-math"
import remarkReadingTime from "remark-reading-time"
import {remarkNpm2Yarn} from '@theguild/remark-npm2yarn'
// import { remarkRemoveImports } from "@/lib/mdx-plugins";
// import remarkEmbedImages from 'remark-embed-images'
import {remarkEmbedImages} from "@/utils"
import type {Options as RehypePrettyCodeOptions} from 'rehype-pretty-code'
import {CODE_BLOCK_FILENAME_REGEX} from '@/server/constants';
import themeConfig from './theme.json'


import {
    attachMeta,
    parseMeta,
    remarkCustomHeadingId,
    remarkHeadings,
    remarkLinkRewrite,
    remarkMdxDisableExplicitJsx,
    remarkRemoveImports,
    remarkReplaceImports,
    remarkStaticImage,
    remarkStructurize
} from '@scopeui/mdx-plugins';

interface ContextProps extends ParsedUrlQuery {
    slug: string;
}

interface PostProps {
    frontMatter: MDXFrontMatter;
    mdx: any;
    previous: MDXFrontMatter | null;
    next: MDXFrontMatter | null;
}

const Post: NextPage<PostProps> = ({frontMatter, mdx, previous, next}) => {
    return (
        <>
            <Page {...frontMatter}>
                <MDXRemote {...mdx} components={components}/>
                {/*{previous || next ? (*/}
                {/*    <nav*/}
                {/*        className={cx(*/}
                {/*            "mt-8 pt-8 grid grid-cols-2 gap-8 border-t",*/}
                {/*            "border-gray-200",*/}
                {/*            "dark:border-gray-700"*/}
                {/*        )}*/}
                {/*    >*/}
                {/*        {previous ? (*/}
                {/*            <div>*/}
                {/*                <p*/}
                {/*                    className={cx(*/}
                {/*                        "mb-2 uppercase tracking-wider text-sm",*/}
                {/*                        "text-gray-500",*/}
                {/*                        "dark:text-gray-400"*/}
                {/*                    )}*/}
                {/*                >*/}
                {/*                    Previous*/}
                {/*                </p>*/}
                {/*                <Link href={`/posts/${previous?.slug}`} className="font-bold">*/}
                {/*                    {previous?.title}*/}
                {/*                </Link>*/}
                {/*            </div>*/}
                {/*        ) : null}*/}
                {/*        {next ? (*/}
                {/*            <div className="col-start-2 text-right">*/}
                {/*                <p*/}
                {/*                    className={cx(*/}
                {/*                        "mb-2 uppercase tracking-wider text-sm",*/}
                {/*                        "text-gray-500",*/}
                {/*                        "dark:text-gray-400"*/}
                {/*                    )}*/}
                {/*                >*/}
                {/*                    Next*/}
                {/*                </p>*/}
                {/*                <Link href={`/posts/${next?.slug}`} className="font-bold">*/}
                {/*                    {next?.title}*/}
                {/*                </Link>*/}
                {/*            </div>*/}
                {/*        ) : null}*/}
                {/*    </nav>*/}
                {/*) : null}*/}
            </Page>
        </>
    );
};

const DEFAULT_REHYPE_PRETTY_CODE_OPTIONS: RehypePrettyCodeOptions = {
    // @ts-expect-error -- TODO: fix type error
    themeConfig,
    onVisitLine(node: any) {
        // Prevent lines from collapsing in `display: grid` mode, and
        // allow empty lines to be copy/pasted
        if (node.children.length === 0) {
            node.children = [{type: 'text', value: ' '}]
        }
    },
    onVisitHighlightedLine(node: any) {
        node.properties.className.push('highlighted')
    },
    onVisitHighlightedChars(node: any) {
        node.properties.className = ['highlighted']
    },
    filterMetaString: (meta: string) =>
        meta.replace(CODE_BLOCK_FILENAME_REGEX, '')
}

export const getStaticPaths: GetStaticPaths = async () => {
    const mdxFiles = getAllMdx();
    return {
        paths: mdxFiles.map((file) => ({
            params: {slug: file.frontMatter.slug},
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const {slug} = context.params as ContextProps;
    const mdxFiles = getAllMdx();
    const postIndex = mdxFiles.findIndex((p) => p.frontMatter.slug === slug);
    const post = mdxFiles[postIndex];
    const {frontMatter, content} = post;

    // *************** Config ***************
    const isRemoteContent = false
    const staticImage = {}
    const flexsearch = {}
    const readingTime = true
    const latex = true
    const codeHighlight = {}
    const defaultShowCopyCode = {}
    const route = ''
    const locale = ['en']
    const mdxOptions = {}
    const filePath = ''
    const useCachedCompiler = {}
    const isPageImport = true

    // const clonedRemarkLinkRewrite = remarkLinkRewrite.bind(null)


    // const isFileOutsideCWD = !isPageImport && path.relative(CWD, filePath).startsWith('..')
    const isFileOutsideCWD = {}
    // *************** Config ***************


    const mdxContent = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [ // should be before remarkRemoveImports because contains `import { Mermaid } from ...`
                [
                    remarkNpm2Yarn, // should be before remarkRemoveImports because contains `import { Tabs as $Tabs, Tab as $Tab } from ...`
                    {
                        packageName: 'nextra/components',
                        tabNamesProp: 'items',
                        storageKey: 'selectedPackageManager'
                    }
                ] satisfies Pluggable,
                remarkRemoveImports,
                remarkGfm as Pluggable,
                remarkMath,
                [
                    remarkMdxDisableExplicitJsx,
                    // Replace the <summary> and <details> with customized components
                    {whiteList: ['details', 'summary']}
                ] satisfies Pluggable,
                remarkCustomHeadingId,
                [remarkHeadings, {isRemoteContent}] satisfies Pluggable,
                [remarkStructurize, flexsearch] satisfies Pluggable,
                // staticImage && remarkStaticImage,
                [remarkEmbedImages, {dirname: "./posts"}],
                readingTime && remarkReadingTime,
                latex && remarkMath,
                // isFileOutsideCWD && remarkReplaceImports,
            ],

            rehypePlugins: [
                [
                    // To render <details /> and <summary /> correctly
                    rehypeRaw,
                    // fix Error: Cannot compile `mdxjsEsm` node for npm2yarn and mermaid
                    {passThrough: ['mdxjsEsm', 'mdxJsxFlowElement']}
                ],
                latex && rehypeKatex,
                codeHighlight !== false &&
                ([
                    rehypePrettyCode,
                    {
                        ...DEFAULT_REHYPE_PRETTY_CODE_OPTIONS,
                        // ...rehypePrettyCodeOptions
                    }
                ] as any),
                attachMeta
            ],
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
