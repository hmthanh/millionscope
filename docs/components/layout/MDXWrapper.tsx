import { ReactElement, ReactNode } from "react";
import { UseTOC } from "@/global/types";
import { useMDXComponents } from "@/client/mdx";

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