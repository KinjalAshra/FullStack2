import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";  

const NavUnlisted = styled.ul`

  display: flex;

  a {
    text-decoration: none;
  }

  li {
    color: red;
    margin: 0 0.5rem;
    font-size: 2.0rem;
    position: relative;
    list-style: none;
    fontWeight: 'bold',
  }

  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
  `;

function clickMe() {
  alert("Logout successfully!");
}


const Navigation = () => {
  return (
    <NavUnlisted>
      <NavLink to="/logout">
        <button  onClick={clickMe}>Logout</button>
      </NavLink>
      <NavLink to="/">
        <li>Chat History</li>
      </NavLink>
      <NavLink to="/event-history-tab" activeClassName="current">
      <li>
        Event History
      </li>
      </NavLink>
    </NavUnlisted>
  );
};

export default Navigation;
