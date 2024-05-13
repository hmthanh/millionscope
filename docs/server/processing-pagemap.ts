import { DocsItem, Item, MenuItem, NormalizedResult, PageItem, PageTheme } from "@/global/normalize-pages";
import { DynamicFolder, DynamicMeta, DynamicMetaDescriptor, DynamicMetaItem, DynamicMetaJsonFile, Folder, PageMapItem, PageOpts, ThemeConfig } from "@/global/types";
import { FC } from "react";
import { normalizePageRoute, pageTitleFromFilename } from "@/server/utils";

function isFolder(value: DynamicMetaItem): value is DynamicFolder {
  return !!value && typeof value === "object" && value.type === "folder";
}

function normalizeMetaData(obj: DynamicMeta): DynamicMeta {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      if (isFolder(value)) {
        const keyWithoutSlash = key.replace("/", "");
        return [keyWithoutSlash, value.title || pageTitleFromFilename(keyWithoutSlash)];
      }
      return [key, value || pageTitleFromFilename(key)];
    }),
  );
}

// export function collectCatchAllRoutes(parent: Folder<any>, meta: DynamicMetaJsonFile, locale: string, isRootFolder = true): void {
//   if (isRootFolder) {
//     collectCatchAllRoutes(
//       parent,
//       {
//         kind: "Meta",
//         data: meta.data,
//       } as DynamicMetaJsonFile,
//       locale,
//       false,
//     );
//     meta.data = normalizeMetaData(meta.data);
//     return;
//   }
//   for (const [key, value] of Object.entries(meta.data)) {
//     if (!isFolder(value)) {
//       if (key === "*") {
//         continue;
//       }
//       parent.children.push({
//         kind: "MdxPage",
//         ...(locale && { locale: locale }),
//         name: key,
//         route: normalizePageRoute(parent.route, key),
//       });
//       continue;
//     }
//     const routeWithoutSlashes = key.replace("/", "");
//     const newParent: Folder = {
//       kind: "Folder",
//       name: routeWithoutSlashes,
//       route: `${parent.route}/${routeWithoutSlashes}`,
//       children: [
//         {
//           kind: "Meta",
//           ...(locale && { locale }),
//           data: normalizeMetaData(value.items),
//         } as DynamicMetaJsonFile,
//       ],
//     };
//
//     parent.children.push(newParent);
//     collectCatchAllRoutes(
//       newParent,
//       {
//         kind: "Meta",
//         data: value.items,
//       } as DynamicMetaJsonFile,
//       locale,
//       false,
//     );
//   }
// }
export function collectCatchAllRoutes(parent: Folder, meta: DynamicMetaJsonFile, isRootFolder = true): Folder {
  if (isRootFolder) {
    const folder = collectCatchAllRoutes(parent, meta, false);

    return {
      ...folder,
      children: [{ data: normalizeMetaData(meta.data) }, ...folder.children],
    };
  }
  const result = [];

  for (const [key, value] of Object.entries(meta.data)) {
    if (!isFolder(value)) {
      if (key === "*") {
        continue;
      }
      result.push({
        name: key,
        route: normalizePageRoute(parent.route, key),
      });
      continue;
    }
    const routeWithoutSlashes = key.replace("/", "");
    const newParent: Folder = {
      name: routeWithoutSlashes,
      route: `${parent.route}/${routeWithoutSlashes}`,
      children: [{ data: normalizeMetaData(value.items) }],
    };
    newParent.children.push(...collectCatchAllRoutes(newParent, { data: value.items }, false).children);
    result.push(newParent);
  }

  return {
    route: parent.route,
    name: parent.name,
    children: result,
  };
}

let cachedResolvedPageMap: PageMapItem[];

export function processingPagemap({
  pageNextRoute,
  pageOpts,
  themeConfig,
  dynamicMetaModules = [],
}: {
  pageNextRoute: string;
  pageOpts: PageOpts;
  themeConfig: ThemeConfig;
  dynamicMetaModules?: [Promise<any>, DynamicMetaDescriptor][];
}): NormalizedResult {
  const activeType: string = "";
  const activeIndex: number = 1;
  const activeThemeContext: PageTheme = {} as PageTheme;
  const activePath: Item[] = [];
  const directories: Item[] = [];
  const flatDirectories: Item[] = [];
  const docsDirectories: DocsItem[] = [];
  const flatDocsDirectories: DocsItem[] = [];
  const topLevelNavbarItems: (PageItem | MenuItem)[] = [];

  return {
    activeType,
    activeIndex,
    activeThemeContext,
    activePath,
    directories,
    flatDirectories,
    docsDirectories,
    flatDocsDirectories,
    topLevelNavbarItems,
  };
}
