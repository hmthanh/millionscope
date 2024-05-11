import { ReactElement, ReactNode } from "react";
import { useConfig, useThemeConfig } from "@/contexts";
import { useMounted } from "@/client/hooks";
import { renderComponent } from "@/theme/utils";
import { NavLinks } from "@/theme/components/nav-links";
import cn from "clsx";
import { Breadcrumb } from "@/theme/components/breadcrumb";

const classes = cn("nx-w-full nx-break-words");

export function Body({ children }: { children: ReactNode }): ReactElement {
  const config = useConfig();
  const themeConfig = useThemeConfig();
  const mounted = useMounted();
  const { activeThemeContext: themeContext, activeType, activeIndex, flatDocsDirectories, activePath } = config.normalizePagesResult;

  if (themeContext.layout === "raw") {
    return <div className={classes}>{children}</div>;
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
        className={cn(classes, "nextra-content nx-min-h-[calc(100vh-var(--nextra-navbar-height))] nx-pl-[max(env(safe-area-inset-left),1.5rem)] nx-pr-[max(env(safe-area-inset-right),1.5rem)]")}
      >
        {body}
      </article>
    );
  }

  return (
    <article
      className={cn(
        classes,
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
