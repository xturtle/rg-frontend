import React from "react";
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Page from "./Components/Page"
import {H1, H2, H3, H4} from "./Components/Typography";
import * as Logo from "./Components/Logo"
import * as FormElement from "./Components/Form"
import Button from "./Components/Button"

const CenteredPage = styled(Page)`
    display: flex; 
    align-items: center; 
    justify-content: center;
`
const Form = styled.form`
    min-width: 300px;
    height: 400px;
    margin: 0 auto;
    box-shadow: 0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)!important;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 1em;
    background: #fff;
    > * {
        display: block;
        margin-bottom: 1em;
        width: 100%;
    }
`

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMsg: "",
      usernameIsValid: true,
      passwordIsValid: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    this.setState({
      [event.target.name]: event.target.value
    });
    if (event.target.name === "password" && event.target.value.length < 6)
      this.setState({
        "passwordIsValid": false,
        "errorMsg": "Password is too short"
      });
    else
      this.setState({
        "passwordIsValid": true,
        "errorMsg": ""
      });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.username + "/" + this.state.password);
    event.preventDefault();
  }

  render() {
      return (
        <CenteredPage>
          <Form>
            <Logo.Small to="/">InstaPic</Logo.Small>
            <H1>Hello.</H1>
            <FormElement.Input type="text" name="username" value={this.state.username} error={!this.state.usernameIsValid} onChange={this.handleChange} placeholder="Username"/>
            <FormElement.Input type="password" name="password" value={this.state.password} error={!this.state.passwordIsValid} onChange={this.handleChange} placeholder="Password (at least 6 character)"/>
            <p style={{"font-size": "11px", "text-align": "center", "color": "red", "padding" : 0}}>
                {this.state.errorMsg.length > 0? this.state.errorMsg : '\u00A0'}</p>
            <Button>Sign Up</Button>
            <p style={{"font-size": "11px", "text-align": "center", "padding" : 0}}>Already has an account? or ...</p>
            <Button>Sign On</Button>
          </Form>
        </CenteredPage>
      )
  }
}