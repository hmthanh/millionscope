"use client"

import cn from "clsx"
import type { ComponentProps, ReactElement, ReactNode } from 'react'
import { Children, cloneElement, useEffect, useRef, useState } from 'react'
import { Collapse } from "../theme/components/collapse"
import { DetailsProvider } from "@/contexts"

const findSummary = (children: ReactNode) => {
  let summary: ReactNode = null
  const restChildren: ReactNode[] = []

  Children.forEach(children, (child:any, index:any) => {
      // if (child && (child as ReactElement).type === Summary) {
      //     summary ||= child
      //     return
      // }

      let c = child
      if (
          !summary &&
          child &&
          typeof child === 'object' &&
          (child as ReactElement).type !== Details &&
          'props' in child &&
          child.props
      ) {
          const result = findSummary(child.props.children)
          summary = result[0]
          c = cloneElement(child, {
              ...child.props,
              children: result[1]?.length ? result[1] : undefined,
              key: index
          })
      }
      restChildren.push(c)
  })

  return [summary, restChildren]
}


export const Details = ({
  children,
  open,
  ...props
}: ComponentProps<'details'>): ReactElement => {
  const [openState, setOpen] = useState(!!open)
  const [summary, restChildren] = findSummary(children)

  // To animate the close animation we have to delay the DOM node state here.
  const [delayedOpenState, setDelayedOpenState] = useState(openState)
  useEffect(() => {
      if (openState) {
          setDelayedOpenState(true)
      } else {
          const timeout = setTimeout(() => setDelayedOpenState(openState), 500)
          return () => clearTimeout(timeout)
      }
  }, [openState])

  return (
      <details
          className="nx-my-4 nx-rounded nx-border nx-border-gray-200 nx-bg-white nx-p-2 nx-shadow-sm first:nx-mt-0 dark:nx-border-neutral-800 dark:nx-bg-neutral-900"
          {...props}
          open={delayedOpenState}
          {...(openState && { 'data-expanded': true })}
      >
          <DetailsProvider value={setOpen}>{summary}</DetailsProvider>
          <Collapse isOpen={openState}>{restChildren}</Collapse>
      </details>
  )
}
