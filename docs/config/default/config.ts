import type {ProcessorOptions} from "@mdx-js/mdx";
import type {Options as RehypePrettyCodeOptions} from "rehype-pretty-code";
import {Flexsearch, PageMapCache, PageOpts} from "@default-types";
import type {NextConfig} from "next";

type Theme = string

type Transform = (
    result: string,
    options: {
        route: string
    }
) => string | Promise<string>

export type NextraConfig = {
    theme: Theme
    themeConfig?: string
    defaultShowCopyCode?: boolean
    flexsearch?: Flexsearch
    staticImage?: boolean
    readingTime?: boolean
    latex?: boolean
    codeHighlight?: boolean
    /**
     * A function to modify the code of compiled MDX pages.
     * @experimental
     */
    transform?: Transform
    /**
     * A function to modify the `pageOpts` prop passed to theme layouts.
     * @experimental
     */
    transformPageOpts?: (pageOpts: PageOpts) => PageOpts
    mdxOptions?: Pick<ProcessorOptions, 'rehypePlugins' | 'remarkPlugins'> & {
        format?: 'detect' | 'mdx' | 'md'
        rehypePrettyCodeOptions?: Partial<RehypePrettyCodeOptions>
    }
}

export type ThemeConfig = any | null

export type Nextra = (
    ...args: [NextraConfig] | [theme: Theme, themeConfig: string]
) => (nextConfig: NextConfig) => NextConfig

const nextra: Nextra = () => () => ({})

export default nextra

export interface LoaderOptions extends NextraConfig {
    isMetaImport?: boolean
    isPageImport?: boolean
    locales: string[]
    defaultLocale: string
    pageMapCache: PageMapCache
    newNextLinkBehavior?: boolean
}
