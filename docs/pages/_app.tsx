import "@/styles/globals.css";
import "@/styles/styles.css";
import "@/styles/custom.css";
import 'katex/dist/katex.min.css';
import type {AppContext, AppProps} from "next/app";
import Layout from "@/components/layout/layout";

import "@/styles/new.css";
import {useEffect} from "react";
import {GlobalProvider} from "@/global/context";
import {NextraInternalGlobal} from "@/global/types";
import {NEXTRA_INTERNAL} from "@/global/constants";
import {createLogger} from "vite";
// import {useRouter} from "next/router";

type IPageMeta = {
    title: string
    // age: number
}

// interface Window {
//     globalData: {
//         title: IPageMeta;
//     };
// }

export default function App({Component, pageProps}: AppProps) {
    const fetchData = async () => {
        // const response = await fetch('/data.json')
        // const data = await response.json() as IPageMeta
        const data: IPageMeta = {title: "Thanh"} as IPageMeta

        // const __nextra_internal__ = (globalThis as NextraInternalGlobal)[NEXTRA_INTERNAL] ||= Object.create(null)
        // globalThis.globalData = data

    }

    // console.log("pageProps", pageProps)
    // useEffect(() => {
    //     // Do something with initialData
    //     console.log('Initial Data:', pageProps.initialData);
    // }, [pageProps.initialData]);

    // const router = useRouter()
    // const {asPath, query} = router

    // const slug = asPath.split('/')[1]
    // const langSlug = languages.includes(slug) && slug
    // const language = query.lang || langSlug || defaultLanguage

    return (
        <GlobalProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </GlobalProvider>
    )
}


export async function getStaticProps(context: AppContext) {
    const __nextra_internal__ = (globalThis as NextraInternalGlobal)[NEXTRA_INTERNAL] ||= Object.create(null)

    return {
        props: {
            hello: "Message"
        },
    };
}

