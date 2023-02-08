import { Container } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'

import * as Styled from './style'

export default function Footer() {
  return (
    <>
      <Styled.Footer>
        <div className="title">
          <img src="/images/logo.png" alt="" />
          <p>Transformando visitantes em clientes</p>
        </div>
        <Container maxWidth="lg">
          <div className="contentFooter">
            <div>
              <h5>Links principais</h5>
              <div className="linkGroup">
                <a href="#">Home</a>
                <a href="#">Ferramenta</a>
                <a href="#">Preços</a>
                <a href="#">Contato</a>
              </div>
            </div>
            <div>
              <h5>Cases</h5>
              <div className="linkGroup">
                <a href="#">Geração de Leads B2B</a>
                <a href="#">Geração de Leads em softwares</a>
                <a href="#">Geração de Leads em Imobiliária</a>
                <a href="#">Cases de Sucesso</a>
              </div>
            </div>
            <div>
              <h5>Materiais</h5>
              <div className="linkGroup">
                <a href="#">Blog</a>
                <a href="#">Pareceria com Agências</a>
                <a href="#">Guia Definitivo do Marketing</a>
                <a href="#">Materiais Gratuitos</a>
              </div>
            </div>
            <div>
              <h5>Siga a Leadster</h5>
              <div>
                <Styled.SocialMedia>
                  <button>
                    <LinkedInIcon
                      sx={{ fontSize: '1.25rem', color: '#848EB0' }}
                    />
                  </button>
                  <button>
                    <FacebookRoundedIcon
                      sx={{ fontSize: '1.25rem', color: '#848EB0' }}
                    />{' '}
                  </button>
                  <button>
                    <InstagramIcon
                      sx={{ fontSize: '1.25rem', color: '#848EB0' }}
                    />
                  </button>
                </Styled.SocialMedia>
                <p>
                  E-mail: <a href=""> contato@leadster.com.br</a>
                </p>
                <p>
                  Telefone: <a href=""> (42) 98828-9851</a>{' '}
                </p>
              </div>
            </div>
          </div>
        </Container>
        <Styled.Hr></Styled.Hr>
        <Container maxWidth="lg">
          <div className="copyrigth">
            <p>
              Copyright &nbsp; 2015 - 2022 &nbsp;Todos os direitos reservados
              &nbsp; |&nbsp; Leadster
            </p>
            <p>
              Rua Jośe Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000
              &nbsp;| &nbsp; Termos de uso
            </p>
          </div>
        </Container>
      </Styled.Footer>
    </>
  )
}
