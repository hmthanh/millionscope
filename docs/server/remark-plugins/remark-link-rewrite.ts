import type {Root} from 'mdast'
import type {Plugin} from 'unified'
import {visit} from 'unist-util-visit'
import {EXTERNAL_URL_REGEX} from '@/server/constants'

export type RemarkLinkRewriteOptions = {
    pattern: RegExp
    replace: string
    excludeExternalLinks?: boolean
}

export const remarkLinkRewrite: Plugin<[RemarkLinkRewriteOptions], Root> =
    ({pattern, replace, excludeExternalLinks}) =>
        ast => {
            visit(ast, 'link', node => {
                if (!(excludeExternalLinks && EXTERNAL_URL_REGEX.test(node.url))) {
                    node.url = node.url.replace(pattern, replace)
                }
            })
        }