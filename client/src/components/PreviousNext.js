import React from "react";
import { Link } from "@reach/router";

export const PreviousNext = ({ prevLink, nextLink }) => {
  if (prevLink && nextLink) {
    return (
      <div className="links">
        <Link to={prevLink}>Prev</Link>
        <Link to={nextLink}>Next</Link>
      </div>
    );
  } else if (!prevLink) {
    return (
      <div className="links">
        <Link to={nextLink}>Next</Link>
      </div>
    );
  } else {
    return (
      <div className="links">
        <Link to={prevLink}>Prev</Link>
      </div>
    );
  }
};
