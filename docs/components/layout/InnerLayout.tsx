import { ActiveAnchorProvider, useConfig, useThemeConfig } from "@/contexts";
import { ReactElement, ReactNode } from "react";
import { useRouter } from "@/client/hooks";
import { renderComponent } from "@/theme/utils";
import { Banner, Head } from "@/theme/components";
import { PageMapItem } from "@/global/types";
import { MDXProvider, useMDXComponents } from "@/client/mdx";
import { ThemeProvider } from "next-themes";
import { getComponents } from "@/theme/mdx";
import { NavBarProps } from "@/theme/components/navbar";

export function InnerLayout({ children }: { children: ReactNode }): ReactElement {
  const themeConfig = useThemeConfig();
  const config = useConfig();
  const { locale } = useRouter();

  const { direction } = themeConfig.i18n.find((l) => l.locale === locale) || themeConfig;
  const dir = direction === "rtl" ? "rtl" : "ltr";

  const { activeThemeContext: themeContext, topLevelNavbarItems } = config.normalizePagesResult;

  const components = useMDXComponents();

  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...themeConfig.nextThemes}>
      <div dir={dir}>
        {/*
              This makes sure that selectors like `[dir=ltr] .nextra-container` work
              before hydration as Tailwind expects the `dir` attribute to exist on the
              `html` element.
            */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('dir','${dir}')`,
          }}
        />
        <Head />
        <Banner />
        {themeContext.navbar &&
          renderComponent(themeConfig.navbar.component, {
            items: topLevelNavbarItems,
          } as NavBarProps)}

        <ActiveAnchorProvider>
          <MDXProvider disableParentContext components={components}>
            {children}
          </MDXProvider>
        </ActiveAnchorProvider>

        {themeContext.footer &&
          renderComponent(themeConfig.footer.component, {
            menu: config.hideSidebar,
          })}
      </div>
    </ThemeProvider>
  );
}
