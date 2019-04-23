import React from "react";
import { Link } from "@reach/router";

export const PreviousNext = ({ prevLink, nextLink }) => {
  if (prevLink && nextLink) {
    return (
      <>
        <Link to={prevLink}>Prev</Link>
        <Link to={nextLink}>Next</Link>
      </>
    );
  } else if (!prevLink) {
    return (
      <>
        <Link to={nextLink}>Next</Link>
      </>
    );
  } else {
    return (
      <>
        <Link to={prevLink}>Prev</Link>
      </>
    );
  }
};
