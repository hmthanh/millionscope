import { GrayMatterFile } from 'gray-matter';


export type FrontMatter = GrayMatterFile<string>["data"]
export type Meta = string | Record<string, any>

export type MdxFile<FrontMatterType = FrontMatter> = {
  kind: "MdxPage"
  name: string
  route: string
  locale?: string
  frontMatter?: FrontMatterType
}
export type MetaJsonFile = {
  kind: "Meta"
  locale?: string
  data: {
    [fileName: string]: Meta
  }
  // The path to the _meta.json file. This is a private property needed by the loader.
  __nextra_src?: string
}

export interface Folder<FileType = PageMapItem> {
  kind: "Folder"
  name: string
  route: string
  children: FileType[]
}

export type PageMapItem = Folder | MdxFile | MetaJsonFile

// export { removeLinks } from './remove-links.js'

export function normalizeMeta(meta: Meta): Exclude<Meta, string> {
  return typeof meta === 'string' ? { title: meta } : meta
}

export function isMeta(item: PageMapItem): item is MetaJsonFile {
  return 'data' in item
}

export function isFolder(item: PageMapItem): item is Folder {
  return 'children' in item
}

export function isMdxFile(item: PageMapItem): item is MdxFile {
  return 'route' in item && !('children' in item)
}