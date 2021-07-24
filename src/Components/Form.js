import styled from 'styled-components'

export const Input = styled.input`
  border: none;    
  border-bottom: 1px solid #aaa;
  ${props => props.error ? "background-color: #f00; color: white; &::placeholder { color: white; }": "background-color: inherit; color: inherit; &::placeholder { color: inherit; }" };    
  font-size: 16px;
  padding: 0.5em;
  box-sizing: border-box;    
`

export const Textarea = styled.textarea`
  border: none;
  border: 1px solid #aaa;
  ${props => props.error ? "background-color: #f00; color: white;": "background-color: inherit; color: inherit;" };    
  font-size: 12px;
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  min-height: 300px;
  width: 100%;
`