import { useMDXComponents as originalUseMDXComponents } from "@mdx-js/react";
import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import { ComponentProps, createContext, createElement, createRef, ReactElement, ReactNode, RefObject, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
// import Link from "next/link";
import { Code, Pre, Table, Td, Th, Tr } from "@/client/components";
import cn from "clsx";

import type { DocsThemeConfig } from "@/theme/constants";
import { useConfig, useSetActiveAnchor, useThemeConfig } from "@/contexts";
import { useIntersectionObserver, useSlugs } from "@/contexts/active-anchor";
import { renderComponent } from "@/theme/utils";
import { Anchor, Breadcrumb, NavLinks, Sidebar, SkipNavContent } from "@/theme/components";
import { AnchorProps } from "@/theme/components/anchor";
import { useMounted } from "@/client/hooks";
import { NextraMDXContent } from "@/global/types";
import { Details } from "@/theme/components/detail";
import { Summary } from "@/theme/components/summary";

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

export const HeadingContext = createContext<RefObject<HTMLHeadingElement | null>>(createRef());

// const H1 = ({ children }: { children?: ReactNode }): ReactElement => {
//   const ref = useContext(HeadingContext)
//   // const { opts } = useBlogContext()
//   // const [showHeading, setShowHeading] = useState(false)
//   //   useEffect(() => {
//   //
//   //   }, []);(() => {
//   //   if (ref.current && opts.hasJsxInH1) {
//   //     setShowHeading(true)
//   //   }
//   // }, [opts.hasJsxInH1, ref])
//   // return <>{showHeading && createPortal(children, ref.current!)}</>
// }

function HeadingLink({ tag: Tag, children, id, className, ...props }: ComponentProps<"h2"> & { tag: `h${2 | 3 | 4 | 5 | 6}` }): ReactElement {
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
      {id && <a href={`#${id}`} id={id} className="subheading-anchor" aria-label="Permalink for this section" />}
    </Tag>
  );
}

// Anchor links
// function HeadingLink({
//                          tag: Tag,
//                          context,
//                          children,
//                          id,
//                          className,
//                          ...props
//                      }: ComponentProps<'h2'> & {
//     tag: `h${2 | 3 | 4 | 5 | 6}`
//     context: { index.ts: number }
// }): ReactElement {
//     // const setActiveAnchor = useSetActiveAnchor()
//     // const slugs = useSlugs()
//     // const observer = useIntersectionObserver()
//     const obRef = useRef<HTMLAnchorElement>(null)
//
//     useEffect(() => {
//         if (!id) return
//         const heading = obRef.current
//         if (!heading) return
//         slugs.set(heading, [id, (context.index.ts += 1)])
//         observer?.observe(heading)
//
//         return () => {
//             observer?.disconnect()
//             slugs.delete(heading)
//             setActiveAnchor(f => {
//                 const ret = {...f}
//                 delete ret[id]
//                 return ret
//             })
//         }
//     }, [id, context, slugs, observer, setActiveAnchor])
//
//     return (
//         <Tag
//             className={
//                 // can be added by footnotes
//                 className === 'sr-only'
//                     ? 'nx-sr-only'
//                     : cn(
//                         'nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100',
//                         {
//                             h2: 'nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400',
//                             h3: 'nx-mt-8 nx-text-2xl',
//                             h4: 'nx-mt-8 nx-text-xl',
//                             h5: 'nx-mt-8 nx-text-lg',
//                             h6: 'nx-mt-8 nx-text-base'
//                         }[Tag]
//                     )
//             }
//             {...props}
//         >
//             {children}
//             {id && (
//                 <a
//                     href={`#${id}`}
//                     id={id}
//                     className="subheading-anchor"
//                     aria-label="Permalink for this section"
//                     ref={obRef}
//                 />
//             )}
//         </Tag>
//     )
// }

const EXTERNAL_HREF_REGEX = /https?:\/\//;

export const Link = ({ href = "", className, ...props }: AnchorProps) => (
  <Anchor href={href} newWindow={EXTERNAL_HREF_REGEX.test(href)} className={cn("nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]", className)} {...props} />
);

// const A = ({children, href = '', ...props}: ComponentProps<'a'>) => {
//     if (EXTERNAL_HREF_REGEX.test(href)) {
//         return (
//             <a href={href} target="_blank" rel="noreferrer" {...props}>
//                 {children}
//                 <span className="nx-sr-only nx-select-none"> (opens in a new tab)</span>
//             </a>
//         )
//     }
//     return (
//         <Link href={href}>
//             <a {...props}>{children}</a>
//         </Link>
//     )
// }
// <Anchor href={href} newWindow={EXTERNAL_HREF_REGEX.test(href)} {...props} />
const A = ({ href = "", ...props }) => <Anchor href={href} newWindow={EXTERNAL_HREF_REGEX.test(href)} {...props} />;

const classes = {
  toc: cn("nextra-toc nx-order-last max-xl:nx-hidden nx-w-64 nx-shrink-0 print:nx-hidden"),
  main: cn("nx-w-full nx-break-words"),
};

const DEFAULT_COMPONENTS = {
  img: (props: any) => createElement(typeof props.src === "object" ? Image : "img", props as ImageProps),
} satisfies MDXComponents;
// satisfies Components

export const CustomLink = ({ href = "", className, ...props }: any) => (
  <a
    href={href}
    // newWindow={EXTERNAL_HREF_REGEX.test(href)}
    className={cn("nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]", className)}
    {...props}
  />
);

// const A = ({href = '', ...props}) => (
//     <Anchor href={href} newWindow={EXTERNAL_HREF_REGEX.test(href)} {...props} />
// )

function Body({ children }: { children: ReactNode }): ReactElement {
  const config = useConfig();
  const themeConfig = useThemeConfig();
  const mounted = useMounted();
  const { activeThemeContext: themeContext, activeType, activeIndex, flatDocsDirectories, activePath } = config.normalizePagesResult;

  if (themeContext.layout === "raw") {
    return <div className={classes.main}>{children}</div>;
  }

  const date = themeContext.timestamp && themeConfig.gitTimestamp && config.timestamp ? new Date(config.timestamp) : null;

  const gitTimestampEl =
    // Because a user's time zone may be different from the server page
    mounted && date ? (
      <div className="nx-mt-12 nx-mb-8 nx-block nx-text-xs nx-text-gray-500 ltr:nx-text-right rtl:nx-text-left dark:nx-text-gray-400">
        {renderComponent(themeConfig.gitTimestamp, { timestamp: date })}
      </div>
    ) : (
      <div className="nx-mt-16" />
    );

  const content = (
    <>
      {renderComponent(themeContext.topContent)}
      {children}
      {gitTimestampEl}
      {renderComponent(themeContext.bottomContent)}
      {activeType !== "page" && themeContext.pagination && <NavLinks flatDocsDirectories={flatDocsDirectories} currentIndex={activeIndex} />}
    </>
  );

  const body = themeConfig.main?.({ children: content }) || content;

  if (themeContext.layout === "full") {
    return (
      <article
        className={cn(classes.main, "nextra-content nx-min-h-[calc(100vh-var(--nextra-navbar-height))] nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]")}
      >
        {body}
      </article>
    );
  }

  return (
    <article
      className={cn(
        classes.main,
        "nextra-content nx-flex nx-min-h-[calc(100vh-var(--nextra-navbar-height))] nx-min-w-0 nx-justify-center nx-pb-8 nx-pr-[calc(env(safe-area-inset-right)-1.5rem)]",
        themeContext.typesetting === "article" && "nextra-body-typesetting-article",
      )}
    >
      <main className="nx-w-full nx-min-w-0 nx-max-w-6xl nx-px-6 nx-pt-4 md:nx-px-12">
        {activeType !== "page" && themeContext.breadcrumb && <Breadcrumb activePath={activePath} />}
        {body}
      </main>
    </article>
  );
}

export const components = {
  Image,
  ...DEFAULT_COMPONENTS,
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
  // a: A,
  // h1: ({children, ...props}: any) => (<h1 className={"nx-text-red-500"} {...props}>h1h1{children}</h1>),
  p: ({ ...props }: ComponentProps<"p">) => <p className="nx-mt-6 nx-leading-7 first:nx-mt-0" {...props} />,
  tr: Tr,
  th: Th,
  td: Td,
  table: ({ ...props }) => <Table className="nx-not-prose nextra-scrollbar nx-mt-6 nx-p-0 first:nx-mt-0" {...props} />,
  detail: Details,
  summary: Summary,
  pre: Pre,
  code: Code,
  wrapper: function NextraWrapper({ toc, children }) {
    const config = useConfig();
    const themeConfig = useThemeConfig();
    const { activeType, activeThemeContext: themeContext, docsDirectories, directories } = config.normalizePagesResult;

    const tocEl =
      activeType === "page" || !themeContext.toc || themeContext.layout !== "default" ? (
        themeContext.layout !== "full" && themeContext.layout !== "raw" && <nav className={classes.toc} aria-label="table of contents" />
      ) : (
        <nav className={cn(classes.toc, "nx-px-4")} aria-label="table of contents">
          {renderComponent(themeConfig.toc.component, {
            toc: themeConfig.toc.float ? toc : [],
            filePath: config.filePath,
          })}
        </nav>
      );
    return (
      <div className={cn("nx-mx-auto nx-flex", themeContext.layout !== "raw" && "nx-max-w-[90rem]")}>
        <Sidebar docsDirectories={docsDirectories} fullDirectories={directories} toc={toc} asPopover={config.hideSidebar} includePlaceholder={themeContext.layout === "default"} />
        {tocEl}
        <SkipNavContent />
        <Body>{children}</Body>
      </div>
    );
  } satisfies NextraMDXContent,
};

export function getComponents({ isRawLayout, components }: { isRawLayout?: boolean; components?: DocsThemeConfig["components"] }): MDXComponents {
  if (isRawLayout) {
    // @ts-expect-error
    return { a: A, wrapper: DEFAULT_COMPONENTS.wrapper };
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
