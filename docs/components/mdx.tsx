import {Note} from "./note";
import {useMDXComponents as originalUseMDXComponents} from '@mdx-js/react'
import type {MDXComponents} from 'mdx/types'
import Image, {type ImageProps} from 'next/image'
import {ComponentProps, createContext, createElement, createRef, ReactElement, ReactNode, RefObject, useContext, useEffect, useRef, useState} from 'react'
import {createPortal} from "react-dom";
import Link from "next/link";
import {Code, Pre, Table, Td, Th, Tr} from "@scopeui/components";
import cn from "clsx";

export const HeadingContext = createContext<
    RefObject<HTMLHeadingElement | null>
>(createRef())

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

function HeadingLink(
    {
        tag: Tag,
        children,
        id,
        className,
        ...props
    }: ComponentProps<'h2'> & { tag: `h${2 | 3 | 4 | 5 | 6}` }): ReactElement {
    return (
        <Tag
            className={
                // can be added by footnotes
                className === 'sr-only'
                    ? 'nx-sr-only'
                    : `nx-not-prose subheading-${Tag}`
            }
            {...props}
        >
            {children}
            {id && (
                <a
                    href={`#${id}`}
                    id={id}
                    className="subheading-anchor"
                    aria-label="Permalink for this section"
                />
            )}
        </Tag>
    )
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
//     context: { index: number }
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
//         slugs.set(heading, [id, (context.index += 1)])
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


const EXTERNAL_HREF_REGEX = /https?:\/\//

const A = ({children, href = '', ...props}: ComponentProps<'a'>) => {
    if (EXTERNAL_HREF_REGEX.test(href)) {
        return (
            <a href={href} target="_blank" rel="noreferrer" {...props}>
                {children}
                <span className="nx-sr-only nx-select-none"> (opens in a new tab)</span>
            </a>
        )
    }
    return (
        <Link href={href} passHref legacyBehavior>
            <a {...props}>{children}</a>
        </Link>
    )
}

const DEFAULT_COMPONENTS = {
    img: (props: any) =>
        createElement(
            typeof props.src === 'object' ? Image : 'img',
            props as ImageProps
        )
} satisfies MDXComponents
// satisfies Components

export const components = {
    Image,
    Note,
    ...DEFAULT_COMPONENTS,
    h2: ({...props}: ComponentProps<'h2'>) => <HeadingLink tag="h2" {...props} />,
    h3: ({...props}: ComponentProps<'h3'>) => <HeadingLink tag="h3" {...props} />,
    h4: ({...props}: ComponentProps<'h4'>) => <HeadingLink tag="h4" {...props} />,
    h5: ({...props}: ComponentProps<'h5'>) => <HeadingLink tag="h5" {...props} />,
    h6: ({...props}: ComponentProps<'h6'>) => <HeadingLink tag="h6" {...props} />,
    ul: ({...props}: ComponentProps<'ul'>) => (
        <ul
            className="nx-mt-6 nx-list-disc first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6"
            {...props}
        />
    ),
    ol: ({...props}: ComponentProps<'ol'>) => (
        <ol
            className="nx-mt-6 nx-list-decimal first:nx-mt-0 ltr:nx-ml-6 rtl:nx-mr-6"
            {...props}
        />
    ),
    li: ({...props}: ComponentProps<'li'>) => <li className="nx-my-2" {...props} />,
    blockquote: ({...props}: ComponentProps<'blockquote'>) => (
        <blockquote
            className={cn(
                'nx-mt-6 nx-border-gray-300 nx-italic nx-text-gray-700 dark:nx-border-gray-700 dark:nx-text-gray-400',
                'first:nx-mt-0 ltr:nx-border-l-2 ltr:nx-pl-6 rtl:nx-border-r-2 rtl:nx-pr-6'
            )}
            {...props}
        />
    ),
    hr: ({...props}: ComponentProps<'hr'>) => (
        <hr
            className="nx-my-8 nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400"
            {...props}
        />
    ),
    a: A,

    // h1: ({children, ...props}: any) => (<h1 className={"nx-text-red-500"} {...props}>h1h1{children}</h1>),
    p: ({...props}: ComponentProps<'p'>) => <p className="nx-mt-6 nx-leading-7 first:nx-mt-0" {...props} />,
    tr: Tr,
    th: Th,
    td: Td,
    table: ({...props}) => <Table className="nx-not-prose nextra-scrollbar nx-mt-6 nx-p-0 first:nx-mt-0" {...props} />,
    // detail:
    // summary:
    pre: ({children, ...props}: any) => (
        <div className="nx-not-prose">
            <Pre {...props}>{children}</Pre>
        </div>
    ),
    code: Code,
};
