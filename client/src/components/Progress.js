import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const ProgressWrap = styled.aside`
  nav {
    a {
      display: block;
    }
  }
`;

export const Progress = () => {
  return (
    <ProgressWrap>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/guidelines">Applicant Guidelines</Link>
        <Link to="/injury-info">Injury Info</Link>
        <Link to="/icu">ICU</Link>
        <Link to="/funding">Funding Categories</Link>
        <Link to="/funding">Healing Network</Link>
        <Link to="/funding/living-expenses">Living Expenses</Link>
        <Link to="/funding/insurance">Insurance</Link>
        <Link to="/funding/adaptive-equipment">Adaptive Equipment</Link>
        <Link to="/funding/winter-equipment">Winter Equipment</Link>
        <Link to="/funding/programs">Programs</Link>
        <Link to="/funding/health">Health</Link>
        <Link to="/funding/travel">Travel</Link>
        <Link to="/personal-info">Personal Info</Link>
      </nav>
    </ProgressWrap>
  );
};
