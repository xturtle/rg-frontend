import React from "react";
import styled from 'styled-components'
import { withRouter } from "react-router";

import Page from "./Components/Page"
import Navigator from "./Components/Navigator";
import {H1, H2, H3, H4} from "./Components/Typography";
import ajax from "./lib/ajax";
import config from "./lib/config";

const PostWrapper =styled.div`
  width: 90%;
  margin: 0 auto;
`

const PostImage = styled.img`
  width: 60%;
  float: left;
  border-radius: 10px;
`

const PostText = styled.div`
  width: 40%;
  height: 100%;
  float: right;
  padding-left: 3em;
  box-sizing: border-box;    
  p {        
    color: #666;
  }
`

class Post extends React.Component {
  constructor(props) {
    super(props);
        
    this.state = {
      uid: "",
      username: "",
      createdAt: "",
      image: "",
      text: ""
    }    
  }
  
  async componentDidMount() {
    let id = this.props.match.params.id;
    var result = await ajax.generic(`/api/post/${id}`, "GET", null, true);
    var people = await ajax.generic(`/api/user/${result.payload.uid}`, "GET", null, true);
    this.setState({
      uid: result.payload.uid,
      username: people.payload.username,
      createdAt: result.payload.createdAt,
      image: config.imagePath + result.payload.image,
      text: result.payload.text
    });
  }
  
  render(){
    return (
      <Page>
        <Navigator />
        <PostWrapper> 
          <PostImage src={this.state.image}/>
          <PostText>
            <H2>@{this.state.username}</H2>
            <H4>posted at {this.state.createdAt}</H4>
            <p>{this.state.text}</p>
          </PostText>
        </PostWrapper>        
      </Page>        
    )
  }
}

export default withRouter(Post);