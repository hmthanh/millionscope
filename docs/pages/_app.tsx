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

export default function App({ Component, pageProps }: AppProps) {
  const themeConfig = useThemeConfig();
  const pageOpts: PageOpts = pageProps.pageOpts ? pageProps.pageOpts : {};
  console.log("pageProps", pageProps);
  // const pageOpts: PageOpts<Record<any, any>> = { filePath: "", frontMatter: {}, pageMap: [], title: "" };
  // console.log("pageProps", pageProps);

  return (
    <ThemeLayout themeConfig={themeConfig} pageOpts={pageOpts} pageProps={pageProps}>
      <DataProvider value={pageProps}>
        <Component {...pageProps} />
      </DataProvider>
    </ThemeLayout>
  );
}
