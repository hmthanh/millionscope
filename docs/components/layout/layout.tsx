import MyBlog from "../blog";
import MyFooter from "../myfooter";
import MyHeader from "../myheader";
import { NextraThemeLayoutProps } from "@/global/types";
import { ReactElement } from "react";
import { ConfigProvider, ThemeConfigProvider } from "@/contexts";
import { InnerLayout } from "@/components/layout/InnerLayout";

export default function Layout({ children, themeConfig, pageOpts }: NextraThemeLayoutProps): ReactElement {
  return (
    <ThemeConfigProvider value={themeConfig}>
      <ConfigProvider value={pageOpts}>
        <InnerLayout>{children}</InnerLayout>
      </ConfigProvider>
    </ThemeConfigProvider>
  );
}
