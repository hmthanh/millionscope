import type { PageOpts } from "@scopeui/types"
import type { ReactNode } from "react"
// import type { DocsThemeConfig } from "@/config/constants"

// export type Context = {
//   pageOpts: PageOpts
//   themeConfig: DocsThemeConfig
// }

export type SearchResult = {
  children: ReactNode
  id: string
  prefix?: ReactNode
  route: string
}
