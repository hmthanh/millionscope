import fs from "fs";
import path from "path";
import {promisify} from 'node:util'
import matter from "gray-matter";
import type {MDXFrontMatter} from "@/lib/types";
import {MARKDOWN_EXTENSION_REGEX} from "@/lib/constants";

const root = process.cwd();

export const postsPath = path.join(root, "posts");


export const getMdx = (fileName: string) => {
    const fullPath = path.join(postsPath, fileName);
    const isMarkDown = MARKDOWN_EXTENSION_REGEX.test(fileName)
    if (isMarkDown) {

    }
    const docSource = fs.readFileSync(fullPath, "utf-8");

    const {data, content} = matter(docSource);

    let searchIndexKey: string | null = null

    return {
        frontMatter: {
            ...data,
            slug: fileName.replace(".mdx", ""),
        } as MDXFrontMatter,
        content,
    };
};

export const getAllMdx = () => {
    const items = fs.readdirSync(postsPath).map((item) => getMdx(item));
    return items.sort(
        (a, b) =>
            new Date(b.frontMatter.date).getTime() -
            new Date(a.frontMatter.date).getTime()
    );
};
