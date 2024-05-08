import "@/styles/globals.css";
import "@/styles/styles.css";
import "@/styles/custom.css";
import "katex/dist/katex.min.css";
import type { AppContext, AppProps } from "next/app";
import Layout from "@/components/layout/layout";

import "@/styles/new.css";
import { useEffect } from "react";
import { GlobalProvider } from "@/global/context";
import { NextraInternalGlobal } from "@/global/types";
import { NEXTRA_INTERNAL } from "@/global/constants";
import { createLogger } from "vite";
import { useThemeConfig } from "@/contexts";
import theme from "tailwindcss/defaultTheme";
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
  // console.log("pageProps", pageProps)

  // const router = useRouter()
  // const {asPath, query} = router

  // const slug = asPath.split('/')[1]
  // const langSlug = languages.includes(slug) && slug
  // const language = query.lang || langSlug || defaultLanguage
  const pageOpts = { filePath: "", frontMatter: {}, pageMap: [], title: "" };
  // const pageProps = {};

  return (
    <GlobalProvider>
      <Layout themeConfig={themeConfig} pageOpts={pageOpts} pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  );
}
