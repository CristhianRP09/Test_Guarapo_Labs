import '../styles/globals.css';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rick and Morty App</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp