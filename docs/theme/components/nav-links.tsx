import cn from "clsx";
// eslint-disable-next-line no-restricted-imports -- since we don't need newWindow prop
import NextLink from "next/link";
import { ArrowRightIcon } from "@/client/icons";
import type { Item } from "@/client/normalize-pages";
import type { ReactElement } from "react";
import { useThemeConfig } from "@/contexts";
import type { DocsThemeConfig } from "@/theme/constants";

interface NavLinkProps {
  currentIndex: number;
  flatDocsDirectories: Item[];
}

const classes = {
  link: cn(
    "nx-flex nx-max-w-[50%] nx-items-center nx-gap-1 nx-py-4 nx-text-base nx-font-medium nx-text-gray-600 nx-transition-colors [word-break:break-word] hover:nx-text-primary-600 dark:nx-text-gray-300 md:nx-text-lg",
  ),
  icon: cn("nx-inline nx-h-5 nx-shrink-0"),
};

export function NavLinks({ flatDocsDirectories, currentIndex }: NavLinkProps): ReactElement | null {
  const themeConfig = useThemeConfig();
  const nav = themeConfig.navigation;
  const navigation: Exclude<DocsThemeConfig["navigation"], boolean> = typeof nav === "boolean" ? { prev: nav, next: nav } : nav;
  let prev = navigation.prev && flatDocsDirectories[currentIndex - 1];
  let next = navigation.next && flatDocsDirectories[currentIndex + 1];

  if (prev && !prev.isUnderCurrentDocsTree) prev = false;
  if (next && !next.isUnderCurrentDocsTree) next = false;

  if (!prev && !next) return null;

  return (
    <div
      className={cn(
        "nx-mb-8 nx-flex nx-items-center nx-border-t nx-pt-8 dark:nx-border-neutral-800",
        "contrast-more:nx-border-neutral-400 dark:contrast-more:nx-border-neutral-400",
        "print:nx-hidden",
      )}
    >
      {prev && (
        <NextLink href={prev.route} title={prev.title} className={cn(classes.link, "ltr:nx-pr-4 rtl:nx-pl-4")}>
          <ArrowRightIcon className={cn(classes.icon, "ltr:nx-rotate-180")} />
          {prev.title}
        </NextLink>
      )}
      {next && (
        <NextLink href={next.route} title={next.title} className={cn(classes.link, "ltr:nx-ml-auto ltr:nx-pl-4 ltr:nx-text-right rtl:nx-mr-auto rtl:nx-pr-4 rtl:nx-text-left")}>
          {next.title}
          <ArrowRightIcon className={cn(classes.icon, "rtl:nx-rotate-180")} />
        </NextLink>
      )}
    </div>
  );
}
