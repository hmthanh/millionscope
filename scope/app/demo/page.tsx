import { MDXRemote } from 'next-mdx-remote'
// import {compileMDX} from 'next-mdx-remote/rsc'
import { serialize } from "next-mdx-remote/serialize";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { Suspense } from 'react'
import path from 'path'
import fs from 'fs';
import { CustomMDX } from '@/components/CustomMDX';
// const postsDirectory = path.join(__dirname, '../../blogs');

const components = {
  h1: (props: any) => (
    <h1 {...props} className="large-text text-red-500" style={{ color: "red" }}>
      {props.children}
    </h1>
  ),
}

async function getData() {
  // const source = await fetch('https://raw.githubusercontent.com/hmthanh/millionscope/main/scope/app/getting-started/page.mdx')

  // const data = await source.text()
  const source = "";
  const fileContents = fs.readFileSync("/Users/thanh/Workspace/millionscope/scope/app/getting-started/page.mdx", 'utf8');

  const mdxSource = await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkMath],
      // rehypePlugins: [rehypeKatex]
    }
  });

  // console.log(mdxSource)
  return {
    props: {
      mdxSource
    }
  };
}


 const getSources = () => {
  return fetch(`https://api.github.com/repos/shuding/nextra`)
    .then(res => res.json())
    .then(repo => ({
      props: {
        // We add an `ssg` field to the page props,
        // which will be provided to the Nextra `useData` hook.
        ssg: {
          stars: repo.stargazers_count
        }
      },
      // The page will be considered as stale and regenerated every 60 seconds.
      revalidate: 60
    }))
}

// const res = await fetch('https://api.example.com/...')
// // The return value is *not* serialized
// // You can return Date, Map, Set, etc.

// if (!res.ok) {
//   // This will activate the closest `error.js` Error Boundary
//   throw new Error('Failed to fetch data')
// }

// return res.json()

export default async function RemoteMdxPage({ mdxSource }: any) {
  // const data = await getData()
  // const source = await fetch('https://raw.githubusercontent.com/hmthanh/millionscope/main/scope/app/getting-started/page.mdx')
  const data = await getData()
  // const directoryPath = "../../blogs/"

  // console.log(fileContents)
  // fs.readdir(directoryPath, (err, files) => {
  //   if (err) {
  //     console.error('Error reading directory:', err);
  //     return;
  //   }

  //   // Log each file in the directory
  //   files.forEach(file => {
  //     console.log(file);
  //   });
  // });
  // MDX text - can be sfrom a local file, database, CMS, fetch, anywhere...
  // const mdSource = await fetch('https://raw.githubusercontent.com/hmthanh/millionscope/main/scope/app/getting-started/page.mdx')
  // mdSource.text().then((tesss) => {
  //     console.log(tesss)
  //     // const { content, frontmatter } = compileMDX<{ title: string }>({source:mdSource, options: { parseFrontmatter: true },})
  // })
  // console.log("mdxSource", mdxSource)

  // const source = 'Some **mdx** text, with a component <Test />'
  // const mdxSource2 = await serialize(source)


  return (
    <Suspense fallback={<>Loading.2222..</>}>
      {/* <MDXRemote {...mdxSource} components={{ ...components, ...{} }} /> */}
      {/* <CustomMDX /> */}
      {/* Hello22zs */}
      <div className="wrapper">
        {/* <MDXRemote {...mdxSource2} components={components} /> */}
      </div>
    </Suspense>
  )
}

