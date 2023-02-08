import styled from 'styled-components'

export const ThirdView = styled.div`
  margin-top: 5rem;
  min-height: 80vh;
  background-color: var(--background);
  display: flex;
  align-items: center;

  .contentThirtDiv {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    img {
      max-width: 30rem;

      @media (max-width: 1052px) {
        display: none;
      }
    }

    h3 {
      font-weight: 400;
      font-size: 2rem;
      color: var(--black);
    }

    p {
      color: var(--black);
      font-size: 0.875rem;
    }

    button {
      background-color: var(--blue);
      border: 0;
      padding: 0.75rem 2rem;
      color: var(--shape);
      font-weight: 600;
      border-radius: 5rem;
    }

    .buttonDiv {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1rem 0;
    }

    .descripionThirtDiv {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`
export const Hr = styled.div`
  border: none;
  height: 1px;
  color: #ccd8e0;
  background-color: #ccd8e0;
  width: 100%;
`
