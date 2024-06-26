import Head from "next/head";
import { onlyText } from "react-children-utilities";
import siteConfig from "@/config/siteConfig";

interface PageProps {
  date?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  thumbnail?: string;
  children?: React.ReactNode;
}

export const NextSEOHead: React.FC<PageProps> = ({ date, title, description, thumbnail, children }) => {
  const metaTitle = onlyText(title);
  const metaDescription = description ? onlyText(description) : siteConfig.siteDescription;
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
        <meta property="og:image" content={`${siteConfig.siteUrl}${metaThumbnail}`} />
      </Head>
      {children}
    </>
  );
};
