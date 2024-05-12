import { NextraThemeLayoutProps } from "@/global/types";
import { ReactElement } from "react";
import { ConfigProvider, ThemeConfigProvider } from "@/contexts";
import { InnerLayout } from "@/components/layout/InnerLayout";

export default function ThemeLayout({ children, themeConfig, pageOpts }: NextraThemeLayoutProps): ReactElement {
  return (
    <ThemeConfigProvider value={themeConfig}>
      <ConfigProvider value={pageOpts}>
        <InnerLayout>{children}</InnerLayout>
      </ConfigProvider>
    </ThemeConfigProvider>
  );
}
