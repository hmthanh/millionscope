// import { createRequire } from 'node:module'
// import path from 'node:path'

import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import { remarkMermaid } from "@theguild/remark-mermaid"
import remarkFrontmatter from 'remark-frontmatter'
import grayMatter from "gray-matter"
import rehypeKatex from "rehype-katex"
import rehypePrettyCode from "rehype-pretty-code"
import remarkMath from "remark-math"
import remarkReadingTime from "remark-reading-time"
import rehypeRaw from 'rehype-raw'
import { remarkNpm2Yarn } from '@theguild/remark-npm2yarn'

import { createProcessor } from '@mdx-js/mdx'

// import { remarkCustomHeadingId } from "./remark-custom-heading-id"

// import type { ProcessorOptions } from '@mdx-js/mdx'
// import type { Processor } from '@mdx-js/mdx/lib/core'
// import type { Options as RehypePrettyCodeOptions } from 'rehype-pretty-code'
// import type { Pluggable } from 'unified'

// const DEFAULT_REHYPE_PRETTY_CODE_OPTIONS = {
//     // @ts-expect-error -- TODO: fix type error
//     theme,
//     onVisitLine(node) {
//       // Prevent lines from collapsing in `display: grid` mode, and
//       // allow empty lines to be copy/pasted
//       if (node.children.length === 0) {
//         node.children = [{ type: 'text', value: ' ' }]
//       }
//     },
//     onVisitHighlightedLine(node) {
//       node.properties.className.push('highlighted')
//     },
//     onVisitHighlightedWord(node) {
//       node.properties.className = ['highlighted']
//     },
//     // filterMetaString: (meta) =>
//     //   meta.replace(CODE_BLOCK_FILENAME_REGEX, '')
//   }

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};


const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        remarkPlugins: [remarkGfm, remarkMermaid, remarkFrontmatter],
        rehypePlugins: [rehypeKatex, rehypePrettyCode, remarkMath, remarkReadingTime],
    },
})

export default withMDX(nextConfig);
