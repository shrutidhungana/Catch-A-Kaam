import React from 'react'
import { Banner, Image, Heading1,Heading2,Heading3,Heading4, Span } from './BannerStyle'
import background from '../../../Assets/background.jpg'

const Banners = () => {
  return (
      <Banner>
      <Heading1> We have the best Freelancing Services</Heading1>
      <Image src={background} alt="img" />
      <Heading2>Think what you want to achieve through this website.</Heading2>
      <Heading3>The Possibilities are endless</Heading3>
      <Heading4>Freelancing at your own <Span>risk</Span></Heading4>
      <Heading4>Do you have some skills?</Heading4>
      
     
      </Banner>
  )
}

export default Banners