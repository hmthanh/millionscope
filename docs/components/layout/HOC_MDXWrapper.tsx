import { NextraInternalGlobal, NextraMDXContent, PageOpts, UseTOC } from "@/global/types";
import { NEXTRA_INTERNAL } from "@/global/constants";
import { ReactElement, ReactNode } from "react";
import { useMDXComponents } from "@/client/mdx";
import { findFolder } from "@/global/utils";
import { useRouter } from "@/client/hooks";
import { DataProvider } from "@/client/hooks/use-data";

export function HOC_MDXWrapper(MDXContent: NextraMDXContent, route: string, pageOpts: PageOpts, useTOC: UseTOC) {
  // Make sure the same component is always returned so Next.js will render the
  // stable layout. We then put the actual content into a global store and use
  // the route to identify it.
  const __nextra_internal__ = (globalThis as NextraInternalGlobal)[NEXTRA_INTERNAL];

  __nextra_internal__.route = route;
  __nextra_internal__.pageMap = pageOpts.pageMap;
  __nextra_internal__.context[route] = {
    Content: MDXContent,
    pageOpts,
    useTOC,
  };
  return NextraLayout;
}

export function NextraLayout({ __nextra_pageMap = [], __nextra_dynamic_opts, ...props }: any): ReactElement {
  const __nextra_internal__ = (globalThis as NextraInternalGlobal)[NEXTRA_INTERNAL];
  const { Layout, themeConfig } = __nextra_internal__;
  const { route, locale } = useRouter();

  const pageContext = __nextra_internal__.context[route];

  if (!pageContext) {
    throw new Error(`No content found for the "${route}" route. Please report it as a bug.`);
  }

  let { pageOpts, useTOC, Content } = pageContext;

  for (const { route, children } of __nextra_pageMap) {
    const paths = route.split("/").slice(locale ? 2 : 1);
    const folder = findFolder(pageOpts.pageMap, paths);
    folder.children = children;
  }

  if (__nextra_dynamic_opts) {
    const { title, frontMatter } = __nextra_dynamic_opts;
    pageOpts = {
      ...pageOpts,
      title,
      frontMatter,
    };
  }

  return (
    <Layout themeConfig={themeConfig} pageOpts={pageOpts} pageProps={props}>
      <DataProvider value={props}>
        <MDXWrapper useTOC={useTOC}>
          <Content {...props} />
        </MDXWrapper>
      </DataProvider>
    </Layout>
  );
}

export function MDXWrapper({ children, useTOC }: { children: ReactNode; useTOC: UseTOC }): ReactElement {
  const { wrapper } = useMDXComponents();
  return (
    <TOCWrapper useTOC={useTOC} wrapper={wrapper}>
      {children}
    </TOCWrapper>
  );
}

// Wrapper to avoid following errors:
// Uncaught Error: Rendered fewer hooks than expected. This may be caused by an accidental early return statement.
// and
// Warning: React has detected a change in the order of Hooks called by NextraMDXContent. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks
export function TOCWrapper({ children, useTOC, wrapper: Wrapper, ...props }: { children: ReactNode; useTOC: UseTOC; wrapper?: any }): ReactElement {
  const toc = useTOC(props);
  return Wrapper ? <Wrapper toc={toc}>{children}</Wrapper> : (children as any);
}
