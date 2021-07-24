import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

// pages
import App from './App';
import Post from './Post';
import Profile from './Profile';
import Login from './Login';
import Submit from './Submit';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/post">
        <Post />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/submit">
        <Submit />
      </Route>
      <Route path="/">
        <App />
      </Route>
      <App />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
