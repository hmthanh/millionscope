// import { Code, Pre, Table, Td, Th, Tr } from "@scope/components"
import type { MDXComponents } from "mdx/types"
import cn from "clsx"
import type { Components } from "nextra/mdx"
import type { AnchorProps } from "@components/anchor"
import { HeadingLink } from "@components/heading-link"
import type { ComponentProps, ReactElement, ReactNode } from "react"
import { Children, cloneElement, useEffect, useRef, useState } from "react"
import type { DocsThemeConfig } from "@config/constants"
import { DetailsProvider, useDetails, useSetActiveAnchor } from "@contexts"
import { useIntersectionObserver, useSlugs } from "@contexts/active-anchor"
import { Pre } from "@scope/components"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const context = { index: 0 }

  return {
    h1: (props) => (
      <h1
        className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100"
        {...props}
      />
    ),
    h2: (props) => <HeadingLink tag="h2" context={context} {...props} />,
    h3: (props) => <HeadingLink tag="h3" context={context} {...props} />,
    h4: (props) => <HeadingLink tag="h4" context={context} {...props} />,
    h5: (props) => <HeadingLink tag="h5" context={context} {...props} />,
    h6: (props) => <HeadingLink tag="h6" context={context} {...props} />,
    ul: (props) => <ul className="nx-mt-6 nx-list-disc first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6" {...props} />,
    ol: (props) => <ol className="nx-mt-6 nx-list-decimal first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6" {...props} />,
    li: (props) => <li className="nx-my-2" {...props} />,
    blockquote: (props) => (
      <blockquote
        className={cn(
          "nx-mt-6 nx-border-gray-300 nx-italic nx-text-gray-700 dark:nx-border-gray-700 dark:nx-text-gray-400",
          "first:nx-mt-0 ltr:nx-border-l-2 ltr:nx-pl-6 rtl:nx-border-r-2 rtl:nx-pr-6"
        )}
        {...props}
      />
    ),
    hr: (props) => (
      <hr
        className="nx-my-8 nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400"
        {...props}
      />
    ),

    p: props => <p className="nx-mt-6 nx-leading-7 first:nx-mt-0" {...props} />,
    pre: Pre,
    // code: Code,
    ...components,
  }
}
