import styled from 'styled-components'

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #464343;
  width: 10%;
`

export const ButtonBlock = styled.div`
  &__language-toggle {
    display: flex;
    align-items: center;

    &__text {
      margin-right: 5px;
    }
  }

  &__button {
    padding: 8px 16px;
    font-size: 1rem;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;

    &:hover {
      background-color: #0056b3;
    }
  }
`

export const ButtonStyle = styled.button`
    border-radius: 15px;
    border: 0;
    padding: 5px 10px;
    width: 80px;
    font-weight: bold;
`
