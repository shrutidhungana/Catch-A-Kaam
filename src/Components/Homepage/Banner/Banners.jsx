import React from 'react'
import { Banner, Image, Heading1, Span } from './BannerStyle'
import background from '../../../Assets/background.jpg'

const Banners = () => {
  return (
      <Banner>
      <Heading1> We have the best Freelancing Services</Heading1>
      <Image src={background} alt="img" />
      <h2>Think what you want to achieve through this website.</h2>
      <h3>The Possibilities are endless</h3>
      <h4>Freelancing at your own <Span>risk</Span></h4>
      <h4>Do you have some skills?</h4>
      
     
      </Banner>
  )
}

export default Banners