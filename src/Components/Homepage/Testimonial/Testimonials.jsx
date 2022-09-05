import React, { useState, useEffect } from 'react'

import TestimonialCard from './TestimonialCard';


const Testimonials = () => {
    
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
       

        async function getTestimonials() {
            const response = await fetch("https://testimonialapi.toolcarton.com/api");
            const testimonials = await response.json();

            if (testimonials && testimonials.length > 0) {
                setTestimonials(testimonials);
                
            }


        }
        getTestimonials();
    }, [])
  return (
      <div>
          {
              (testimonials.map((testimonial, index) => (<TestimonialCard testimonial={testimonial} key={`${index}${testimonial.id}` }/>))
          )}
         
      </div>
  )
}

export default Testimonials