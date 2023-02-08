import * as Styled from './style'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

export default function Card({ onclick }) {
  return (
    <>
      <Styled.Card onClick={onclick}>
        <div className="image">
          <img src="/images/thumbnail.png" alt="" />
          <div className="preto">
            <PlayArrowIcon sx={{ fontSize: 90 }} />
          </div>
        </div>
        <div className="description">
          <p>Como aumentar sua geração de leads feat.Tracktor</p>
        </div>
      </Styled.Card>
    </>
  )
}
