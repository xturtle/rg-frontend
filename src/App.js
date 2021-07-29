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
import Auth from "./Components/Auth"
import Navigator from "./Components/Navigator";
import {H1, H2, H3, H4} from "./Components/Typography";
import ThumbnailsList from "./Components/ThumbnailsList"
import ajax from "./lib/ajax";
import config from './lib/config';

//homepage
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureURLs: []
    }    
  }

  async componentDidMount() {
    var mockPictures = []; 
    var result = await ajax.generic(`/api/posts`, "GET", null, true);
    mockPictures = result.payload;
    this.setState({
      pictureURLs: this.state.pictureURLs.concat(mockPictures)
    });
  }

  render(){
    return (
      <Page>
        <Auth />
        <Navigator />
        <ThumbnailsList images={this.state.pictureURLs}/>
      </Page>        
    )
  }
}