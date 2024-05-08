import { ReactElement } from "react";
import { NextraInternalGlobal, NextraMDXContent, PageOpts, UseTOC } from "@/global/types";
import { NEXTRA_INTERNAL } from "@/global/constants";

// { __nextra_pageMap = [], __nextra_dynamic_opts, ...props }: any
export function NextraLayout({ MDXContent, route, pageOpts, useTOC }: { MDXContent: NextraMDXContent; route: string; pageOpts: PageOpts; useTOC: UseTOC }): ReactElement {
  const __nextra_internal__ = (globalThis as NextraInternalGlobal)[NEXTRA_INTERNAL];

  __nextra_internal__.route = route;
  __nextra_internal__.pageMap = pageOpts.pageMap;
  __nextra_internal__.context[route] = {
    Content: MDXContent,
    pageOpts,
    useTOC,
  };

  return <></>;
}
