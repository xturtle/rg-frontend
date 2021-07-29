import styled from 'styled-components'
import Thumbnail from "./Thumbnail"

//thumbnails list on HomePage / Personal Page
const ThumbnailsWrapper = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`

export default function ThumbnailsList(props){
  var images = props.images;
  const thumbnails = images.map((t) =>
    <Thumbnail key={t.id} id={t.id} url={t.image} />
  );

  return (
    <ThumbnailsWrapper>
      {thumbnails}
    </ThumbnailsWrapper>
  )
}
