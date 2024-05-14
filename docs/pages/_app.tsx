import "@/styles/globals.css";
import "@/styles/styles.css";
import "@/styles/custom.css";
import "katex/dist/katex.min.css";
import type { AppProps } from "next/app";

import "@/styles/new.css";
import { ConfigProvider, ThemeConfigProvider, useThemeConfig } from "@/contexts";
import { useRouter } from "@/client/hooks";

// import {useRouter} from "next/router";

interface IPageMeta extends AppProps {
  title: string;
  // age: number
}

export default function App({ Component, pageProps }: IPageMeta) {
  const themeConfig = useThemeConfig();
  const router = useRouter();

  // const pageOptsDefault: PageOpts<Record<any, any>> = { filePath: "", frontMatter: {}, pageMap: [], title: "" };
  // const pageOpts: PageOpts = pageProps.pageOpts ? pageProps.pageOpts : pageOptsDefault;
  // const pageOpts: PageOpts = useMemo(() => pageProps.pageOpts, [pageProps.pageOpts]);
  // console.log("pageProps", pageProps);
  // console.log("router", router)
  if ("pageOpts" in pageProps) {
    return (
      <ThemeConfigProvider value={themeConfig}>
        <ConfigProvider value={pageProps.pageOpts}>
          <Component {...pageProps} />
        </ConfigProvider>
      </ThemeConfigProvider>
    );
  }

  return (
    <ThemeConfigProvider value={themeConfig}>
      {/*<ConfigProvider value={pageProps.pageOpts}>*/}
      <Component {...pageProps} />
      {/*</ConfigProvider>*/}
    </ThemeConfigProvider>
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
