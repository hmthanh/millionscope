import cn from 'clsx'
import type { MDXComponents } from 'mdx/types'
import type { ComponentProps, ReactElement, ReactNode } from 'react'
import { Children, cloneElement, useEffect, useRef, useState } from 'react'
// import { Anchor, Collapse } from '@/components'
// import type { AnchorProps } from '@/components/anchor'
// import { Code, Pre, Table, Td, Th, Tr } from '@/components'
// import type { Components } from 'nextra/mdx'
// import { Anchor, Collapse } from '@/components'
// import type { AnchorProps } from '@/components/anchor'
// import type { DocsThemeConfig } from '@/config'
import { DetailsProvider, useDetails, useSetActiveAnchor } from './contexts'
import { useIntersectionObserver, useSlugs } from './contexts/active-anchor'

import Image, { type ImageProps } from 'next/image'
import { createElement } from 'react'


// Anchor links
// function HeadingLink({
//     tag: Tag,
//     context,
//     children,
//     id,
//     className,
//     ...props
// }: ComponentProps<'h2'> & {
//     tag: `h${2 | 3 | 4 | 5 | 6}`
//     context: { index: number }
// }): ReactElement {
//     const setActiveAnchor = useSetActiveAnchor()
//     const slugs = useSlugs()
//     const observer = useIntersectionObserver()
//     const obRef = useRef<HTMLAnchorElement>(null)

//     useEffect(() => {
//         if (!id) return
//         const heading = obRef.current
//         if (!heading) return
//         slugs.set(heading, [id, (context.index += 1)])
//         observer?.observe(heading)

//         return () => {
//             observer?.disconnect()
//             slugs.delete(heading)
//             setActiveAnchor(f => {
//                 const ret = { ...f }
//                 delete ret[id]
//                 return ret
//             })
//         }
//     }, [id, context, slugs, observer, setActiveAnchor])

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

// const Summary = (props: ComponentProps<'summary'>): ReactElement => {
//     const setOpen = useDetails()
//     return (
//       <summary
//         className={cn(
//           'nx-flex nx-items-center nx-cursor-pointer nx-list-none nx-p-1 nx-transition-colors hover:nx-bg-gray-100 dark:hover:nx-bg-neutral-800',
//           "before:nx-mr-1 before:nx-inline-block before:nx-transition-transform before:nx-content-[''] dark:before:nx-invert before:nx-shrink-0",
//           'rtl:before:nx-rotate-180 [[data-expanded]>&]:before:nx-rotate-90'
//         )}
//         {...props}
//         onClick={e => {
//           e.preventDefault()
//           setOpen(v => !v)
//         }}
//       />
//     )
//   }

// const EXTERNAL_HREF_REGEX = /https?:\/\//

// export const Link = ({ href = '', className, ...props }: AnchorProps) => (
//     <Anchor
//         href={href}
//         newWindow={EXTERNAL_HREF_REGEX.test(href)}
//         className={cn(
//             'nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]',
//             className
//         )}
//         {...props}
//     />
// )

// const A = ({ href = '', ...props }) => (
//     <Anchor href={href} newWindow={EXTERNAL_HREF_REGEX.test(href)} {...props} />
// )


export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="nx-mt-2 nx-text-4xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className='nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400'>{children}</h2>
        ),
        // h3: props => <HeadingLink tag="h3" context={context} {...props} />,
        // h4: props => <HeadingLink tag="h4" context={context} {...props} />,
        // h5: props => <HeadingLink tag="h5" context={context} {...props} />,
        // h6: props => <HeadingLink tag="h6" context={context} {...props} />,
        p: ({ children }) => (
            <p className='nx-mt-6 nx-leading-7 first:nx-mt-0'>{children}</p>
        ),
        img: (props: any) =>
            createElement(
                typeof props.src === 'object' ? Image : 'img',
                props as ImageProps
            ),
        ...components,
    }
}