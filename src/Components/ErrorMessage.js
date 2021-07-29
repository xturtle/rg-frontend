export default function ErrorMessage(props){
  let msg = props.message;
  if (msg === undefined || msg === null)
    msg = '\u00A0';

  return (
    <p style={{"font-size": "11px", "text-align": "center", "color": "red", "padding" : 0}}>
      {msg.length > 0? msg : '\u00A0'}</p>
  )
}