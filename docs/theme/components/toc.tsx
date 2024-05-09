import cn from "clsx";
import type { Heading } from "@/global/types";
import { removeLinks } from "@/client/remove-links";
import type { ReactElement } from "react";
import { useEffect, useRef } from "react";
import scrollIntoView from "scroll-into-view-if-needed";
import { useActiveAnchor, useThemeConfig } from "@/contexts";
import { renderComponent } from "../utils";
import { Anchor } from "./anchor";
import { BackToTop } from "./back-to-top";

export type TOCProps = {
  toc: Heading[];
  filePath: string;
};

const linkClassName = cn(
  "nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100",
  "contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50",
);

export function TOC({ toc, filePath }: TOCProps): ReactElement {
  const activeAnchor = useActiveAnchor();
  const tocRef = useRef<HTMLUListElement>(null);
  const themeConfig = useThemeConfig();

  const hasHeadings = (toc ? toc.length : 0) > 0;
  const hasMetaInfo = Boolean(themeConfig.feedback.content || themeConfig.editLink.component || themeConfig.toc.extraContent || themeConfig.toc.backToTop);

  const activeSlug = Object.entries(activeAnchor).find(([, { isActive }]) => isActive)?.[0];
  const activeIndex = (toc ? toc.findIndex(({ id }) => id === activeSlug) : -1);

  useEffect(() => {
    if (!activeSlug) return;
    const anchor = tocRef.current?.querySelector(`a[href="#${activeSlug}"]`);

    if (anchor) {
      scrollIntoView(anchor, {
        behavior: "smooth",
        block: "center",
        inline: "center",
        scrollMode: "always",
        boundary: tocRef.current,
      });
    }
  }, [activeSlug]);

  return (
    <div
      className={cn(
        "nextra-scrollbar nx-sticky nx-top-16 nx-overflow-y-auto nx-pr-4 nx-pt-6 nx-text-sm [hyphens:auto]",
        "nx-max-h-[calc(100vh-var(--nextra-navbar-height)-env(safe-area-inset-bottom))] ltr:nx--mr-4 rtl:nx--ml-4",
        "nx-z-[-1]", // for firefox https://github.com/shuding/nextra/issues/2824
      )}
    >
      {hasHeadings && (
        <>
          <p className="nx-mb-4 nx-font-semibold nx-tracking-tight">{renderComponent(themeConfig.toc.title)}</p>
          <ul ref={tocRef}>
            {toc.map(({ id, value, depth }) => (
              <li className="nx-my-2 nx-scroll-my-6 nx-scroll-py-6" key={id}>
                <a
                  href={`#${id}`}
                  className={cn(
                    {
                      2: "nx-font-semibold",
                      3: "ltr:nx-pl-4 rtl:nx-pr-4",
                      4: "ltr:nx-pl-8 rtl:nx-pr-8",
                      5: "ltr:nx-pl-12 rtl:nx-pr-12",
                      6: "ltr:nx-pl-16 rtl:nx-pr-16",
                    }[depth],
                    "nx-inline-block nx-transition-colors nx-subpixel-antialiased",
                    activeAnchor[id]?.isActive ? "nx-text-primary-600 contrast-more:!nx-text-primary-600" : "nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-300",
                    "contrast-more:nx-text-gray-900 contrast-more:nx-underline contrast-more:dark:nx-text-gray-50 nx-w-full nx-break-words",
                  )}
                >
                  {removeLinks(value)}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      {hasMetaInfo && (
        <div className={cn(hasHeadings && "nextra-toc-footer nx-mt-8 nx-pt-8", "nx-sticky nx-bottom-0 nx-flex nx-flex-col nx-items-start nx-gap-2 nx-pb-8")}>
          {themeConfig.feedback.content ? (
            <Anchor className={linkClassName} href={themeConfig.feedback.useLink()} newWindow>
              {renderComponent(themeConfig.feedback.content)}
            </Anchor>
          ) : null}

          {renderComponent(themeConfig.editLink.component, {
            filePath,
            className: linkClassName,
            children: renderComponent(themeConfig.editLink.content),
          })}

          {renderComponent(themeConfig.toc.extraContent)}

          {themeConfig.toc.backToTop && (
            // <BackToTop className={linkClassName} hidden={activeIndex < 2} />
            <BackToTop className={linkClassName} />
          )}
        </div>
      )}
    </div>
  );
}
