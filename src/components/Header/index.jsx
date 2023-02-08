import * as Styled from './style'
import Container from '@mui/material/Container'

export default function Header() {
  return (
    <>
      <Styled.Header>
        <Container fixed>
          <header>
            <img src="/images/logo.png" alt="" />
          </header>
        </Container>
      </Styled.Header>
    </>
  )
}
