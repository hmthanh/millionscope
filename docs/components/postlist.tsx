import Link from "next/link";
import {formatDate} from "@/lib/formatDate";
import type {MDXFrontMatter} from "@/lib/types";
import {cx, slugify} from "@/lib/utils";
import {Prose} from "./prose";
import {Tag} from "./tag";

interface PostListProps {
    posts: Array<MDXFrontMatter>;
}

export const PostList: React.FC<PostListProps> = ({posts}) => {
    return (
        <ul
            className={cx(
                "nx-divide-y nx--my-8",
                "nx-divide-gray-200",
                "dark:nx-divide-gray-700"
            )}
        >
            {posts.map((post, index) => {
                return (
                    <li className="nx-py-8" key={index}>
                        <article>
                            <time
                                className={cx(
                                    "nx-block nx-mb-2",
                                    "nx-text-gray-500",
                                    "dark:nx-text-gray-400"
                                )}
                            >
                                {formatDate(post.date)}
                            </time>
                            <h2 className="nx-font-bold nx-text-xl">
                                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                            </h2>
                            {post.description ? (
                                <div className="nx-mt-3">
                                    <Prose>
                                        <p>{post.description}</p>
                                    </Prose>
                                </div>
                            ) : null}
                            {post.tags ? (
                                <ul className="nx-mt-4 nx-flex nx-flex-wrap nx-space-x-2">
                                    {post.tags.map((tag, index) => {
                                        return (
                                            <li key={index}>
                                                <Tag href={`/posts/tag/${slugify(tag)}`}>{tag}</Tag>
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
