import "semantic-ui-css/semantic.min.css"

import Head from "next/head"

import { Header } from "../components"

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>SpeakEverywhere</title>

        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta
          name="description"
          content="Lern the most useful words and phrases in every language."
        />
        <meta name="keywords" content="learn, language" />
        <link rel="manifest" href="/manifest.json" />
        <link href="/favicon.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/favicon.png" rel="icon" type="image/png" sizes="48x48" />
        <link href="/favicon.png" rel="apple-touch-icon"></link>
        <meta name="theme-color" content="#40798c" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
