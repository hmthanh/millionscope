import Link from "next/link";
import cn from "clsx";
import slugify from "@sindresorhus/slugify";
import { Tag } from "./tag";

import { parseISO, format } from "date-fns";
import { FC } from "react";

export const formatDate = (date: string): string => {
  if (date) {
    return format(parseISO(date), "MMMM dd, yyyy");
  } else {
    return "";
  }
};

export type MDXFrontMatter = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
};

interface PostListProps {
  posts: Array<MDXFrontMatter>;
  locale: string;
}

export const PostList: FC<PostListProps> = ({ posts, locale }) => {
  // console.log("locale", locale)
  return (
    <ul className={cn("nx-divide-y nx--my-8", "nx-divide-gray-200", "dark:nx-divide-gray-700")}>
      {posts.map((post: any, index: number) => {
        return (
          <li className="nx-py-8" key={index}>
            <article>
              <time className={cn("nx-block nx-mb-2", "nx-text-gray-500", "dark:nx-text-gray-400")}>{formatDate(post.date)}</time>
              <h2 className="nx-font-bold nx-text-xl">
                <Link href={`/${locale}/${post.slug}`}>{post.title}</Link>
              </h2>
              {post.description ? (
                <div className="nx-mt-3">
                  <p>{post.description}</p>
                </div>
              ) : null}
              {post.tags ? (
                <ul className="nx-mt-4 nx-flex nx-flex-wrap nx-space-x-2">
                  {post.tags.map((tag: any, index: number) => {
                    return (
                      <li key={index}>
                        <Tag href={`/tag/${slugify(tag)}`}>{tag}</Tag>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </article>
          </li>
        );
      })}
    </ul>
  );
};
