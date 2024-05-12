import "@/styles/globals.css";
import "@/styles/styles.css";
import "@/styles/custom.css";
import "katex/dist/katex.min.css";
import type { AppContext, AppProps } from "next/app";
import ThemeLayout from "@/components/layout/themeLayout";

import "@/styles/new.css";
import { Heading, NextraInternalGlobal, PageOpts, UseTOC } from "@/global/types";
import { ConfigProvider, ThemeConfigProvider, useThemeConfig } from "@/contexts";
import { MDXWrapper } from "@/components/layout/MDXWrapper";
import { DataProvider } from "@/client/hooks/use-data";
import { useRouter } from "next/router";
// import {useRouter} from "next/router";

type IPageMeta = {
  title: string;
  // age: number
};

// interface Window {
//     globalData: {
//         title: IPageMeta;
//     };
// }

interface IMainLayoutProps extends AppProps {
  toc: Heading[];
}

export default function App({ Component, pageProps, toc }: IMainLayoutProps) {
  const themeConfig = useThemeConfig();
  // console.log("pageProps", pageProps);

  const router = useRouter();

  // console.log("pageProps", pageProps);
  // console.log("toc", toc);
  // console.log("useTO AppC", useTOC);
  // const {asPath, query} = router

  // const slug = asPath.split('/')[1]
  // const langSlug = languages.includes(slug) && slug
  // const language = query.lang || langSlug || defaultLanguage
  const pageOpts: PageOpts<Record<any, any>> = { filePath: "", frontMatter: {}, pageMap: [], title: "" };
  // (props: Record<string, any>) => Heading[];
  const useToc: Heading[] = [
    {
      value: "Hello1",
      id: "hello1",
      depth: 2,
    },
    {
      value: "Hello2",
      id: "hello2",
      depth: 3,
    },
    {
      value: "Hello3",
      id: "hello3",
      depth: 4,
    },
    {
      value: "Hello4",
      id: "hello4",
      depth: 5,
    },
  ];
  // : UseTOC = (props) =>
  // const pageProps = {};

  // if (!useToc) {
  //   console.log("go here", useToc);
  //   return (
  //     <Layout themeConfig={themeConfig} pageOpts={pageOpts} pageProps={pageProps}>
  //       <DataProvider value={pageProps}>
  //         {/*<MDXWrapper useTOC={useToc}>*/}
  //         <Component {...pageProps} />
  //         {/*</MDXWrapper>*/}
  //       </DataProvider>
  //     </Layout>
  //   );
  // }

  return (
    <ThemeLayout themeConfig={themeConfig} pageOpts={pageOpts} pageProps={pageProps}>
      <DataProvider value={pageProps}>
        <MDXWrapper toc={useToc}>
          <Component {...pageProps} />
        </MDXWrapper>
      </DataProvider>
    </ThemeLayout>
  );
}
