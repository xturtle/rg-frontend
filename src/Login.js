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
import Cookies from 'universal-cookie';

import Page from "./Components/Page";
import {H1, H2, H3, H4} from "./Components/Typography";
import * as Logo from "./Components/Logo"
import * as FormElement from "./Components/Form";
import Button from "./Components/Button";
import ErrorMessage from "./Components/ErrorMessage";
import ajax from "./lib/ajax";
import config from './lib/config';

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
    this.cookies = new Cookies();
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
      usernameIsValid: true,
      passwordIsValid: true  
    }
    this.checkFormValidBeforeSubmit = this.checkFormValidBeforeSubmit.bind(this); //decorator
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignOn = this.handleSignOn.bind(this);
  }

  checkFormValidBeforeSubmit() {
     return this.state.usernameIsValid && 
       this.state.passwordIsValid &&
       this.state.username !== "" &&
       this.state.password !== "";
  }

  handleChange(event) {    
    this.setState({
      [event.target.name]: event.target.value
    });
    if (event.target.name === "password" && event.target.value.length < 6)
      this.setState({
        "passwordIsValid": false,
        "errorMessage": "Password is too short"
      });
    else
      this.setState({
        "passwordIsValid": true,
        "errorMessage": ""
      });
  }

  async handleSignOn(event) {
    event.preventDefault();
    if (!this.checkFormValidBeforeSubmit()) return;
    
    const result = await ajax.generic(`/api/signon`, "POST", {username: this.state.username, password: this.state.password});
    if (result.code === "0") {
      this.cookies.set("token", result.payload, config.cookieExpireIn);
      window.location.href = '/'; //relative to domain
    }else{
      this.setState({
        "passwordIsValid": false,
        "errorMessage": `[${result.code}] ${result.message}`
      });
    }
  }

  async handleSignUp(event) {
    event.preventDefault();   
    if (!this.checkFormValidBeforeSubmit()) return;
    
    const result = await ajax.generic(`/api/signup`, "POST", {username: this.state.username, password: this.state.password});
    if (result.code === "0") {
      alert("Successfully signed up.");
      const login_result = await ajax.generic(`/api/signon`, "POST", {username: this.state.username, password: this.state.password});
      if (login_result.code === "0") {
        this.cookies.set("token", login_result.payload, config.cookieExpireIn);
        window.location.href = '/'; //relative to domain
      }
    } else {
      this.setState({
        "passwordIsValid": false,
        "errorMessage": `[${result.code}] ${result.message}`
      });
    }
  }  

  render() {
      return (
        <CenteredPage>
          <Form method="post">
            <Logo.Small to="/">InstaPic</Logo.Small>
            <H1>Hello.</H1>
            <FormElement.Input type="text" name="username" value={this.state.username} error={!this.state.usernameIsValid} onChange={this.handleChange} placeholder="Username"/>
            <FormElement.Input type="password" name="password" value={this.state.password} error={!this.state.passwordIsValid} onChange={this.handleChange} placeholder="Password (at least 6 character)"/>
            <ErrorMessage message={this.state.errorMessage} />
            <Button onClick={this.handleSignOn}>Sign On</Button>
            <p style={{"font-size": "11px", "text-align": "center", "padding" : 0}}>Already has an account? or ...</p>
            <Button onClick={this.handleSignUp}>Sign Up</Button>
          </Form>
        </CenteredPage>
      )
  }
}