import React from 'react'
import { HomeContainer, ImageContainer } from './HomeStyles'

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <ImageContainer $imageUrl='https://wallpapers.com/images/featured/harry-potter-aesthetic-toqxqvei46m6rs6o.jpg'>
       </ImageContainer>
      <ImageContainer $imageUrl='https://flxt.tmsimg.com/assets/p10376284_i_v13_ac.jpg'>
       </ImageContainer>
    </HomeContainer>
  )
}

export default Home
