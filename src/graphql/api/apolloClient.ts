import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GQL_SERVER_URL,
  cache: new InMemoryCache({}),
  connectToDevTools: true,
});
