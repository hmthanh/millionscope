import { NextraThemeLayoutProps } from "@/global/types";
import { ReactElement } from "react";
import { ConfigProvider, ThemeConfigProvider } from "@/contexts";
import { InnerLayout } from "@/components/layout/InnerLayout";

let run = 0;
export default function ThemeLayout({ children, themeConfig, pageOpts, pageProps }: NextraThemeLayoutProps): ReactElement {
  run += 1;
  console.log("ThemeLayout.pageOpts " + run, pageOpts);
  return (
    <ThemeConfigProvider value={themeConfig}>
      <ConfigProvider value={pageOpts}>
        <InnerLayout>{children}</InnerLayout>
      </ConfigProvider>
    </ThemeConfigProvider>
  );
}
