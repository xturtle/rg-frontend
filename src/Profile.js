import React from "react";
import styled from 'styled-components'
import { withRouter } from "react-router";

import Page from "./Components/Page"
import Navigator from "./Components/Navigator";
import {H1, H2, H3, H4} from "./Components/Typography";
import ThumbnailsList from "./Components/ThumbnailsList"

import ajax from "./lib/ajax";

//profile badge
const ProfileBadge = styled.div`
  width: 50%;
  margin: 0 auto;
  display: block;
`

//profile page
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      createAt: "",
      pictureURLs: []
    }    
  }

  async componentDidMount() {    
    let id = this.props.match.params.id, post_url = `/api/posts/${id}`, profile_url =`/api/user/${id}`;
    if (id === undefined){
      post_url = `/api/posts/`;
      profile_url = `/api/user/`;
    }

    
    var mockPictures = []; 
    var people = await ajax.generic(profile_url, "GET", null, true);    
    if (people.payload === null) {
      this.setState({
        username: "User not found.",
        createdAt: "",
        pictureURLs: []
      });
    }
    else{
      var result = await ajax.generic(post_url, "GET", null, true);
      mockPictures = result.payload;
      this.setState({
        username: "@" + people.payload.username,
        createdAt: "Joined at " + people.payload.createdAt,
        pictureURLs: this.state.pictureURLs.concat(mockPictures)
      });
    }
  }

  render(){
    return (
      <Page>
          <Navigator />
          <ProfileBadge>
            <H1>{this.state.username}</H1>
            <H4>{this.state.createdAt}</H4>
          </ProfileBadge>
          <ThumbnailsList images={this.state.pictureURLs}/>
      </Page>        
    )
  }
}

export default withRouter(Profile);