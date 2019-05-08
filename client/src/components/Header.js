import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import styled from "styled-components";

const CurrentUser = ({ me, logout }) =>
  me ? (
    <div className="me">
      {me.name.first} {me.name.last}
      <button onClick={logout}>logout</button>
    </div>
  ) : null;

export const Header = ({ me, authorized, logout = f => f }) => {
  return (
    <>
      <HeaderWrap>
        <img src="./images/fives-logo-2016.png" alt="high-fives-logo" />
        <nav>
          <a href="/#">Programs</a>
          <a href="/#">Events</a>
          <a href="/#">Donate</a>
        </nav>
        {authorized && <CurrentUser me={me} logout={logout} />}
      </HeaderWrap>
      {authorized && <Breadcrumbs />}
    </>
  );
};

const HeaderWrap = styled.header`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  img {
    margin-left: 1%;
  }
  nav {
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
    a {
      padding: 5px;
      color: white;
      text-decoration: none;
      cursor: pointer;
      font-size: 20px;
    }
    a:last-of-type {
      color: orange;
      font-weight: bold;
    }
  }
`;
