import { useState, useEffect, useContext } from "react";
import { ApolloContext } from "../ApolloContext";

//
// useMutatation => save mutation
//

export default function(operation) {
  const { client } = useContext(ApolloContext);

  const [queryResponse, setQueryResponse] = useState({
    data: null,
    errors: null,
    loading: true
  });

  useEffect(() => {
    client
      .query(operation)
      .then(setQueryResponse)
      .catch(error => {
        setQueryResponse({
          data: null,
          errors: [error],
          loading: false
        });
      });
  }, []);

  return [queryResponse];
}
