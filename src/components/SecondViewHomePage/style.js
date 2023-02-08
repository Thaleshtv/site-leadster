import styled from 'styled-components'

export const ContentCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`

export const SecondView = styled.div`
  margin-top: 1rem;

  .filterLine {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    border-bottom: 1px solid #ccd8e0;
    flex-wrap: wrap;

    label {
      font-weight: 600;
      color: var(--black);
    }

    select {
      border: 1px solid var(--black);
      padding: 0.5rem;
      border-radius: 0.5rem;
      margin-left: 0.5rem;
      background-color: transparent;
    }

    .filterLineSelect {
      @media (max-width: 873px) {
        margin-top: 2rem;
      }
    }

    .lineButtons {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;

      .notSelected {
        background-color: transparent;
        border: 1px solid var(--black);
        padding: 0.5rem 0.75rem;
        color: var(--black);
        font-weight: 600;
        border-radius: 5rem;

        &:hover {
          color: var(--blue2);
          border: 1px solid var(--blue);
        }
      }

      .selected {
        background-color: var(--blue);
        border: 1px solid var(--blue);
        padding: 0.5rem 0.75rem;
        color: var(--shape);
        font-weight: 600;
        border-radius: 5rem;

        &:hover {
          color: var(--shape);
          border: 1px solid var(--blue);
        }
      }
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

export const ContentModal = styled.div`
  .title {
    padding: 2rem 4rem;
    font-size: 0.875rem;
    color: var(--black);
    text-align: center;

    strong {
      font-weight: 700;
      color: var(--blue);
    }
  }

  .description {
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h5 {
      font-weight: 700;
      color: var(--black);
    }

    p {
      font-size: 0.875rem;
      color: var(--black);
      margin-bottom: 0.5rem;
    }
  }
`

export const ButtonGreen = styled.div`
  display: flex;
  align-items: center;
  border: 0;
  border-radius: 0.25rem;
  color: #1fb896;
  font-weight: 600;
  background-color: #c1f5e9;
  font-size: 0.5rem;
  padding: 0rem 1rem 0rem 0rem;
  cursor: pointer;

  .imgGreen {
    background-color: #a1eedc;
    padding: 0.25rem 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
  }
`

export const ButtonBlue = styled.div`
  display: flex;
  align-items: center;
  border: 0;
  background-color: #c3e5ff;
  border-radius: 0.25rem;
  color: #2f8dd5;
  font-weight: 600;
  font-size: 0.5rem;
  padding: 0rem 1rem 0rem 0rem;
  cursor: pointer;

  .imgBlue {
    background-color: #a2dcff;
    padding: 0.25rem 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
  }
`

export const ButtonYellow = styled.div`
  display: flex;
  align-items: center;
  border: 0;
  background-color: #fff8d0;
  border-radius: 0.25rem;
  color: #ac9e65;
  font-weight: 600;
  font-size: 0.5rem;
  padding: 0rem 1rem 0rem 0rem;
  cursor: pointer;

  .imgYellow {
    background-color: #fff0a3;
    padding: 0.25rem 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
  }
`
