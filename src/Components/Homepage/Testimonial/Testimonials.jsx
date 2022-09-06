import React, { useState, useEffect } from 'react'
import { Style } from './TestimonialStyle';
import TestimonialCard from './TestimonialCard/TestimonialCard';


    

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
      <Style>
         
          {
                  (testimonials.map((testimonial, index) => (
                 
                          <TestimonialCard testimonial={testimonial} key={`${index}${testimonial.id}`} />
                          
                          ))
          )}
          
      </Style>
  )
}

export default Testimonials