import {Note} from "./note";
import {useMDXComponents as originalUseMDXComponents} from '@mdx-js/react'
import type {MDXComponents} from 'mdx/types'
import Image, {type ImageProps} from 'next/image'
import {ComponentProps, createContext, createElement, createRef, ReactElement, ReactNode, RefObject, useContext, useEffect, useState} from 'react'
import {createPortal} from "react-dom";
import Link from "next/link";
import {Pre, Td, Th, Tr} from "@scopeui/components";

export const HeadingContext = createContext<
    RefObject<HTMLHeadingElement | null>
>(createRef())

// const H1 = ({ children }: { children?: ReactNode }): ReactElement => {
//   const ref = useContext(HeadingContext)
//   const { opts } = useBlogContext()
//   const [showHeading, setShowHeading] = useState(false)
//     useEffect(() => {
//
//     }, []);(() => {
//     if (ref.current && opts.hasJsxInH1) {
//       setShowHeading(true)
//     }
//   }, [opts.hasJsxInH1, ref])
//   return <>{showHeading && createPortal(children, ref.current!)}</>
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
    a: A,
    pre: ({children, ...props}: any) => (
        <div className="nx-not-prose">
            <Pre {...props}>{children}</Pre>
        </div>
    ),
    tr: Tr,
    th: Th,
    td: Td,
    // h1: (children) => <h1>{children}</h1>
};
