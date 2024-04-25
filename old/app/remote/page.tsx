import { MDXRemote } from "next-mdx-remote/rsc"

export default async function RemoteMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const res = await fetch("http://localhost:40087/2021-07-11-diffusion-models.en-US.mdx")
  const markdown = await res.text()
  return <MDXRemote source={markdown} />
}
