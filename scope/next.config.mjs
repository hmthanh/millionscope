import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import { remarkMermaid } from "@theguild/remark-mermaid"
import remarkFrontmatter from 'remark-frontmatter'
import grayMatter from "gray-matter"
import rehypeKatex from "rehype-katex"
import rehypePrettyCode from "rehype-pretty-code"
import remarkMath from "remark-math"
import remarkReadingTime from "remark-reading-time"

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
