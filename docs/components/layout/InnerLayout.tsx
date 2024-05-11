import { ActiveAnchorProvider, useConfig, useThemeConfig } from "@/contexts";
import { ReactElement, ReactNode } from "react";
import { useRouter } from "@/client/hooks";
import { renderComponent } from "@/theme/utils";
import { Banner, Head } from "@/theme/components";
import { PageMapItem } from "@/global/types";
import { MDXProvider } from "@/client/mdx";
import { ThemeProvider } from "next-themes";
import { getComponents } from "@/theme/mdx";

export function InnerLayout({ children }: { children: ReactNode }): ReactElement {
  const themeConfig = useThemeConfig();
  const config = useConfig();
  const { locale } = useRouter();

  const { direction } = themeConfig.i18n.find((l) => l.locale === locale) || themeConfig;
  const dir = direction === "rtl" ? "rtl" : "ltr";

  const { activeThemeContext: themeContext, topLevelNavbarItems } = config.normalizePagesResult;

  // const banner.tsx = getComponents({
  //   isRawLayout: themeContext.layout === "raw",
  //   banner.tsx: themeConfig.banner.tsx,
  // });

  const components = getComponents({
    isRawLayout: themeContext.layout === "raw",
    components: themeConfig.components,
  });
  {
    /*
        This makes sure that selectors like `[dir=ltr] .nextra-container` work
        before hydration as Tailwind expects the `dir` attribute to exist on the
        `html` element.
      */
  }
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...themeConfig.nextThemes}>
      <div dir={dir}>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('dir','${dir}')`,
          }}
        />
        <Head />
        <Banner />
        {/*{themeContext.navbar &&*/}
        {/*  renderComponent(themeConfig.navbar.component, {*/}
        {/*    items: topLevelNavbarItems,*/}
        {/*  })}*/}
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

const pageMapItems: PageMapItem[] = [
  {
    name: "blog",
    children: [
      {
        data: {
          "swr-v1": "SWR 1.0 发布",
        },
      },
      {
        name: "swr-v1",
        route: "/blog/swr-v1",
        frontMatter: {
          image: "https://assets.vercel.com/image/upload/v1630059453/swr/v1.png",
          description: "大约两年前，我们开源了 SWR，大家喜爱的小型数据请求 React 库。今天，我们迎来了另一个里程碑：SWR 1.0 版本发布。",
        },
      },
    ],
    route: "/blog",
  },
  {
    name: "docs",
    children: [
      {
        name: "advanced",
        children: [
          {
            name: "cache",
            route: "/docs/advanced/cache",
          },
          {
            data: {
              cache: "缓存",
              performance: "性能",
              "react-native": "React Native",
            },
          },
          {
            name: "performance",
            route: "/docs/advanced/performance",
          },
          {
            name: "react-native",
            route: "/docs/advanced/react-native",
          },
        ],
        route: "/docs/advanced",
      },
      {
        name: "arguments",
        route: "/docs/arguments",
      },
      {
        name: "change-log",
        route: "/docs/change-log",
      },
      {
        name: "conditional-fetching",
        route: "/docs/conditional-fetching",
      },
      {
        name: "data-fetching",
        route: "/docs/data-fetching",
      },
      {
        name: "error-handling",
        route: "/docs/error-handling",
      },
      {
        name: "getting-started",
        route: "/docs/getting-started",
      },
      {
        name: "global-configuration",
        route: "/docs/global-configuration",
      },
      {
        data: {
          "getting-started": "入门",
          options: "选项",
          "global-configuration": "全局配置",
          "data-fetching": "数据请求",
          "error-handling": "错误处理",
          revalidation: "自动重新请求",
          "conditional-fetching": "条件数据请求",
          arguments: "传入参数",
          mutation: "数据更改",
          pagination: "分页",
          prefetching: "预请求",
          "with-nextjs": "Next.js SSG 和 SSR",
          typescript: "Typescript",
          suspense: "Suspense",
          middleware: "中间件",
          advanced: "高级",
          "change-log": "更新日志",
        },
      },
      {
        name: "middleware",
        route: "/docs/middleware",
      },
      {
        name: "mutation",
        route: "/docs/mutation",
      },
      {
        name: "options",
        route: "/docs/options",
      },
      {
        name: "pagination",
        route: "/docs/pagination",
      },
      {
        name: "prefetching",
        route: "/docs/prefetching",
      },
      {
        name: "revalidation",
        route: "/docs/revalidation",
      },
      {
        name: "suspense",
        route: "/docs/suspense",
      },
      {
        name: "with-nextjs",
        route: "/docs/with-nextjs",
      },
    ],
    route: "/docs",
  },
  {
    name: "examples",
    children: [
      {
        name: "auth",
        route: "/examples/auth",
        frontMatter: {
          title: "身份验证",
          full: true,
        },
      },
      {
        name: "basic",
        route: "/examples/basic",
        frontMatter: {
          title: "基本用法",
          full: true,
        },
      },
      {
        name: "error-handling",
        route: "/examples/error-handling",
        frontMatter: {
          title: "错误处理",
          full: true,
        },
      },
      {
        name: "infinite-loading",
        route: "/examples/infinite-loading",
        frontMatter: {
          title: "无限加载",
          full: true,
        },
      },
      {
        data: {
          basic: "基本用法",
          auth: "身份验证",
          "infinite-loading": "无限加载",
          "error-handling": "错误处理",
          ssr: "Next.js SSR",
        },
      },
    ],
    route: "/examples",
  },
  {
    name: "index",
    route: "/",
    frontMatter: {
      title: "用于数据请求的 React Hooks 库",
    },
  },
  {
    data: {
      index: {
        title: "简介",
        type: "nav",
        hidden: true,
      },
      docs: {
        title: "文档",
        type: "nav",
      },
      examples: {
        title: "示例",
        type: "nav",
      },
      blog: {
        title: "博客",
        type: "nav",
      },
    },
  },
];
