import React from 'react'
import { Banner, Image } from './BannerStyle'
import background from '../../../Assets/background.jpg'

const Banners = () => {
  return (
      <Banner>
      <h1> Find the best freelancing Service here; the possibilities are endless</h1>
      <Image src={background} alt="img" />
      <h2>Think what you want to achieve through this website.</h2>
      
     
      </Banner>
  )
}

export default Banners