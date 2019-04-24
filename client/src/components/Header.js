import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import styled from "styled-components";

const HeaderWrap = styled.header`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  height: 70px;
  align-items: center;
  img {
    margin-left: 1%;
  }
  nav {
    a {
      padding: 5px;
      color: white;
      text-decoration: none;
      cursor: pointer;
      font-size: 20px;
      margin-left: 55%;
    }
    a:last-of-type {
      color: orange;
      font-weight: bold;
    }
  }
`;

export const Header = () => {
  return (
    <>
      <HeaderWrap>
        <img src="./images/fives-logo-2016.png" alt="high-fives-logo" />
        <nav>
          <a href="/#">About</a>
          <a href="/#">Programs</a>
          <a href="/#">Events</a>
          <a href="/#">Apply</a>
          <a href="/#">Donate</a>
        </nav>
      </HeaderWrap>
      <Breadcrumbs />
    </>
  );
};
