import React from "react";
import styled from 'styled-components';
import { FileUploadField } from "./Form";

var Wrapper = styled.div`
  width: 60%;
  height: 100%;
  float: left;
  border-radius: 10px;
  border: 1px solid #aaa;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  &:before {      /* enforce to stretch vertically to 100% */
    content: '';
    display: table;
    padding-top: 100%;
    float: left;
  }; 
`

export default class ImageUpload extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
    this.props.onChange(event);
  }

  render(){
    return (<Wrapper style={{"background": `url(${this.state.file}) no-repeat center center`, "backgroundSize": "contain"}}>
      <FileUploadField type="file" name={this.props.name} onChange={this.handleChange}/>
    </Wrapper>);
  }
}