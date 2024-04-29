import type {ProcessorOptions} from '@mdx-js/mdx'
import type {GrayMatterFile} from 'gray-matter'
import type {Heading as MDASTHeading} from 'mdast'
import type {NextConfig} from 'next'
import type {FC, ReactNode} from 'react'
import type {Options as RehypePrettyCodeOptions} from 'rehype-pretty-code'
import type {
    MARKDOWN_EXTENSIONS,
    META_FILENAME,
    NEXTRA_INTERNAL
} from './constants'

type MetaFilename = typeof META_FILENAME
type MarkdownExtension = (typeof MARKDOWN_EXTENSIONS)[number]

export class PageMapCache {
    cache: {
        items: PageMapItem[]
        fileMap: FileMap
    } | null = {
        items: [],
        fileMap: Object.create(null)
    }

    set(data: { items: PageMapItem[]; fileMap: FileMap }) {
        this.cache!.items = data.items
        this.cache!.fileMap = data.fileMap
    }

    clear() {
        this.cache = null
    }

    get() {
        return this.cache
    }
}


export interface Folder<FileType = PageMapItem> {
    kind: 'Folder'
    name: string
    route: string
    children: FileType[]
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

export type DynamicFolder = {
    type: 'folder'
    items: DynamicMeta
    title?: string
}

export type DynamicMetaItem = Meta | DynamicFolder

export type DynamicMeta = Record<string, DynamicMetaItem>

export type DynamicMetaJsonFile = {
    kind: 'Meta'
    locale?: string
    data: DynamicMeta
}

export type FrontMatter = GrayMatterFile<string>['data']
export type Meta = string | Record<string, any>

export type MdxFile<FrontMatterType = FrontMatter> = {
    kind: 'MdxPage'
    name: string
    route: string
    locale?: string
    frontMatter?: FrontMatterType
}

export type MetaJsonPath = `${string}/${MetaFilename}`
export type MdxPath = `${string}.${MarkdownExtension}`

export type FileMap = {
    [jsonPath: MetaJsonPath]: MetaJsonFile
    [mdxPath: MdxPath]: MdxFile
}

export type PageMapItem = Folder | MdxFile | MetaJsonFile

// PageMapItem without MetaJsonFile and with its meta from _meta.json
export type Page = (MdxFile | Folder<Page>) & {
    meta?: Exclude<Meta, string>
}

export type Heading = {
    depth: MDASTHeading['depth']
    value: string
    id: string
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

export type ReadingTime = {
    text: string
    minutes: number
    time: number
    words: number
}

export type Flexsearch =
    | boolean
    | {
    /**
     * Whether to index code blocks
     * @default true
     */
    codeblocks: boolean
    /**
     * A filter function to filter out files from indexing, and return the
     * index file key, or null to skip indexing.
     * A site can have multiple indexes, by default they're separated by
     * locales as multiple index files.
     */
    indexKey?: (
        filepath: string,
        route: string,
        locale?: string
    ) => null | string
}


export type ThemeConfig = any | null

export type NextraThemeLayoutProps = {
    pageOpts: PageOpts
    pageProps: any
    themeConfig: ThemeConfig
    children: ReactNode
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

export type DynamicMetaDescriptor = {
    metaFilePath: string
    metaObjectKeyPath: string
    metaParentKeyPath: string
}

export type StructurizedData = Record<string, string>

export type SearchData = {
    [route: string]: {
        title: string
        data: StructurizedData
    }
}