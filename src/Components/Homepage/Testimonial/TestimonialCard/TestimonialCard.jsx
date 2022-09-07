import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import {
  Image,
  Testimonial,
  Message,
  User,
  UserDetails,
  UserName,
  Role,
  Id,
  Location,
  Rating
} from "./TestimonialCardStyle";
import "./TestimonialCard.css";

const TestimonialCard = (props) => {
  const { testimonial } = props;

  

  const { id, name, location, designation, avatar, message, rating } =
    testimonial;
  
  

  return (
    <Testimonial>
      <Id>{id}</Id>
      <ImQuotesLeft className="left" />
      <Message>{message}</Message>
      <ImQuotesRight className="right" />
      <User>
        <Image src={avatar} alt="Avatar" />
        <UserDetails>
          <UserName>{name}</UserName>
          <Role>{designation}</Role>
          <Location>{location}</Location>
          <Rating>{rating}</Rating>
        </UserDetails>
      </User>
    </Testimonial>
  );
};

export default TestimonialCard;
