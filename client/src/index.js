import React from "react";
import { render } from "react-dom";
import Provider from "./ApolloProvider";
import App from "./components/App";

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
