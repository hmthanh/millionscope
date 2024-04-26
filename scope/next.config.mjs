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
