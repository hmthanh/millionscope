import { MDXRemote } from 'next-mdx-remote'
// import {compileMDX} from 'next-mdx-remote/rsc'
import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Suspense } from 'react'

const components = {
  h1: (props: any) => (
    <h1 {...props} className="large-text text-red-500" style={{ color: "red" }}>
      {props.children}
    </h1>
  ),
}

// async function getData() {
//   const source = await fetch('https://raw.githubusercontent.com/hmthanh/millionscope/main/scope/app/getting-started/page.mdx')

//   const data = await source.text()

//   const mdxSource = await serialize(data, {
//     mdxOptions: {
//       remarkPlugins: [remarkMath],
//       // rehypePlugins: [rehypeKatex]
//     }
//   });

//   return {
//     props: {
//       mdxSource
//     }
//   };
// }


// const res = await fetch('https://api.example.com/...')
// // The return value is *not* serialized
// // You can return Date, Map, Set, etc.

// if (!res.ok) {
//   // This will activate the closest `error.js` Error Boundary
//   throw new Error('Failed to fetch data')
// }

// return res.json()

export default async function RemoteMdxPage({ mdxSource }: any) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  // const mdSource = await fetch('https://raw.githubusercontent.com/hmthanh/millionscope/main/scope/app/getting-started/page.mdx')
  // mdSource.text().then((tesss) => {
  //     console.log(tesss)
  //     // const { content, frontmatter } = compileMDX<{ title: string }>({source:mdSource, options: { parseFrontmatter: true },})
  // })

  return (
    <Suspense fallback={<>Loading.2222..</>}>
      {/* <MDXRemote {...mdxSource} components={{ ...components, ...{} }} /> */}
    </Suspense>
  )
}

