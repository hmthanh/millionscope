declare module 'title' {
    export default function title(
        title: string,
        special?: {
            special: string[]
        }
    )
}

interface IPageMeta {
    title: string
}

declare global {
    import type {PageMapItem} from './types'

    var __nextra_resolvePageMap: Record<string, () => Promise<PageMapItem[]>>
    var globalData: IPageMeta = {}
}

declare module '*.svg' {
    import type {ComponentPropsWithRef, ReactElement} from 'react'
    export const ReactComponent: (
        _props: ComponentPropsWithRef<'svg'>
    ) => ReactElement
}
