import { useMDXComponents as originalUseMDXComponents } from "@mdx-js/react";
// import type { Components } from '@mdx-js/react/lib'
import type { MDXComponents as Components } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import { createElement } from "react";
// import { MDXComponents } from "@mdx-js/react/lib";

const DEFAULT_COMPONENTS = {
  img: (props: any) => createElement(typeof props.src === "object" ? Image : "img", props as ImageProps),
} satisfies Components;

export const useMDXComponents: typeof originalUseMDXComponents = (components): Components => {
  return originalUseMDXComponents({
    ...DEFAULT_COMPONENTS,
    ...components,
  });
};

export { MDXProvider } from "@mdx-js/react";

export type { Components };
