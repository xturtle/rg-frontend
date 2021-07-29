import React from "react";
import styled from 'styled-components';

import Page from "./Components/Page";
import Navigator from "./Components/Navigator";
import {H1, H2, H3, H4} from "./Components/Typography";
import Button from "./Components/Button";
import {Textarea} from "./Components/Form";
import ImageUpload from "./Components/ImageUpload";
import ErrorMessage from "./Components/ErrorMessage";
import ajax from "./lib/ajax";

const PostWrapper =styled.div`
  width: 90%;
  margin: 0 auto;
  overflow-y: auto;
  display: table;
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
      username: "",
      image: null,
      text: "",
      errorMsg: null
    }
    this.form = React.createRef();
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
  }
  
  async componentDidMount() {
    var result = await ajax.generic(`/api/user`, "GET", null, true);
    this.setState({
      username: result.payload.username
    });
  } 

  handleFileChange(event) {
    this.setState({
      image: event.target.value
    });
  }

  handleTextChange(event) {
    this.setState({
     text: event.target.value
    });
  }
  
  async handlePostSubmit(event){
    event.preventDefault();
    const data = new FormData(this.form.current)
    console.log(data);
    if (this.state.image === null){
      this.setState({
        errorMsg: "No image assigned"
       });
       return;
    }
    var result = await ajax.multipart(`/api/post`, data, true);
    if (result.code === "0")
      window.location.href = `/post/${result.payload}`; //relative to domain
    else {
      this.setState({
        errorMsg: `[${result.code}] ${result.message}`
      })
    }
  }

  render(){
    return (
      <Page>
        <Navigator />
        <PostWrapper>
          <form onSubmit={this.handlePostSubmit} ref={this.form}>
            <ImageUpload name="image" onChange={this.handleFileChange}/>
            <PostText>
              <H2>@{this.state.username}</H2>
              <H4>Submit a new post</H4>
              <Textarea name="text" placeholder="Write something..." onChange={this.handleTextChange}>{this.state.text}</Textarea>
              <ErrorMessage message={this.state.errorMsg} />
              <Button style={{"float" : "right"}}>Submit</Button>
            </PostText>
          </form>
        </PostWrapper>        
      </Page>        
    )
  }
}