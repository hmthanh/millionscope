import path from 'node:path'
import type {ProcessorOptions} from '@mdx-js/mdx'
import {createProcessor} from '@mdx-js/mdx'
// import type {Processor} from '@mdx-js/mdx/lib/core'
// import {rendererRich, transformerTwoslash} from '@shikijs/twoslash'
// import {remarkMermaid} from '@theguild/remark-mermaid'
import {remarkNpm2Yarn} from '@theguild/remark-npm2yarn'
import type {Program} from 'estree'
import rehypeKatex from 'rehype-katex'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeRaw from 'rehype-raw'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkReadingTime from 'remark-reading-time'
import remarkSmartypants from 'remark-smartypants'
import type {Pluggable, Plugin, Processor} from 'unified'
import type {
    FrontMatter,
    LoaderOptions,
    PageOpts,
    ReadingTime,
    StructurizedData
} from '@/global/types'
import {
    CWD,
    DEFAULT_LOCALE,
    ERROR_ROUTES,
    MARKDOWN_URL_EXTENSION_REGEX
} from '@/server/constants'
import {
    recmaRewriteFunctionBody,
    recmaRewriteJsx
} from '@/server/recma-plugins'
import {
    DEFAULT_REHYPE_PRETTY_CODE_OPTIONS,
    rehypeAttachCodeMeta,
    rehypeBetterReactMathjax,
    rehypeExtractTocContent,
    rehypeIcon,
    rehypeParseCodeMeta
} from '@/server/rehype-plugins'
import {
    remarkCustomHeadingId,
    remarkHeadings,
    remarkLinkRewrite,
    remarkMdxDisableExplicitJsx,
    remarkMdxFrontMatter,
    remarkMdxTitle,
    remarkRemoveImports,
    remarkStaticImage,
    remarkStructurize
} from '@/server/remark-plugins'
import {logger, truthy} from '@/server/utils'

const cachedCompilerForFormat: Record<
    Exclude<ProcessorOptions['format'], undefined | null>,
    Processor
> = Object.create(null)

type MdxOptions = LoaderOptions['mdxOptions'] &
    Pick<ProcessorOptions, 'jsx' | 'outputFormat'>

// @ts-expect-error -- Without bind is unable to use `remarkLinkRewrite` with `buildDynamicMDX`
// because we already use `remarkLinkRewrite` function to remove .mdx? extensions
const clonedRemarkLinkRewrite = remarkLinkRewrite.bind(null)
//
// import type {LoaderOptions} from "@/global/types";
// import type {ProcessorOptions} from "@mdx-js/mdx";

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

export async function compileMdx(
    source: string,
    {
        staticImage,
        search,
        readingTime,
        latex,
        codeHighlight,
        defaultShowCopyCode,
        route = '',
        locale,
        mdxOptions = {},
        filePath = '',
        useCachedCompiler,
        isPageImport = true,
        isPageMapImport
    }: CompileMdxOptions = {}
) {
    return {}

}