import "@/styles/globals.css";
import "@/styles/styles.css";
import "@/styles/custom.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/layout";

import "@/styles/new.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
