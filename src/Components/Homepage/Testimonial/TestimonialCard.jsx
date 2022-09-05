import React from 'react'

const TestimonialCard = (props) => {
    const { testimonial } = props;

    const {id, name, location, designation, avatar, message, rating } = testimonial;

  return (
      <div>
          <p>{id}</p>
          <p>{message}</p>
         <img src={avatar} alt="Avatar" />
          <p>{name}</p>
          <p>{designation}</p>
          <p>{location }</p>
          <p>{rating}</p>
      </div>
  )
}

export default TestimonialCard