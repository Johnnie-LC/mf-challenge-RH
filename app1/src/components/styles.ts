import styled from 'styled-components'

export const CharacterContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    padding: 10px 5px;
`
export const CharacterCardContainer = styled.div`
  display: flex;
  width: 150px;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
`

export const CharacterImage = styled.div`
  img {
    max-width: 100px;
    height: auto;
  }
`

export const CharacterInfo = styled.div`
  margin: 0px;
  border-radius: 5px;
  margin: 0;
  width: 100%;
  p {
    border-radius: 5px;
    font-size: 0.8rem;
    padding:0.2rem;
    margin: 0.2rem 0;
    background: white;
    /* text-align: justify; */
  }
`
