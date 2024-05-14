import fs from "node:fs/promises";
import path from "node:path";
import isRelativeUrl from "is-relative-url";
import mimes from "mime";
import { visit } from "unist-util-visit";
import { Node as UnistNode } from "unist";
import { Image, Root } from "mdast";
import { VFile } from "vfile";
import { existsSync } from "graceful-fs";
import slash from "slash";
import { EXTERNAL_URL_REGEX, PUBLIC_DIR } from "@/server/constants";

const VALID_BLUR_EXT = [".jpeg", ".png", ".webp", ".avif", ".jpg"];

/**
 * Embed local images as data URIs.
 *
 * @returns
 *   Transform.
 */
export function remarkEmbedImages() {
  /**
   * Transform.
   *
   * @param {Root} tree
   *   Tree.
   * @param {VFile} file
   *   File.
   * @returns {Promise<void>}
   *   Nothing.
   *
   *   Note: seems that using `undefined` is not inferred correctly by w`unified`.
   */
  return async function (tree: Root, file: VFile): Promise<void> {
    const base = file.dirname ? path.resolve(file.cwd, file.dirname) : PUBLIC_DIR; //file.cwd;
    const nodes: Array<[Image, string]> = [];
    const promises: Array<Promise<string>> = [];

    visit(tree, "image", function (node) {
      let url = decodeURI(node.url);
      if (!url) {
        return;
      }

      if (EXTERNAL_URL_REGEX.test(url)) {
        // do nothing with images with external url
        return;
      }

      if (url.startsWith("/")) {
        const urlPath = path.join(PUBLIC_DIR, url);
        if (!existsSync(urlPath)) {
          return;
        }
        url = slash(urlPath);
      }

      if (node.url && isRelativeUrl(node.url) && !node.url.startsWith("/")) {
        const filePath = path.resolve(base, node.url);
        const mime = mimes.getType(path.extname(filePath));
        if (mime) {
          nodes.push([node, mime]);
          promises.push(fs.readFile(filePath, "base64"));
        }
      }
    });

    const results = await Promise.all(promises);
    let index = -1;
    while (++index < results.length) {
      const [node, mime] = nodes[index];
      const result = results[index];
      node.url = "data:" + mime + ";base64," + result;
    }
  };
}
