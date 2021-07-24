import styled from 'styled-components'
import {
    Link
} from "react-router-dom";

import * as Logo from "./Logo"

const NavWrapper = styled.div`
  width: 90%;
  min-width: 500px;
  height: 2em;
  margin: 0 auto;
  margin-bottom: 4em;
  margin-top: 1em;
`

const NavLink = styled(Link)`
  display: inline-block;
  background-color: #6e5773;
  color: #fff;
  border-radius: 5px;
  padding: 15px;
  margin: 5px;
  min-width: 100px;
  text-align: center;
  float: right;
  text-decoration: none;
  font-size: 14px;    
  &:hover{
    background-color: #d45d79;
  }
`

export default function Navigator() {
  return (
    <NavWrapper>
      <Logo.Big to="/">InstaPic</Logo.Big>
      <NavLink to="/profile">Your Page</NavLink>
      <NavLink to="/login">Sign On/Up</NavLink>
    </NavWrapper>
  );
}