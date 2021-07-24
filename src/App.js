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
import Navigator from "./Components/Navigator";
import {H1, H2, H3, H4} from "./Components/Typography";
import ThumbnailsList from "./Components/ThumbnailsList"


//homepage
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureURLs: []
    }    
  }

  componentDidMount() {
    /* for debug usage: randomize generate pic from Lorem PicSUM */

    var mockPictures = []; 
    for (var i = 0; i < 32; i++){
      var id = Math.floor(Math.random() * 1000)+1;
      var width = Math.floor(Math.random() * 1280)+640;
      var username = Math.floor(Math.random() * 99999999)+10000000;
      mockPictures.push({
        "id": i,
        "username": "@" + username, 
        url: `https://picsum.photos/id/${id}/${width}`
      });
    }

    this.setState({
      pictureURLs: this.state.pictureURLs.concat(mockPictures)
    });
  }

  render(){
    return (
      <Page>
        <Navigator />
        <ThumbnailsList urls={this.state.pictureURLs}/>
      </Page>        
    )
  }
}