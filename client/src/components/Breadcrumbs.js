import React from "react";
import { Link } from "@reach/router";

export const Breadcrumbs = () => {
  return (
    <nav className="breadcrumbs">
      <Link to="#home">Home</Link>
      <span>></span>
      <Link to="#application">Athlete Application</Link>
    </nav>
  );
};
