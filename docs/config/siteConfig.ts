

export type SiteConfig = {
    avatar?: string;
    siteUrl: string;
    siteName: string;
    siteDescription: string;
    siteThumbnail: string;
    nav: Array<{ label: string; href: string }>;
    social?: {
        github?: string;
        twitter?: string;
        linkedin?: string;
        instagram?: string;
    };
};


const siteConfig: SiteConfig = {
    avatar: "/avatar.png",
    siteUrl: "https://millionscopes.vercel.app",
    siteName: "MillionScope",
    siteDescription:
        "Starter template for a personal website blog, built with Next.js, MDX, and Tailwind CSS.",
    siteThumbnail: "/og-image.png",
    nav: [
        { label: "Posts", href: "/posts" },
        { label: "About", href: "/about" },
    ],
    social: {
        github: "https://github.com/alexcarpenter",
        twitter: "https://twitter.com/hyrbid_alex",
        linkedin: "https://www.linkedin.com/in/imalexcarpenter/",
        instagram: "https://www.instagram.com/alexcarp/",
    },
};
export default siteConfig;
