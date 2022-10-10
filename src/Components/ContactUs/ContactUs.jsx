import React from "react";
import ContactForm from "./ContactForm/ContactForm";

import {
  Contact,
  Heading1,
  Heading2,
  Paragraph1,
  Paragraph2,
} from "./ContactUsStyle";
import "./Contactus.css";
import Contacts from "./Contact Address/Contacts";

const ContactUs = () => {
  return (
    <Contact>
      <div className="bg">
        <Heading1>Get In Touch</Heading1>
        <Heading2>Do you have any queries regarding the website? </Heading2>
        <Paragraph1>
          You can contact us via credentials given below:{" "}
        </Paragraph1>
        <Contacts />

        <Paragraph2>
          Also, you can send us anything regarding the website you have in the
          form below:
        </Paragraph2>
        <ContactForm />
      </div>
    </Contact>
  );
};

export default ContactUs;
