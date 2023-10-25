import '@/styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import { apolloClient } from '@/graphql/api/apolloClient';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Weather Curation 🧚‍♀️</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ApolloProvider>
    </>
  );
}
