import styled from 'styled-components'
import Thumbnail from "./Thumbnail"

//thumbnails list on HomePage / Personal Page
const ThumbnailsWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`

export default function ThumbnailsList(props){
  var urls = props.urls;

  const thumbnails = urls.map((t) =>
    <Thumbnail key={t.id} id={t.id} url={t.url} />
  );

  return (
    <ThumbnailsWrapper>
      {thumbnails}
    </ThumbnailsWrapper>
  )
}
