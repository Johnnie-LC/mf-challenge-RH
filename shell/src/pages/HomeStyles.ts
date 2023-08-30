import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ImageContainer = styled.div<{ $imageUrl?: string }>`
  width: 50%;
  height: 94.9vh;
  background: ${props => `url(${props.$imageUrl})`};
  background-size: cover;
`
