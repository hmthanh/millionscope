import { Heading, PageMapItem, PageOpts } from "@/global/types";

export interface ICommonPageProps {
  locale: string;
  route?: string;
  pageMap: PageMapItem[];
  pageOpts: PageOpts;
  heading: Heading[];
}
