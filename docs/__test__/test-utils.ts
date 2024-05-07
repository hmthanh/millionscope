import prettier from "prettier";
import { VFile } from "vfile";

export async function clean(content: VFile | string): Promise<string> {
  if (typeof content !== "string") {
    content = String(content);
  }

  return prettier.format(content, {
    parser: "typescript",
    semi: false,
    trailingComma: "none",
    singleQuote: true,
    printWidth: 120,
    arrowParens: "avoid",
  });
}
