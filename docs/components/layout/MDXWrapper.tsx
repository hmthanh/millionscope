import { ReactElement, ReactNode } from "react";
import { Heading, UseTOC } from "@/global/types";
import { useMDXComponents } from "@/client/mdx";
import { Wrapper } from "@/client/components";

export function MDXWrapper({ children, toc }: { children: ReactNode; toc: Heading[] }): ReactElement {
  const { wrapper } = useMDXComponents();
  return <TOCWrapper toc={toc}>{children}</TOCWrapper>;
}

// Wrapper to avoid following errors:
// Uncaught Error: Rendered fewer hooks than expected. This may be caused by an accidental early return statement.
// and
// Warning: React has detected a change in the order of Hooks called by NextraMDXContent. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks
export function TOCWrapper({ children, toc, ...props }: { children: ReactNode; toc: Heading[] }): ReactElement {
  // const toc = useTOC(props);
  // const { wrapper } = useMDXComponents();
  return <Wrapper toc={toc}>{children}</Wrapper>;
}
