import { useState } from 'react'

import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import { Container } from '@mui/material'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Card from '../Card'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import * as Styled from './style'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  outline: 'none',
  borderRadius: '12px'
}

export default function SecondViewHomePage() {
  const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  const [buttonSelect, setButtonSelect] = useState('geracaoDeLeads')
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Styled.SecondView>
        <Container maxWidth="lg">
          <div className="filterLine">
            <div className="lineButtons">
              <button
                type="button"
                className={
                  buttonSelect === 'agencia' ? 'selected' : 'notSelected'
                }
                onClick={(event) => setButtonSelect(event.target.value)}
                value="agencia"
              >
                Agências
              </button>
              <button
                type="button"
                className={
                  buttonSelect === 'chatbot' ? 'selected' : 'notSelected'
                }
                value="chatbot"
                onClick={(event) => setButtonSelect(event.target.value)}
              >
                Chatbot
              </button>
              <button
                type="button"
                className={
                  buttonSelect === 'marketing' ? 'selected' : 'notSelected'
                }
                value="marketing"
                onClick={(event) => setButtonSelect(event.target.value)}
              >
                Marketing Digital
              </button>
              <button
                type="button"
                className={
                  buttonSelect === 'geracaoDeLeads' ? 'selected' : 'notSelected'
                }
                value="geracaoDeLeads"
                onClick={(event) => setButtonSelect(event.target.value)}
              >
                Geração de leads
              </button>
              <button
                type="button"
                className={
                  buttonSelect === 'midiaPaga' ? 'selected' : 'notSelected'
                }
                value="midiaPaga"
                onClick={(event) => setButtonSelect(event.target.value)}
              >
                Mídia paga
              </button>
            </div>
            <div className="filterLineSelect">
              <label htmlFor="filter">Ordernar por</label>
              <select name="filter" id="filter">
                <option value="dataPublicacao">Data de publicação</option>
              </select>
            </div>
          </div>
          <Styled.ContentCards>
            {array.map((number) => (
              <Card
                key={number}
                onclick={() => {
                  handleOpen()
                }}
              />
            ))}
          </Styled.ContentCards>
          <Styled.Hr></Styled.Hr>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            mt={3}
          >
            <Pagination count={4} color="primary" />
          </Stack>
        </Container>
      </Styled.SecondView>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Styled.ContentModal>
              <div className="title">
                <h3>
                  <strong>Webinar</strong>: Como aumentar sua Geração de Leads
                  feat.Tracktor
                </h3>
              </div>
              <iframe
                width="100%"
                height="215"
                src="https://www.youtube.com/embed/kvZxxVLApxw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="description">
                <h5>Descrição</h5>
                <Styled.Hr />
                <p>
                  Lorem Ipsum has been the industry standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <h5>Dowloads</h5>
                <Styled.Hr />
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem'
                  }}
                >
                  <Styled.ButtonGreen className="green">
                    <div className="imgGreen">
                      <CloudDownloadIcon />
                    </div>
                    Spreedsheet.xls
                  </Styled.ButtonGreen>
                  <Styled.ButtonBlue className="blue">
                    <div className="imgBlue">
                      <CloudDownloadIcon />
                    </div>
                    Document.doc
                  </Styled.ButtonBlue>
                  <Styled.ButtonYellow className="yellow">
                    <div className="imgYellow">
                      <CloudDownloadIcon />
                    </div>{' '}
                    Presentation.ppt
                  </Styled.ButtonYellow>
                </div>
              </div>
            </Styled.ContentModal>
          </Box>
        </Modal>
      </div>
    </>
  )
}
