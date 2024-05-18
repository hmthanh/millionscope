import "@/styles/globals.css";
import "@/styles/styles.css";
import "@/styles/custom.css";
import "katex/dist/katex.min.css";
import type { AppProps } from "next/app";

import "@/styles/new.css";
import { ConfigProvider, ThemeConfigProvider, useThemeConfig } from "@/contexts";
import { useRouter } from "@/client/hooks";
import ThemeLayout from "@/components/layout/themeLayout";
import { DataProvider } from "@/client/hooks/use-data";
import { PageOpts } from "@/global/types";

// import {useRouter} from "next/router";

interface IPageMeta extends AppProps {
  title: string;
  // age: number
}

export default function App({ Component, pageProps }: IPageMeta) {
  const themeConfig = useThemeConfig();
  const router = useRouter();

  const pageOpts: PageOpts = pageProps.pageOpts ? pageProps.pageOpts : ({ filePath: "", frontMatter: {}, pageMap: [], title: "" } as PageOpts);
  // const pageOpts: PageOpts = useMemo(() => pageProps.pageOpts, [pageProps.pageOpts]);
  // console.log("router", router)

  return (
    <ThemeLayout themeConfig={themeConfig} pageOpts={pageOpts} pageProps={pageProps}>
      <DataProvider value={pageProps}>
        <Component {...pageProps} />
      </DataProvider>
    </ThemeLayout>
  );
}

// App.getInitialProps = async (ctx: NextPageContext) => {
//   // const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   // const json = await res.json();
//   // return { stars: json.stargazers_count };
//   console.log("App");
//   return {
//     sample: "hello",
//   };
// };
