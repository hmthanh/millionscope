import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"
import { createProcessor } from "@mdx-js/mdx"
import { remarkMermaid } from "@theguild/remark-mermaid"
// import { remarkNpm2Yarn } from '@theguild/remark-npm2yarn'
import grayMatter from "gray-matter"
import rehypeKatex from "rehype-katex"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeRaw from "rehype-raw"
import remarkMath from "remark-math"
import remarkFrontmatter from 'remark-frontmatter'
import remarkReadingTime from "remark-reading-time"
import theme from "./theme.json" with { type: "json" }

const DEFAULT_REHYPE_PRETTY_CODE_OPTIONS = {
  theme,
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }]
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted")
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["highlighted"]
  },
  filterMetaString: (meta) => meta.replace(/filename="([^"]+)"/, ""),
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkMermaid, remarkFrontmatter],
    rehypePlugins: [rehypeKatex, rehypePrettyCode, remarkMath, remarkReadingTime],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    // mdxRs: true,
  },
}

const config = withMDX(nextConfig)

export default config
