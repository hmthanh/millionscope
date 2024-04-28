import Head from "next/head";
import { onlyText } from "react-children-utilities";
import { formatDate } from "@/lib/formatDate";
import siteConfig from "@/config/siteConfig";
import { cx } from "@/lib/utils";
import { Prose } from "./prose";

interface PageProps {
    date?: string;
    title: string | React.ReactNode;
    description?: string | React.ReactNode;
    thumbnail?: string;
    children?: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({
    date,
    title,
    description,
    thumbnail,
    children,
}) => {
    const metaTitle = onlyText(title);
    const metaDescription = description
        ? onlyText(description)
        : siteConfig.siteDescription;
    const metaThumbnail = thumbnail ? thumbnail : siteConfig.siteThumbnail;
    // fixed https://github.com/vercel/next.js/discussions/38256
    const customTitle = `${metaTitle} - ${siteConfig.siteName}`;
    return (
        <>
            <Head>
                <title>{customTitle}</title>
                <meta name="og:url" content={siteConfig.siteUrl} />
                <meta property="og:title" content={metaTitle} />
                <meta name="description" content={metaDescription} />
                <meta name="og:description" content={metaDescription} />
                <meta
                    property="og:image"
                    content={`${siteConfig.siteUrl}${metaThumbnail}`}
                />
            </Head>
            <header
                className={cx(
                    "nx-mb-8 nx-pb-8 nx-border-b",
                    "nx-border-gray-200",
                    "dark:nx-border-gray-700"
                )}
            >
                {date ? (
                    <time
                        className={cx("nx-block mb-2", "nx-text-gray-500", "dark:nx-text-gray-400")}
                    >
                        {formatDate(date)}
                    </time>
                ) : null}
                <h1 className="nx-font-bold nx-text-3xl">{title}</h1>
                {description ? (
                    <div className="nx-mt-4">
                        <Prose>
                        {typeof description === "string" ? (
                            <p>{description}</p>
                        ) : (
                            description
                        )}
                        </Prose>
                    </div>
                ) : null}
            </header>
            {children}
        </>
    );
};
