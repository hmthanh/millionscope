import "@/styles/globals.css";
import "@/styles/styles.css";
import "@/styles/custom.css";
import "katex/dist/katex.min.css";
import type { AppContext, AppProps } from "next/app";
import Layout from "@/components/layout/layout";

import "@/styles/new.css";
import { useEffect } from "react";
import { GlobalProvider } from "@/global/context";
import { Heading, NextraInternalGlobal, UseTOC } from "@/global/types";
import { NEXTRA_INTERNAL } from "@/global/constants";
import { createLogger } from "vite";
import { ConfigProvider, ThemeConfigProvider, useThemeConfig } from "@/contexts";
import theme from "tailwindcss/defaultTheme";
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

export default function App({ Component, pageProps }: AppProps) {
  const themeConfig = useThemeConfig();
  // console.log("pageProps", pageProps);

  const router = useRouter();
  // const {asPath, query} = router

  // const slug = asPath.split('/')[1]
  // const langSlug = languages.includes(slug) && slug
  // const language = query.lang || langSlug || defaultLanguage
  const pageOpts = { filePath: "", frontMatter: {}, pageMap: [], title: "" };
  // (props: Record<string, any>) => Heading[];
  const useToc: UseTOC = (props) => [];
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
    <Layout themeConfig={themeConfig} pageOpts={pageOpts} pageProps={pageProps}>
      <DataProvider value={pageProps}>
        {/*<MDXWrapper useTOC={useToc}>*/}
        <Component {...pageProps} />
        {/*</MDXWrapper>*/}
      </DataProvider>
    </Layout>
  );
}
