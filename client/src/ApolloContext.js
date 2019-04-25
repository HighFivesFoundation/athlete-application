import React from "react";
import { ApolloProvider as Provider } from "react-apollo";

export const ApolloContext = React.createContext();

export const ApolloProvider = ({ client, children }) => (
  <Provider client={client}>
    <ApolloContext.Provider value={{ client }}>
      {children}
    </ApolloContext.Provider>
  </Provider>
);
