import { useState, useEffect, useContext } from "react";
import { ApolloContext } from "./ApolloContext";

export const useAuth = () => {
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
};

export const useMutation = mutation => {
  const { client } = useContext(ApolloContext);
  const [mutationResponse, setMutationResponse] = useState({
    data: null,
    errors: null,
    loading: false
  });

  const mutate = async operation => {
    try {
      const response = await client.mutate({
        mutation,
        ...operation
      });
      setMutationResponse(response);
    } catch (error) {
      setMutationResponse({
        data: null,
        errors: [error],
        loading: false
      });
    }
  };

  return [mutationResponse, mutate];
};
