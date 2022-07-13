import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Container from "./context/Container";
import "./index.css";
const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    Headers: {
      token: {
        token: localStorage.getItem("token") || null,
      },
    },
  });
  return forward(operation);
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    middlewareLink,
    new HttpLink({ uri: "http://localhost:5000/graphql" }),
  ]),
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Container>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Container>
    </ApolloProvider>
  </React.StrictMode>
);
