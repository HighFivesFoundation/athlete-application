import { useState, useEffect, useContext } from "react";
import { ApolloContext } from "../ApolloContext";
import { gql } from "apollo-boost";

const ME_QUERY = gql`
  query {
    me {
      email
      name {
        first
        last
      }
    }
  }
`;

export default function() {
  const { client } = useContext(ApolloContext);
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token");
    }
  });

  return {
    authorized: token && token.length > 20 ? true : false,
    login: token => setToken(`Bearer ${token}`),
    logout: () => setToken(null)
  };
}
