"use client"

import cn from "clsx"
import { ComponentProps, ReactElement, useRef, useEffect } from "react"
import { DetailsProvider, useDetails, useSetActiveAnchor } from "@contexts"
import { useIntersectionObserver, useSlugs } from "@contexts/active-anchor"

// Anchor links
export function HeadingLink({
  tag: Tag,
  context,
  children,
  id,
  className,
  ...props
}: ComponentProps<"h2"> & {
  tag: `h${2 | 3 | 4 | 5 | 6}`
  context: { index: number }
}): ReactElement {
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
      setActiveAnchor((f) => {
        const ret = { ...f }
        delete ret[id]
        return ret
      })
    }
  }, [id, context, slugs, observer, setActiveAnchor])

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
              }[Tag]
            )
      }
      {...props}
    >
      {children}
      {id && (
        <a href={`#${id}`} id={id} className="subheading-anchor" aria-label="Permalink for this section" ref={obRef} />
      )}
    </Tag>
  )
}
