import styled from 'styled-components'
import {
    Link
} from "react-router-dom";
import config from "../lib/config"

const ThumbnailBox = styled.div`    
  display: flex;
  flex: 0 0 33%;    
  padding: 1em;
  box-sizing: border-box;    

  justify-content: center;
  align-items: stretch;
    
  &:before {      /* enforce to stretch vertically to 100% */
    content: '';
    display: table;
    padding-top: 100%;
  };
`

const ThumbnailBody = styled(Link)`
  display: flex;
  flex-grow: 1;
  border-radius: 15px;    

  color: white;      
  justify-content: center;
  align-items: center;
  opacity: 0.8;

  &:hover {
    opacity : 1;
  }

  ${props => props.url ? `background: url('${config.imagePath}/${props.url}') no-repeat center center;` : "background-color: gray"};    
`

export default function Thumbnail (props){
  return (<ThumbnailBox>
    <ThumbnailBody url={props.url} to={{
      pathname: "/post/" + props.id,
      state: props
    }}/>
  </ThumbnailBox>);
}
  