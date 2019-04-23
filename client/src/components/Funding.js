import React from "react";
import { Link } from "@reach/router";

export const Funding = props => (
  <div>
    <h2>Funding</h2>
    <nav>
      <Link to="/funding">Healing Network</Link>
      <Link to="/funding/living-expenses">Living Expenses</Link>
      <Link to="/funding/insurance">Insurance</Link>
      <Link to="/funding/adaptive-equipment">Adaptive Equipment</Link>
      <Link to="/funding/winter-equipment">Winter Equipment</Link>
      <Link to="/funding/programs">Programs</Link>
      <Link to="/funding/health">Health</Link>
      <Link to="/funding/travel">Travel</Link>
    </nav>
    {props.children}
  </div>
);
