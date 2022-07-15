import '../styles/globals.css';
import Head from "next/head";
import { UrlFilterContext } from '../contexts/UrlFilterContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  
  const [urlFilter, setUrlFilter] = useState('https://rickandmortyapi.com/api/character/');

  return (
    <>
      <Head>
        <title>Rick and Morty App</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
      </Head>

      <UrlFilterContext.Provider value={{urlFilter, setUrlFilter}}>
        <Component {...pageProps} />
      </UrlFilterContext.Provider>
    </>
  )
}

export default MyApp