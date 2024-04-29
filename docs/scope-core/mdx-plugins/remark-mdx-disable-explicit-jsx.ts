import type { Root } from 'mdast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

export const remarkMdxDisableExplicitJsx: Plugin<
  [{ whiteList: string[] }],
  Root
> =
  ({ whiteList }) =>
  tree => {
    const test = whiteList.map(name => ({ name }))
    visit(tree, test, node => {
      // TODO : Resolve uncomment
      // delete node.data!._mdxExplicitJsx
    })
  }
