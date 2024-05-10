/* eslint sort-keys: error */
import { useRouter } from "next/router";
import { DiscordIcon, GitHubIcon } from "@/client/icons";
import { ComponentProps, isValidElement, ReactElement } from "react";
import type { z } from "zod";
import { Anchor, Flexsearch, Footer, Navbar, ThemeSwitch, TOC } from "@/theme/components";
import { useConfig, useThemeConfig } from "@/contexts";
import type { publicThemeSchema, themeSchema } from "./schemas";
import { getGitIssueUrl, useGitEditUrl } from "@/theme/utils";

export const DEFAULT_LOCALE = "en-US";

export const IS_BROWSER = typeof window !== "undefined";

export type DocsThemeConfig = z.infer<typeof themeSchema>;
export type PartialDocsThemeConfig = z.infer<typeof publicThemeSchema>;

const LOADING_LOCALES: Record<string, string> = {
  "en-US": "Loading",
  fr: "Сhargement",
  ru: "Загрузка",
  "zh-CN": "正在加载",
};

const PLACEHOLDER_LOCALES: Record<string, string> = {
  "en-US": "Search documentation",
  fr: "Rechercher documents",
  ru: "Поиск документации",
  "zh-CN": "搜索文档",
};

const SWRLogo = (props: ComponentProps<"svg">): ReactElement => (
  <svg viewBox="0 0 291 69" fill="none" {...props}>
    <path
      d="M0 36.53c.07 17.6 14.4 32.01 32.01 32.01a32.05 32.05 0 0032.01-32V32a13.2 13.2 0 0123.4-8.31h20.7A32.07 32.07 0 0077.2 0a32.05 32.05 0 00-32 32.01v4.52A13.2 13.2 0 0132 49.71a13.2 13.2 0 01-13.18-13.18 3.77 3.77 0 00-3.77-3.77H3.76A3.77 3.77 0 000 36.53zM122.49 68.54a32.14 32.14 0 01-30.89-23.7h20.67a13.16 13.16 0 0023.4-8.3V32A32.05 32.05 0 01167.68 0c17.43 0 31.64 14 32 31.33l.1 5.2a13.2 13.2 0 0023.4 8.31h20.7a32.07 32.07 0 01-30.91 23.7c-17.61 0-31.94-14.42-32.01-32l-.1-4.7v-.2a13.2 13.2 0 00-13.18-12.81 13.2 13.2 0 00-13.18 13.18v4.52a32.05 32.05 0 01-32.01 32.01zM247.94 23.7a13.16 13.16 0 0123.4 8.31 3.77 3.77 0 003.77 3.77h11.3a3.77 3.77 0 003.76-3.77A32.05 32.05 0 00258.16 0a32.07 32.07 0 00-30.92 23.7h20.7z"
      fill="currentColor"
    />
  </svg>
);
const Vercel = () => (
  <svg height="20" viewBox="0 0 283 64" fill="none">
    <path
      fill="currentColor"
      d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
    />
  </svg>
);

const FOOTER_LINK = {
  "en-US": "https://vercel.com/?utm_source=swr",
  "es-ES": "https://vercel.com/?utm_source=swr_es-es",
  ru: "https://vercel.com/?utm_source=swr_ru",
};

const FOOTER_LINK_TEXT = {
  "en-US": (
    <>
      Powered by
      <Vercel />
    </>
  ),
  "es-ES": (
    <>
      Desarrollado por
      <Vercel />
    </>
  ),
  ru: (
    <>
      Работает на
      <Vercel />
    </>
  ),
};

export const DEFAULT_THEME: DocsThemeConfig = {
  backgroundColor: {
    dark: "17,17,17",
    light: "250,250,250",
  },
  banner: {
    content: "SWR 2.0 is out! Read more →",
    dismissible: true,
    key: "nextra-banner",
  },
  chat: {
    icon: (
      <>
        <DiscordIcon />
        <span className="nx-sr-only">Discord</span>
      </>
    ),
  },
  color: {
    hue: {
      dark: 204,
      light: 212,
    },
    saturation: 100,
  },
  darkMode: true,
  direction: "ltr",
  docsRepositoryBase: "https://github.com/hmthanh/millionscope",
  editLink: {
    component: function EditLink({ className, filePath, children }) {
      const editUrl = useGitEditUrl(filePath);
      if (!editUrl) {
        return null;
      }
      return (
        <Anchor className={className} href={editUrl}>
          {children}
        </Anchor>
      );
    },
    content: "Edit this page",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
    useLink() {
      const config = useConfig();
      const themeConfig = useThemeConfig();
      return getGitIssueUrl({
        labels: themeConfig.feedback.labels,
        repository: themeConfig.docsRepositoryBase,
        title: `Feedback for “${config.title}”`,
      });
    },
  },
  footer: {
    component: Footer,
    content: (
      <a rel="noreferrer" target="_blank" className="flex items-center gap-2 font-semibold" href={FOOTER_LINK["en-US"]}>
        {FOOTER_LINK_TEXT["en-US"]}
      </a>
    ),
  },
  gitTimestamp: function GitTimestamp({ timestamp }) {
    const { locale = DEFAULT_LOCALE } = useRouter();
    return (
      <>
        Last updated on{" "}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </>
    );
  },
  head: function useHead() {
    const { frontMatter, title: pageTitle } = useConfig();

    const title = `${pageTitle} – Nextra`;
    const { description, canonical, image } = frontMatter;
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        {description && (
          <>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
          </>
        )}
        {canonical && <link rel="canonical" href={canonical} />}
        {image && <meta name="og:image" content={image} />}
      </>
    );
  },
  i18n: [
    {
      direction: "ltr",
      locale: "vn",
      name: "vn-VN",
    },
    {
      direction: "ltr",
      locale: "en",
      name: "en-EN",
    },
  ],
  logo: function Logo() {
    const { locale } = useRouter();
    return (
      <>
        <SWRLogo className="h-3" />
        <span className="hidden select-none font-extrabold ltr:ml-2 rtl:mr-2 md:inline" title={`SWR: Site || ''}`}>
          SWR
        </span>
      </>
    );
  },
  logoLink: true,
  navbar: {
    component: Navbar,
  },
  navigation: true,
  nextThemes: {
    defaultTheme: "system",
    storageKey: "theme",
  },
  notFound: {
    content: "Submit an issue about broken link →",
    labels: "bug",
  },
  project: {
    icon: (
      <>
        <GitHubIcon />
        <span className="nx-sr-only">GitHub</span>
      </>
    ),
  },
  search: {
    component: Flexsearch,
    emptyResult: <span className="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">No results found.</span>,
    error: "Failed to load search index.",
    loading: function useLoading() {
      const { locale, defaultLocale = DEFAULT_LOCALE } = useRouter();
      const text = (locale && LOADING_LOCALES[locale]) || LOADING_LOCALES[defaultLocale];
      return <>{text}…</>;
    },
    placeholder: function usePlaceholder() {
      const { locale, defaultLocale = DEFAULT_LOCALE } = useRouter();
      const text = (locale && PLACEHOLDER_LOCALES[locale]) || PLACEHOLDER_LOCALES[defaultLocale];
      return `${text}…`;
    },
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: true,
  },
  themeSwitch: {
    component: ThemeSwitch,
    useOptions() {
      const { locale } = useRouter();

      if (locale === "zh-CN") {
        return { dark: "深色主题", light: "浅色主题", system: "系统默认" };
      }
      return { dark: "Dark", light: "Light", system: "System" };
    },
  },
  toc: {
    backToTop: true,
    component: TOC,
    float: true,
    title: "On This Page",
  },
};

export const DEEP_OBJECT_KEYS = Object.entries(DEFAULT_THEME)
  .map(([key, value]) => {
    const isObject = value && typeof value === "object" && !Array.isArray(value) && !isValidElement(value);
    if (isObject) {
      return key;
    }
  })
  .filter(Boolean);
