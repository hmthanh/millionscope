import fs from 'graceful-fs'
import * as findPagesDirImport from 'next/dist/lib/find-pages-dir'
import { CWD } from '@/global/constants'
import { getDefault } from './utils'

const { findPagesDir } = getDefault(findPagesDirImport)

export const { existsSync } = fs

export function findPagesDirectory(): string {
    const res = findPagesDir(CWD)
    return (
        res.pagesDir || // next v13
        (res as any).pages // next v12
    )
}

export const PAGES_DIR = process.env.VITEST_WORKER_ID
    ? ''
    : findPagesDirectory()