import React from "react";
import styled from 'styled-components'

import Page from "./Components/Page"
import Navigator from "./Components/Navigator";
import {H1, H2, H3, H4} from "./Components/Typography";
import ThumbnailsList from "./Components/ThumbnailsList"

//profile badge
const Profile = styled.div`
  width: 50%;
  margin: 0 auto;
  display: block;
`

//profile page
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
          <Profile>
            <H1>@abc1234</H1>
            <H4>nickname's profile.</H4>
          </Profile>
          <ThumbnailsList urls={this.state.pictureURLs}/>
      </Page>        
    )
  }
}