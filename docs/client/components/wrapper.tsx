import { Heading } from "@/global/types";
import { ReactNode } from "react";
import { useConfig, useThemeConfig } from "@/contexts";
import cn from "clsx";
import { renderComponent } from "@/theme/utils";
import { Body, Sidebar, SkipNavContent } from "@/theme/components";

const classToc = cn("nextra-toc nx-order-last max-xl:nx-hidden nx-w-64 nx-shrink-0 print:nx-hidden");

export function Wrapper({ toc, children }: { toc: Heading[]; children: ReactNode }) {
  const config = useConfig();
  const themeConfig = useThemeConfig();
  const { activeType, activeThemeContext: themeContext, docsDirectories, directories } = config.normalizePagesResult;

  const tocEl =
    activeType === "page" || !themeContext.toc || themeContext.layout !== "default" ? (
      themeContext.layout !== "full" && themeContext.layout !== "raw" && <nav className={classToc} aria-label="table of contents" />
    ) : (
      <nav className={cn(classToc, "nx-px-4")} aria-label="table of contents">
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
}
