import styled from 'styled-components'
import {
    Link
} from "react-router-dom";

const Logo = styled(Link)`    
  float: left;
  font-family: "Impact";    
  color: #6e5773 !important;
  display: block;
  text-decoration: none;
  margin: 0.5em;
`

export const Big = styled(Logo)`
  font-size: 24px;
  padding: 10px;
  border-bottom: 5px solid #d45d79;
`

export const Small = styled(Logo)`
  font-size: 14px;
  padding: 2px;
  margin: 0;
  margin-bottom: 1em;
  border-bottom: 2px solid #d45d79;
`