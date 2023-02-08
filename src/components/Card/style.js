import styled from 'styled-components'

export const Card = styled.div`
  width: 17rem;
  -webkit-box-shadow: 0px 9px 29px -3px rgba(0, 0, 0, 0.27);
  -moz-box-shadow: 0px 9px 29px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 0px 9px 29px -3px rgba(0, 0, 0, 0.27);
  border-radius: 0.5rem;
  position: relative;
  cursor: pointer;

  &:hover {
    p {
      color: var(--blue);
    }
    .preto {
      background-color: rgba(44, 131, 251, 0.37);
      display: flex;
    }
  }

  .preto {
    position: absolute;
    background-color: transparent;
    width: 100%;
    top: 0;
    height: 66.7%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 0.25rem;
    display: none;
  }

  img {
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .description {
    padding: 1rem;
  }

  p {
    max-height: 25ch;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
    color: var(--black);
  }
`
