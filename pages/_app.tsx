import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>An animated landing page</title>
      <meta name="description" content="An animated landing page inspired by Buy me a coffee and Diagram.com"/>
      <link rel="icon" href="/favicon.png" />
      <meta name="keywords" content="Reactjs, Nextjs, Framer, Web animation, Frontend, Web, Developer, Joseph Enoch, Diagram.com" />
      <meta name="og:url" content="https://technicalportfolio.josephenoch.com"/>
      <meta name="og:description" content="An animated landing page inspired by Buy me a coffee and Diagram.com"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:creator" content="@techbrojoe" />
      <meta name="twitter:image" content="/social-preview.png" />
      <meta name="twitter:site" content="An animated landing page inspired by Buy me a coffee and Diagram.com" />
      <meta name="twitter:title" content="An animated landing page inspired by Buy me a coffee and Diagram.com" />
      <meta name="og:type" content="Person"/>
      <meta property="og:image" content="/social-preview.png" />
    </Head>
  <Component {...pageProps} />
  </>
  )
}
