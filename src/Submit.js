import React from "react";
import styled from 'styled-components';
import ImageUploader from 'react-image-uploader';

import Page from "./Components/Page";
import Navigator from "./Components/Navigator";
import {H1, H2, H3, H4} from "./Components/Typography";
import Button from "./Components/Button";
import {Textarea} from "./Components/Form";

const PostWrapper =styled.div`
  width: 90%;
  margin: 0 auto;
  overflow-y: auto;
  display: table;
`

const PostImageUploadWrapper = styled.div`
  width: 60%;
  height: 100%;
  float: left;
  border-radius: 10px;
  display: table-cell;

  /* the following workaround is to enforce to override the style settings of package "ImageUpload" */
  > div > div {
    display: block !important;
  }
  > div > div > div {
      width: 100% !important;     
      height: 100% !important;
      display: flex;
      border: 1px solid #333 !important;      
      border-radius: 10px !important;
      justify-content: center;
      align-items: stretch;     
      &:before {      /* enforce to stretch vertically to 100% */
        content: '';
        display: table;
        padding-top: 100%;
      }; 
      padding: 1em;
  }
  > div > div > div > button {
    ${Button.componentStyle.rules[0]};
    height: 5em;
  }
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
    console.log()
    this.state = {
      userid: 1,
      username: "12345678",
      image: "https://picsum.photos/id/608/769",
      text: ""
    }    
  }
  
  componentDidMount() {
  }

  
  
  render(){
    return (
      <Page>
        <Navigator />
        <PostWrapper> 
          <PostImageUploadWrapper>
            <ImageUploader
	          url="http://localhost:9090/notmultiple"
		      optimisticPreviews
		      multiple={false}
		      onLoadEnd={(err) => {
		        if (err) {
		          console.error(err);
			    }
		      }}
		      label="Upload a picture"
		    />
          </PostImageUploadWrapper>          
          <PostText>
            <H2>@{this.state.username}</H2>
            <H4>Submit a new post</H4>
            <Textarea placeholder="Write something...">{this.state.text}</Textarea>
          </PostText>
        </PostWrapper>        
      </Page>        
    )
  }
}