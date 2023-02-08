import styled from 'styled-components'

export const PrimaryView = styled.div`
  background-color: var(--background);

  .primaryDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 70vh;

    h3 {
      font-weight: 400;
      font-size: 2.5rem;
      color: var(--black);
      text-align: center;
    }

    h1 {
      font-weight: 600;
      font-size: 4rem;
      color: var(--blue);
      text-align: center;

      @media (max-width: 556px) {
        font-size: 3rem;
      }
    }

    p {
      color: var(--black);
      font-size: 0.875rem;
      text-align: center;
      margin-top: 1rem;
    }

    button {
      background-color: transparent;
      border: 1px solid var(--blue);
      padding: 0.5rem 0.75rem;
      color: var(--blue);
      font-weight: 600;
      border-radius: 5rem;
      border-bottom-left-radius: 1rem;
      margin-bottom: 1rem;

      &:hover {
        color: var(--blue2);
        border: 1px solid var(--blue2);
      }
    }
  }
`

export const H1 = styled.h1`
  font-weight: 600;
  font-size: 4rem;
  color: var(--blue);
  text-align: center;
  word-wrap: break-word;

  @media (max-width: 556px) {
    font-size: 3rem;
  }
`

export const Hr = styled.div`
  border: none;
  height: 1px;
  color: #ccd8e0;
  background-color: #ccd8e0;
  width: 100%;
`

export const Img = styled.img`
  margin-bottom: 1.875rem;
  margin-left: -1.65rem;

  @media (max-width: 428px) {
    display: none;
  }
`
