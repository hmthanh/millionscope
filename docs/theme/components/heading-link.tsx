"use client"

import { ComponentProps, ReactElement, useRef, useEffect } from 'react';
import { useSetActiveAnchor, useSlugs, useIntersectionObserver } from '@/contexts/active-anchor';
import cn from 'clsx';

// Anchor links
export const createHeading = (
  Tag: `h${2 | 3 | 4 | 5 | 6}`,
  context: { index: number }
) =>
  function Heading({
    children,
    id,
    className,
    ...props
  }: ComponentProps<'h2'>): ReactElement {
    const setActiveAnchor = useSetActiveAnchor()
    const slugs = useSlugs()
    const observer = useIntersectionObserver()
    const obRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
      if (!id) return
      const heading = obRef.current
      if (!heading) return
      slugs.set(heading, [id, (context.index += 1)])
      observer?.observe(heading)

      return () => {
        observer?.disconnect()
        slugs.delete(heading)
        setActiveAnchor(f => {
          const ret = { ...f }
          delete ret[id]
          return ret
        })
      }
    }, [id, slugs, observer, setActiveAnchor])

    return (
      <Tag
        className={
          // can be added by footnotes
          className === 'sr-only'
            ? '_sr-only'
            : cn(
              '_font-semibold _tracking-tight _text-slate-900 dark:_text-slate-100',
              {
                h2: '_mt-10 _border-b _pb-1 _text-3xl _border-neutral-200/70 contrast-more:_border-neutral-400 dark:_border-primary-100/10 contrast-more:dark:_border-neutral-400',
                h3: '_mt-8 _text-2xl',
                h4: '_mt-8 _text-xl',
                h5: '_mt-8 _text-lg',
                h6: '_mt-8 _text-base'
              }[Tag]
            )
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
            ref={obRef}
          />
        )}
      </Tag>
    )
  }