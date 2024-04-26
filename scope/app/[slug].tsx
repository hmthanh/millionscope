import Image from "next/image";
import fs from "fs"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import Head from "next/head"

export default async function Home() {
  return (

    <div className="nx-z-10 nx-w-full nx-max-w-5xl nx-items-center nx-justify-between nx-font-mono nx-text-sm nx-lg:flex">
      Hello
    </div>
  );
}

// export async function getStaticPaths() {
//   return { paths: [], fallback: "blocking" }
// }

// export async function getStaticProps(
//   ctx: GetStaticPropsContext<{
//     slug: string
//   }>,
// ) {
//   const { slug } = ctx.params!

//   // retrieve the MDX blog post file associated
//   // with the specified slug parameter
//   const postFile = fs.readFileSync(`_posts/${slug}.mdx`)

//   // read the MDX serialized content along with the frontmatter
//   // from the .mdx blog post file
//   const mdxSource = await serialize(postFile, { parseFrontmatter: true })
//   return {
//     props: {
//       source: mdxSource,
//     },
//     // enable ISR
//     revalidate: 60,
//   }
// }