import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
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
