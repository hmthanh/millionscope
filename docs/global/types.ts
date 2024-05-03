import {NEXTRA_INTERNAL} from "@/global/global";
import type {FC} from "react";
import {GrayMatterFile} from "gray-matter";
import type {Heading as MDASTHeading} from "mdast";

export type ThemeConfig = any | null

export type FrontMatter = GrayMatterFile<string>['data']
export type Meta = string | Record<string, any>

export type MdxFile<FrontMatterType = FrontMatter> = {
    kind: 'MdxPage'
    name: string
    route: string
    locale?: string
    frontMatter?: FrontMatterType
}

export type MetaJsonFile = {
    kind: 'Meta'
    locale?: string
    data: {
        [fileName: string]: Meta
    }
    // The path to the _meta.json file. This is a private property needed by the loader.
    __nextra_src?: string
}

export interface Folder<FileType = PageMapItem> {
    kind: 'Folder'
    name: string
    route: string
    children: FileType[]
}

export type PageMapItem = Folder | MdxFile | MetaJsonFile

export type Heading = {
    depth: MDASTHeading['depth']
    value: string
    id: string
}

type Theme = string
export type Flexsearch =
    | boolean
    | {
    /**
     * Whether to index.ts code blocks
     * @default true
     */
    codeblocks: boolean
    /**
     * A filter function to filter out files from indexing, and return the
     * index.ts file key, or null to skip indexing.
     * A site can have multiple indexes, by default they're separated by
     * locales as multiple index.ts files.
     */
    indexKey?: (
        filepath: string,
        route: string,
        locale?: string
    ) => null | string
}

export type ReadingTime = {
    text: string
    minutes: number
    time: number
    words: number
}

export type PageOpts<FrontMatterType = FrontMatter> = {
    filePath: string
    route: string
    frontMatter: FrontMatterType
    pageMap: PageMapItem[]
    title: string
    headings: Heading[]
    hasJsxInH1?: boolean
    timestamp?: number
    flexsearch?: Flexsearch
    newNextLinkBehavior?: boolean
    readingTime?: ReadingTime
}

export type NextraInternalGlobal = typeof globalThis & {
    [NEXTRA_INTERNAL]: {
        pageMap: PageMapItem[]
        route: string
        context: Record<
            string,
            {
                Content: FC
                pageOpts: PageOpts
                themeConfig: ThemeConfig
            }
        >
        refreshListeners: Record<string, (() => void)[]>
        Layout: FC<any>
        themeConfig?: ThemeConfig
        flexsearch?: Flexsearch
    }
}