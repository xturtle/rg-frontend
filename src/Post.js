import React from "react";
import styled from 'styled-components'

import Page from "./Components/Page"
import Navigator from "./Components/Navigator";
import {H1, H2, H3, H4} from "./Components/Typography";

const PostWrapper =styled.div`
  width: 90%;
  margin: 0 auto;;
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

export default class Post extends React.Component {
  constructor(props) {
    super(props);
        
    this.state = {
      userid: 1,
      username: "12345678",
      nickname: "William",
      image: "https://picsum.photos/id/608/769",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }    
  }
  
  componentDidMount() {
  }
  
  render(){
    return (
      <Page>
        <Navigator />
        <PostWrapper> 
          <PostImage src={this.state.image}/>
          <PostText>
            <H2>@{this.state.username}</H2>
            <H4>posted by {this.state.nickname}</H4>
            <p>{this.state.text}</p>
          </PostText>
        </PostWrapper>        
      </Page>        
    )
  }
}