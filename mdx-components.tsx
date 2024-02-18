// import { Code, Pre, Table, Td, Th, Tr } from "@nextra/components"
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
    // pre: Pre,
    // code: Code,
    ...components,
  }
}
