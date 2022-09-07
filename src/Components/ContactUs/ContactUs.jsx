import React from 'react'
import ContactForm from './ContactForm/ContactForm'
import { ImLocation2 } from 'react-icons/im'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import {
    Contact,
    Heading1,
    Heading2,
    Paragraph1,
    Heading3,
    Paragraph2,
    Paragraph3,
    Left
  
    
} from './ContactUsStyle'
import './Contact.css'

const ContactUs = () => {
    return (
      
        <Contact>
            <div className="bg">
                
          <Heading1>Get In Touch</Heading1>
          <Heading2>Do you have any queries regarding the website? </Heading2>
                <Paragraph1>You can contact us via credentials given below: </Paragraph1>
                <Left>
          <div>
          <Paragraph3><ImLocation2 className = "icons"/></Paragraph3>
          <Heading3>Address</Heading3>
                        <Paragraph2>6, Nagarkot,Changunarayan,Bhaktapur</Paragraph2>
                        <br />
              <Paragraph2>8,Guheshwori,Kathmandu</Paragraph2>
          </div>
          <div>
          <Paragraph3><BsFillTelephoneFill className = "icons"/></Paragraph3>
              <Heading3>Phone</Heading3>
              <Paragraph2>+977-9861495261</Paragraph2>
          </div>
          <div>
          <Paragraph3><MdEmail className = "icons" /></Paragraph3>
              <Heading3>Email</Heading3>
              <Paragraph2><a href="mailto: shrutidhungana123@gmail.com ">shrutidhungana123@gmail.com</a></Paragraph2>
                </div>
                </Left>
                <div>
          <p>Also you can send us anything you have  in the form below:</p>
                    <ContactForm />
                    </div>
                </div>
            </Contact>
            
  )
}

export default ContactUs