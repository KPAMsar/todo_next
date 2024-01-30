import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
// import { GRAPHQL_BASE_URL } from "../app/utils/constants";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: " http://127.0.0.1:3002/graphql/playground",
  }),
  cache: new InMemoryCache(),
});
