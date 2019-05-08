import { useState, useContext } from "react";
import { ApolloContext } from "../ApolloContext";

export default function(mutation) {
  const { client } = useContext(ApolloContext);

  /* todo: upgrade to useReducer */
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
}
