import styled from 'styled-components';
import Header from '../components/Header';
import '../styles/globals.css';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SuperheroPedia</title>
        <meta name="description" content="Superhero Encyclopedia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Base>
        <Component {...pageProps} />
    </Base>
    </>
  );
}

export default MyApp

const Base = styled.div`
  padding-top: 4rem;
`;