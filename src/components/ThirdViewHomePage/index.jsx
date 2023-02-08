import { Container } from '@mui/material'
import * as Styled from './style'

export default function ThirdViewHomePage() {
  return (
    <Styled.ThirdView>
      <Container maxWidth="lg">
        <div className="contentThirtDiv">
          <img src="/images/comparativo.png" alt="" />
          <div className="descripionThirtDiv">
            <h3>
              Pronto para triplicar sua <br />{' '}
              <strong> Geração de Leads?</strong>
            </h3>
            <p>
              Criação e ativação em <strong>4 minutos</strong>
            </p>
            <Styled.Hr />
            <div className="buttonDiv">
              <button>Ver demostração</button>
              <img src="/images/selo_RD.png" alt="" />
            </div>
            <p>
              <img src="/images/no-card-dark.webp" alt="" /> Não é necessario
              cartão de crédito &nbsp; | &nbsp;
              <img src="/images/rating.webp" alt="" /> &nbsp;{' '}
              <strong>4.9</strong>/5 Média de satisfação
            </p>
          </div>
        </div>
      </Container>
    </Styled.ThirdView>
  )
}
