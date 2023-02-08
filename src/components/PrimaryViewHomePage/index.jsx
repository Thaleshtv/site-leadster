import { Container } from '@mui/material'
import * as Styled from './style'

export default function PrimaryViewHomePage() {
  return (
    <Styled.PrimaryView>
      <Container maxWidth="xl">
        <div className="primaryDiv">
          <button>WEBNARIS EXCLUSIVOS</button>
          <h3>Menos Conversinha</h3>
          <Styled.H1>
            Mais conversação{' '}
            <Styled.Img src="/images/asset-header.png" alt="" />
            <Styled.Hr />
          </Styled.H1>
          <p>
            Conheça as estratégias que <strong>mudaram o jogo</strong> e como
            aplicá-las no seu negocio
          </p>
        </div>
      </Container>
    </Styled.PrimaryView>
  )
}
