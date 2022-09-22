import React from "react";
import image from "../../Assets/image.jpg";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineFacebook,
} from "react-icons/ai";
import {
  Image,
  About,
  Heading,
  Paragraph,
  Italic,
  Paragraph1,
  Icons,
  Paragraph2,
  Quote,
  Para,
  Citation,
    Content,
    Horizontal
} from "./AboutUsStyle";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <About>
      <Content>
        <Heading>Catch-A-Kaam</Heading>
        <Paragraph>
          This is a fictional website. The main idea of the website is that client can add their project. The list of credential a client can include in the project could be its name, date posted,address of client or company,description, features to include, the tech stack they would want to use, the expected time to complete the project, the expected amount freelancers are willing to take so that the freelancers would decide if thay would like to take the project or not depending on their requirements,skills or calibre and if they could complete the project in time.
          
        </Paragraph>

        <Paragraph>
          The main aim of the website is to give freelancers the project they
          like to take and client to give work to freelancers.
        </Paragraph>
        <div>
          <Quote>
            "No matter how much experience you have, how many degrees you have,
            or how well known you have become — there is always something new to
            learn. Don't rest on your past experiences. If you do nothing to
            improve your skills, you won't stay where you are."
          </Quote>
          <Para>-</Para>
          <Citation>Laura Spencer</Citation>
        </div>
        <Italic>The project developer</Italic>
        <Horizontal />
        <Paragraph1>Shruti Dhungana</Paragraph1>
        <Paragraph2>React Developer</Paragraph2>

        <Image src={image} alt="MyPhoto" />
        <Icons>
          <p>
            <a href="https://www.linkedin.com/in/shruti-dhungana-2ab9901b5/">
              <AiOutlineLinkedin />
            </a>
          </p>
          <p>
            <a href="https://github.com/shrutidhungana">
              <AiOutlineGithub />
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/shruti.dhungana.5/">
              <AiOutlineFacebook />
            </a>
          </p>
        </Icons>
      </Content>
    </About>
  );
};

export default AboutUs;
