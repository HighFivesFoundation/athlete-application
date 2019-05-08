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
  const [me, setMe] = useState(null);

  useEffect(() => {
    client
      .query({ query: ME_QUERY })
      .then(({ data }) => setMe(data.me))
      .catch(error => {
        console.error(`useAuth hook error requesting initial data`);
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token");
    }
  });

  return {
    me,
    authorized: token && token.length > 20 ? true : false,
    login: (token, me) => {
      setToken(token);
      setMe(me);
    },
    logout: () => {
      setToken(null);
      setMe(null);
    }
  };
}
