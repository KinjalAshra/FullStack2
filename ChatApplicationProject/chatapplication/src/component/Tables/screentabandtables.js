import React, { useState } from "react";
import styled from "styled-components";
  
const Button = styled.button`
  background-color: black;
  color: white;
  display: 'flex',
  justifyContent: 'Right',
  alignItems: 'Right',
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: black;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const Tab = styled.button`
  padding: 10px 300px;
  cursor: pointer;
  opacity: 0.6;
  background: gray;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

function clickMe() {
    alert("Logout successfully!");
  }

const types = ["Event History", "Chat History"];

function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </div>
      <p />
      <p> Your payment selection: {active} </p>
    </>
  );
}

export default function App1() {
  return (
    <>
      <div>
        <Button onClick={clickMe}>Logout</Button>
      </div>  
      <TabGroup />
    </>
  );
}
