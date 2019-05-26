import React from "react";
import { useAuth } from "../hooks";
import { Breadcrumbs } from "./Breadcrumbs";
import styled from "styled-components";

export const Header = () => {
  const { authorized, me, logout } = useAuth();

  return (
    <>
      <Container>
        <img src="./images/fives-logo-2016.png" alt="high-fives-logo" />
        <nav>
          <a href="/#">Programs</a>
          <a href="/#">Events</a>
          <a href="/#">Donate</a>
        </nav>
        {authorized && (
          <div className="me">
            {me.firstName} {me.lastName}
            <button onClick={logout}>logout</button>
          </div>
        )}
      </Container>
      {authorized && <Breadcrumbs />}
    </>
  );
};

const Container = styled.header`
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
