import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className={`js-focus-visible light`} style={{ colorScheme: "light" }} dir="ltr" data-js-focus-visible>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
