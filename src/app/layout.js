"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const inter = Inter({ subsets: ["latin"] });

const client = new ApolloClient({
  uri: "https://api.example.com/graphql", // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

// export const metadata = {
//   title: "Todo App by Kpamsar",
//   description: "Todod app by Kpamsar",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <ApolloProvider client={client}> */}
      <body className={inter.className}>{children}</body>
      {/* </ApolloProvider> */}
      <ToastContainer />
    </html>
  );
}
