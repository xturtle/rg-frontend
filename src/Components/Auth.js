import React from 'react';
import Cookies from 'universal-cookie';

/*
export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.cookies = new Cookies();
    this.state = {
      token: this.cookies.get('token')
    }
    if (this.state.token === undefined || this.state.token === null) {
      window.location.href = '/login'; //relative to domain
    }
  }
  render(){
    return null;
  }
}
*/
const cookies = new Cookies();
const token = cookies.get('token');

if (token === undefined || token === null) {
  window.location.href = '/login'; //relative to domain
}

export default function Auth() {
  return (null);
}