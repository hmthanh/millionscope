import {serialize} from "@mdx-remote/serialize";
// import {
//     remarkCustomHeadingId,
//     remarkHeadings,
//     remarkLinkRewrite,
//     remarkMdxDisableExplicitJsx,
//     remarkMdxFrontMatter,
//     remarkMdxTitle,
//     remarkRemoveImports,
//     remarkStaticImage,
//     remarkStructurize
// } from '@/server/remark-plugins'
import {remarkCustomHeadingId, remarkHeadings, remarkMdxDisableExplicitJsx, remarkEmbedImages, remarkRemoveImports, remarkStructurize, remarkLinkRewrite, remarkMdxFrontMatter, remarkMdxTitle} from "@/server/remark-plugins";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import {Pluggable} from "unified";
import type {PluggableList} from "unified"
import remarkMath from "remark-math";
import remarkReadingTime from "remark-reading-time";
import rehypeRaw from "rehype-raw";
import rehypeKatex, {type Options as RehypeKatexOptions} from "rehype-katex";
import rehypePrettyCode, {type Options as RehypePrettyCodeOptions} from "rehype-pretty-code";
import {FrontMatter, LoaderOptions} from "@/global/types";
import type {ProcessorOptions} from '@mdx-js/mdx'
import themeCodeConfig from "@/server/theme.json";
import {rendererRich, transformerTwoslash} from '@shikijs/twoslash'
// import {remarkNpm2Yarn} from '@theguild/remark-npm2yarn'
// @ts-ignore
import type {Processor} from '@mdx-js/mdx/lib/core'
import {rehypeAttachCodeMeta, rehypeBetterReactMathjax, rehypeExtractTocContent, rehypeIcon, rehypeParseCodeMeta} from "@/server/rehype-plugins";
import {MARKDOWN_URL_EXTENSION_REGEX} from "@/server/constants";
import {bundledLanguages, getHighlighter} from "shiki";

interface MyCompileMdxProps {
    content: string
    frontMatter: FrontMatter
    isRemoteContent: boolean
    flexsearch: {}
    readingTime: boolean
    latex: boolean
}

const cachedCompilerForFormat: Record<
    Exclude<ProcessorOptions['format'], undefined | null>,
    Processor
> = Object.create(null)

type MdxOptions = LoaderOptions['mdxOptions'] &
    Pick<ProcessorOptions, 'jsx' | 'outputFormat'>

// @ts-expect-error -- Without bind is unable to use `remarkLinkRewrite` with `buildDynamicMDX`
// because we already use `remarkLinkRewrite` function to remove .mdx? extensions
const clonedRemarkLinkRewrite = remarkLinkRewrite.bind(null)

type CompileMdxOptions = Pick<
    LoaderOptions,
    | 'staticImage'
    | 'search'
    | 'defaultShowCopyCode'
    | 'readingTime'
    | 'latex'
    | 'codeHighlight'
> & {
    mdxOptions?: MdxOptions
    route?: string
    locale?: string
    filePath?: string
    useCachedCompiler?: boolean
    isPageImport?: boolean
    isPageMapImport?: boolean
}

type LatexOption = Pick<
    LoaderOptions, 'latex'>

const CODE_BLOCK_FILENAME_REGEX = /filename="([^"]+)"/

//  -- @ts-expect-error
const DEFAULT_REHYPE_PRETTY_CODE_OPTIONS: RehypePrettyCodeOptions = {
    // keepBackground: false,
    // grid: false,
    // theme: {
    //     light: 'github-light',
    //     dark: 'github-dark'
    // },
    getHighlighter(opts) {
        return getHighlighter({
            ...opts,
            // Without `getHighlighter` option ```mdx lang is not highlighted...
            langs: Object.keys(bundledLanguages)
        })
    },
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
// const CODE_BLOCK_FILENAME_REGEX = /filename="([^"]+)"/
//
// export const DEFAULT_REHYPE_PRETTY_CODE_OPTIONS: RehypePrettyCodeOptions = {
//     keepBackground: false,
//     grid: false,
//     onVisitLine(node) {
//         // Prevent lines from collapsing in `display: grid` mode, and
//         // allow empty lines to be copy/pasted
//         if (node.children.length === 0) {
//             node.children.push({type: 'text', value: ' '})
//         }
//         delete node.properties['data-line']
//     },
//     theme: {
//         light: 'github-light',
//         dark: 'github-dark'
//     },
//     getHighlighter(opts) {
//         return getHighlighter({
//             ...opts,
//             // Without `getHighlighter` option ```mdx lang is not highlighted...
//             langs: Object.keys(bundledLanguages)
//         })
//     },
//     filterMetaString: meta => meta.replace(CODE_BLOCK_FILENAME_REGEX, '')
// }

export async function myCompileMdx({content, frontMatter, isRemoteContent, flexsearch, readingTime, latex}: MyCompileMdxProps) {
    const {
        jsx = false,
        format: _format = 'mdx',
        outputFormat = 'function-body',
        // remarkPlugins,
        // rehypePlugins,
        rehypePrettyCodeOptions
    }: MdxOptions = {}
    const rehypePlugins: PluggableList = []
    const remarkPlugins: PluggableList = []
    const defaultShowCopyCode = true
    const codeHighlight = true
    const latexOptions: RehypeKatexOptions = {}

    const mdxContent = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [ // should be before remarkRemoveImports because contains `import { Mermaid } from ...`
                ...(remarkPlugins || []),
                // [
                //     remarkNpm2Yarn, // should be before remarkRemoveImports because contains `import { Tabs as $Tabs, Tab as $Tab } from ...`
                //     {
                //         packageName: 'nextra/components',
                //         tabNamesProp: 'items',
                //         storageKey: 'selectedPackageManager'
                //     }
                // ] satisfies Pluggable,

                // isRemoteContent && remarkRemoveImports,
                remarkFrontmatter, // parse and attach yaml node
                [remarkMdxFrontMatter] satisfies Pluggable,
                remarkGfm as Pluggable,
                remarkMath,
                [
                    remarkMdxDisableExplicitJsx,
                    // Replace the <summary> and <details> with customized components
                    {whiteList: ['details', 'summary']}
                ] satisfies Pluggable,
                remarkCustomHeadingId,
                // remarkMdxTitle,
                [remarkHeadings, {isRemoteContent}] satisfies Pluggable,
                // search && ([remarkStructurize, search] satisfies Pluggable),
                [remarkStructurize, flexsearch] satisfies Pluggable,
                // staticImage && remarkStaticImage,
                [remarkEmbedImages, {dirname: "./posts"}],
                // readingTime &&
                remarkReadingTime,
                // latex &&
                remarkMath,
                [
                    clonedRemarkLinkRewrite,
                    {
                        pattern: MARKDOWN_URL_EXTENSION_REGEX,
                        replace: '',
                        excludeExternalLinks: true
                    }
                ] satisfies Pluggable,
                remarkRemoveImports
                // isFileOutsideCWD && remarkReplaceImports,
            ],
            rehypePlugins: [
                ...(rehypePlugins || []),
                [
                    // To render <details /> and <summary /> correctly
                    rehypeRaw,
                    // fix Error: Cannot compile.ts `mdxjsEsm` node for npm2yarn and mermaid
                    {passThrough: ['mdxjsEsm', 'mdxJsxFlowElement']}
                ],
                [rehypeIcon, rehypeAttachCodeMeta],
                [rehypeParseCodeMeta, {defaultShowCopyCode}],
                // [
                //
                //     !isRemoteContent && rehypeIcon,
                //     rehypeAttachCodeMeta
                // ],

                // [
                //
                //     !isRemoteContent && rehypeIcon,
                //     rehypeAttachCodeMeta
                // ],
                [rehypeKatex, latexOptions],
                // (typeof latex === 'object'
                //     ? latex.renderer === 'mathjax'
                //         ? [rehypeBetterReactMathjax, latex.options, isRemoteContent]
                //         : [rehypeKatex, latex.options]
                //     : rehypeKatex),
                // ...(codeHighlight === false
                //     ? []
                //     :),
                // latex && rehypeKatex,
                // codeHighlight !== false &&
                // ([
                //     rehypePrettyCode,
                //     {
                //         ...DEFAULT_REHYPE_PRETTY_CODE_OPTIONS,
                //         // ...rehypePrettyCodeOptions
                //     }
                // ] as any),
                // attachMeta,
                [rehypeExtractTocContent, {isRemoteContent}],
                [
                    rehypePrettyCode,
                    {
                        ...DEFAULT_REHYPE_PRETTY_CODE_OPTIONS,
                        ...rehypePrettyCodeOptions
                    }
                ] satisfies Pluggable,
            ],
        },
        scope: frontMatter,
    });

    return mdxContent
}

