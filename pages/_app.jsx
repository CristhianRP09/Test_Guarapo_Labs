import '../styles/globals.css';
import Head from "next/head";
import { UrlFilterContext } from '../contexts/UrlFilterContext';
import { AdvanceFilterMenuMobile } from '../contexts/AdvanceFilterMenuMobile';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const urlBase = 'https://rickandmortyapi.com/api/character/';
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(1);

  const [menu, setMenu] = useState(false);

  return (
    <>
      <Head>
        <title>Rick and Morty App</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
      </Head>

      <UrlFilterContext.Provider value={{ urlBase, gender, setGender, name, setName, status, setStatus, page, setPage }}>
        <AdvanceFilterMenuMobile.Provider value={{ menu, setMenu }}>
          <Component {...pageProps} />
        </AdvanceFilterMenuMobile.Provider>
      </UrlFilterContext.Provider>
    </>
  )
}

export default MyApp