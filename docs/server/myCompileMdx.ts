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
import {remarkCustomHeadingId, remarkHeadings, remarkMdxDisableExplicitJsx, remarkRemoveImports, remarkStructurize} from "@/server/remark-plugins";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import {Pluggable} from "unified";
import remarkMath from "remark-math";
import {remarkEmbedImages} from "@/utils";
import remarkReadingTime from "remark-reading-time";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode, {type Options as RehypePrettyCodeOptions} from "rehype-pretty-code";
import {FrontMatter} from "@/global/types";
import themeConfig from "@/pages/posts/theme.json";

interface MyCompileMdxProps {
    content: string
    frontMatter: FrontMatter
    isRemoteContent: boolean
    flexsearch: {}
    readingTime: boolean
    latex: boolean
}

const CODE_BLOCK_FILENAME_REGEX = /filename="([^"]+)"/


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

export async function myCompileMdx({content, frontMatter, isRemoteContent, flexsearch, readingTime, latex}: MyCompileMdxProps) {
    const mdxContent = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [ // should be before remarkRemoveImports because contains `import { Mermaid } from ...`
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
                // [remarkMdxFrontMatter] satisfies Pluggable,
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
                // readingTime &&
                remarkReadingTime,
                // latex &&
                remarkMath,
                // isFileOutsideCWD && remarkReplaceImports,
            ],
            rehypePlugins: [
                [
                    // To render <details /> and <summary /> correctly
                    rehypeRaw,
                    // fix Error: Cannot compile.ts `mdxjsEsm` node for npm2yarn and mermaid
                    {passThrough: ['mdxjsEsm', 'mdxJsxFlowElement']}
                ],
                latex && rehypeKatex,
                // codeHighlight !== false &&
                ([
                    rehypePrettyCode,
                    {
                        ...DEFAULT_REHYPE_PRETTY_CODE_OPTIONS,
                        // ...rehypePrettyCodeOptions
                    }
                ] as any),
                // attachMeta,
                // [rehypeExtractTocContent, {isRemoteContent}]
            ],
        },
        scope: frontMatter,
    });

    return mdxContent
}

