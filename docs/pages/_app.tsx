import "@/styles/globals.css";
import "@/styles/styles.css";
import "@/styles/custom.css";
import 'katex/dist/katex.min.css';
import type {AppProps} from "next/app";
import Layout from "@/components/layout/layout";

import "@/styles/new.css";
import {useRouter} from "next/router";

export default function App({Component, pageProps}: AppProps) {
    const router = useRouter()
    const {asPath, query} = router

    const slug = asPath.split('/')[1]
    // const langSlug = languages.includes(slug) && slug
    // const language = query.lang || langSlug || defaultLanguage

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
