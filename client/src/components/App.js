import React from "react";
import { Link } from "@reach/router";

export default function App() {
  return (
    <section>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/general">General Info</Link>
        <Link to="/guidelines">Applicant Guidelines</Link>
        <Link to="/injury-info">Injury Info</Link>
        <Link to="/icu">ICU</Link>
        <Link to="/funding">Funding Categories</Link>
      </nav>
      <h1>High Fives Athlete Application</h1>
    </section>
  );
}
