// // import fs from 'graceful-fs'
// // import * as findPagesDirImport from 'next/dist/lib/find-pages-dir'
// // import { CWD } from '@/server/constants'
// // import { getDefault } from './utils'

// // const { findPagesDir } = getDefault(findPagesDirImport)

// export const { existsSync } = fs

// // export function findPagesDirectory(): string {
// //     const res = findPagesDir(CWD)
// //     return (
// //         res.pagesDir || // next v13
// //         (res as any).pages // next v12
// //     )
// // }

// // export const PAGES_DIR = process.env.VITEST_WORKER_ID
// //     ? ''
// //     : findPagesDirectory()

import * as pkg from 'next/dist/lib/find-pages-dir.js'
import { CWD } from '@/server/constants'

export function findPagesDirectory(): string {
    const { pagesDir } = pkg.findPagesDir(CWD)
    if (!pagesDir) {
        throw new Error('Unable to find `pages` directory')
    }
    return pagesDir
}

export const PAGES_DIR = findPagesDirectory()