import styled from 'styled-components'

export const Footer = styled.div`
  .title {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 0.75rem;
    color: #ccd8e0;
    gap: 0.5rem;
    padding: 2rem 0;
  }

  .contentFooter {
    display: flex;
    align-items: initial;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2rem;
    padding: 2rem 0;

    h5 {
      color: var(--black);
      font-weight: 600;
      margin-bottom: 2rem;
      font-size: 1rem;
    }

    a {
      color: #ccd8e0;
      font-weight: 400;
      font-size: 0.875rem;
      margin-bottom: 0.75rem;
      text-decoration: none;

      &:hover {
        color: var(--blue);
      }
    }
  }

  .copyrigth {
    color: var(--black);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
    padding: 2rem 0;
  }

  .linkGroup {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`

export const Hr = styled.div`
  border: none;
  height: 1px;
  color: #ccd8e0;
  background-color: #ccd8e0;
  width: 100%;
`
