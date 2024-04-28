/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { remove } from 'unist-util-remove'
import { Plugin, Transformer } from 'unified'
import { Node } from 'unist';

/**
 * remark plugin which removes all import and export statements
 */
export function removeImportsExportsPlugin(): Plugin {
    const transformer: Transformer<Node, any> = (tree: Node) => {
        remove(tree, 'mdxjsEsm')

        return tree;
    };

    // return (tree) => remove(tree, 'mdxjsEsm')
    return transformer as Plugin
}