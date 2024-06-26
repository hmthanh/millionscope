import Link from "next/link";
import cn from 'clsx';
import slugify from "@sindresorhus/slugify";

interface TagProps {
  href: string;
  children: string;
}

export const Tag: React.FC<TagProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className={cn(
        "inline-block text-sm py-0.5 px-2.5 rounded-full border hover:underline",
        "bg-gray-100 border-gray-200",
        "dark:bg-gray-800 dark:border-gray-700"
      )}
    >
      #{slugify(children)}
    </Link>
  );
};
