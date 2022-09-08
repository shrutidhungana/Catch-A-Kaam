import React from "react";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Heading3, Paragraph2, Paragraph3, Left } from "./ContactStyle";
import "./Contact.css";

const Contacts = () => {
  return (
    <div>
      <Left>
        <div>
          <Paragraph3>
            <ImLocation2 className="icons" />
          </Paragraph3>
          <Heading3>Address</Heading3>
          <Paragraph2>6, Nagarkot,Changunarayan,Bhaktapur</Paragraph2>
          <br />
          <Paragraph2>8,Guheshwori,Kathmandu</Paragraph2>
        </div>
        <div>
          <Paragraph3>
            <BsFillTelephoneFill className="icons" />
          </Paragraph3>
          <Heading3>Phone</Heading3>
          <Paragraph2>+977-9861495261</Paragraph2>
        </div>
        <div>
          <Paragraph3>
            <MdEmail className="icons" />
          </Paragraph3>
          <Heading3>Email</Heading3>
          <Paragraph2>
            <a href="mailto: shrutidhungana123@gmail.com ">
              shrutidhungana123@gmail.com
            </a>
          </Paragraph2>
        </div>
      </Left>
    </div>
  );
};

export default Contacts;
