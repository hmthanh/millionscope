import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { PageOpts } from "@/global/types";
import { DEFAULT_LOCALE } from "@/global/constants";
import { getAllMdx, getAllMdxCustom } from "@/server/processing-mdx";
import { NextSEOHead } from "@/components/nextSEOHead";
import { MDXFrontMatter, PostList } from "@/components/postlist";
import { ICommonPageProps } from "@/global/customtypes";
import { DEFAULT_POST_DIR } from "@/server/constants";
import { useRouter } from "@/client/hooks";
import { useThemeConfig } from "@/contexts";

interface IHome extends ICommonPageProps {}

export default function Home({ tag, posts }: { tag: string; posts: Array<MDXFrontMatter>; pageOpts: PageOpts }): InferGetStaticPropsType<typeof getStaticProps> {
  const themeConfig = useThemeConfig();
  const router = useRouter();
  const locale = router.query.locale ? String(router.query.locale) : DEFAULT_LOCALE;
  const route = router.query.route ? router.query.route : "/";

  return (
    <NextSEOHead title="Posts" description="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
      <PostList posts={posts} locale={locale} />
    </NextSEOHead>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { pageMap, imports, dynamicMetaImports } = await getAllMdxCustom({ dir: DEFAULT_POST_DIR, route: "/", locale: DEFAULT_LOCALE });
  // console.log("pageMap", pageMap);

  // const cwd = process.cwd();
  // const filePath = path.join(cwd, "posts/hello-world.mdx")
  // console.log("filePath", filePath)
  // const mdxContent = await collectMdx(filePath, "en");
  // console.log("mdxContent", mdsxContent)
  // const dir = "posts"
  // const mdxFile = await collectFiles({ dir: dir })
  // console.log("mdxFile", mdxFile)

  // console.log("__nextra_resolvePageMap", __nextra_resolvePageMap)
  // console.log("__nextra_internal__.getStaticProps", __nextra_internal__)

  // const res = await collectPageMap({dir: blogDir, route: '/', locale: locale})
  // const files = await collectFiles({
  //   dir: blogDir,
  //   route: "/",
  //   isFollowingSymlink: false,
  // });
  // console.log("files", files)

  const pageOpts: Partial<PageOpts> = {
    pageMap: pageMap,
    title: "Homepage",
    frontMatter: {},
    // filePath: slash(path.relative(CWD, mdxPath)),
    hasJsxInH1: false,
    timestamp: 100,
    readingTime: {} as any,
  };

  const mdxFiles = getAllMdx({ locale: "vn" }).map((post) => post["frontMatter"]);
  return {
    props: {
      locale: "vn",
      route: "/",
      posts: mdxFiles,
      pageOpts,
    },
  };
};
