import cn from "clsx";

import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import { ComponentProps, createContext, createElement, createRef, ReactElement, ReactNode, RefObject, useContext, useEffect, useRef, useState } from "react";
import type { DocsThemeConfig } from "@/theme/constants";
import { useConfig, useSetActiveAnchor, useThemeConfig } from "@/contexts";
import { useIntersectionObserver, useSlugs } from "@/contexts/active-anchor";
import { renderComponent } from "@/theme/utils";
import { Anchor, Sidebar, SkipNavContent, Details, Summary, Body } from "@/theme/components";
import { Code, Pre, Table, Td, Th, Tr } from "@/client/components";
import { AnchorProps } from "@/theme/components/anchor";
import { NextraMDXContent, Heading } from "@/global/types";

// Anchor links
const createHeading = (Tag: `h${2 | 3 | 4 | 5 | 6}`, context: { index: number }) =>
  function Heading({ children, id, className, ...props }: ComponentProps<"h2">): ReactElement {
    const setActiveAnchor = useSetActiveAnchor();
    const slugs = useSlugs();
    const observer = useIntersectionObserver();
    const obRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
      if (!id) return;
      const heading = obRef.current;
      if (!heading) return;
      slugs.set(heading, [id, (context.index += 1)]);
      observer?.observe(heading);

      return () => {
        observer?.disconnect();
        slugs.delete(heading);
        setActiveAnchor((f) => {
          const ret = { ...f };
          delete ret[id];
          return ret;
        });
      };
    }, [id, slugs, observer, setActiveAnchor]);

    return (
      <Tag
        className={
          // can be added by footnotes
          className === "sr-only"
            ? "nx-sr-only"
            : cn(
                "nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100",
                {
                  h2: "nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400",
                  h3: "nx-mt-8 nx-text-2xl",
                  h4: "nx-mt-8 nx-text-xl",
                  h5: "nx-mt-8 nx-text-lg",
                  h6: "nx-mt-8 nx-text-base",
                }[Tag],
              )
        }
        {...props}
      >
        {children}
        {id && <a href={`#${id}`} id={id} className="subheading-anchor" aria-label="Permalink for this section" ref={obRef} />}
      </Tag>
    );
  };

const EXTERNAL_HREF_REGEX = /https?:\/\//;

export const Link = ({ href = "", className, ...props }: AnchorProps) => (
  <Anchor href={href} newWindow={EXTERNAL_HREF_REGEX.test(href)} className={cn("nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]", className)} {...props} />
);

const A = ({ href = "", ...props }) => <Anchor href={href} newWindow={EXTERNAL_HREF_REGEX.test(href)} {...props} />;

export const DEFAULT_COMPONENTS = {
  img: (props: any) => createElement(typeof props.src === "object" ? Image : "img", props as ImageProps),
  h1: ({ ...props }: ComponentProps<"h1">) => <h1 className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100" {...props} />,
  // h2: ({ ...props }: ComponentProps<"h2">) => <HeadingLink tag="h2" {...props} />,
  // h3: ({ ...props }: ComponentProps<"h3">) => <HeadingLink tag="h3" {...props} />,
  // h4: ({ ...props }: ComponentProps<"h4">) => <HeadingLink tag="h4" {...props} />,
  // h5: ({ ...props }: ComponentProps<"h5">) => <HeadingLink tag="h5" {...props} />,
  // h6: ({ ...props }: ComponentProps<"h6">) => <HeadingLink tag="h6" {...props} />,
  // ul: ({ ...props }: ComponentProps<"ul">) => <ul className="nx-mt-6 nx-list-disc first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6" {...props} />,
  a: Link,
  ol: ({ ...props }: ComponentProps<"ol">) => <ol className="nx-mt-6 nx-list-decimal first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6" {...props} />,
  li: ({ ...props }: ComponentProps<"li">) => <li className="nx-my-2" {...props} />,
  blockquote: ({ ...props }: ComponentProps<"blockquote">) => (
    <blockquote
      className={cn("nx-mt-6 nx-border-gray-300 nx-italic nx-text-gray-700 dark:nx-border-gray-700 dark:nx-text-gray-400", "first:nx-mt-0 ltr:nx-border-l-2 ltr:nx-pl-6 rtl:nx-border-r-2 rtl:nx-pr-6")}
      {...props}
    />
  ),
  hr: ({ ...props }: ComponentProps<"hr">) => (
    <hr className="nx-my-8 nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400" {...props} />
  ),
  p: ({ ...props }: ComponentProps<"p">) => <p className="nx-mt-6 nx-leading-7 first:nx-mt-0" {...props} />,
  tr: Tr,
  th: Th,
  td: Td,
  table: ({ ...props }) => <Table className="nx-not-prose nextra-scrollbar nx-mt-6 nx-p-0 first:nx-mt-0" {...props} />,
  detail: Details,
  summary: Summary,
  pre: Pre,
  code: Code,
  // wrapper: WRAPPER satisfies NextraMDXContent,
} satisfies MDXComponents;
{
  /*WRAPPER satisfies NextraMDXContent,
   * ({ children }) => <div>{children}</div>,*/
}

export function getComponents({ isRawLayout, components }: { isRawLayout?: boolean; components?: DocsThemeConfig["components"] }): MDXComponents {
  if (isRawLayout) {
    // return { a: A, wrapper: WRAPPER };
    return { a: A };
  }

  const context = { index: 0 };
  return {
    ...DEFAULT_COMPONENTS,
    h2: createHeading("h2", context),
    h3: createHeading("h3", context),
    h4: createHeading("h4", context),
    h5: createHeading("h5", context),
    h6: createHeading("h6", context),
    ...components,
  };
}
