import React from "react";
import { Link } from "@reach/router";

export const PreviousNext = ({ prevLink, nextLink }) => {
  if (prevLink && nextLink) {
    return (
      <>
        <button>
          <Link to={prevLink}>Prev</Link>
        </button>
        <button>
          <Link to={nextLink}>Next</Link>
        </button>
      </>
    );
  } else if (!prevLink) {
    return (
      <>
        <button>
          <Link to={nextLink}>Next</Link>
        </button>
      </>
    );
  } else {
    return (
      <>
        <button>
          <Link to={prevLink}>Prev</Link>
        </button>
      </>
    );
  }
};
