import React, {useState, useEffect} from 'react'

import emailjs from 'emailjs-com';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import SelectField from './SelectField';
// import Swal from 'sweetalert2';



const ContactForm = () => {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        message: '',
        role: ''
    });
    
    const [status, setStatus] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_vtfv7n6', 'template_7oqjf8l', values, '2i6appAU3hpzjhsRX')
            .then(response => {
                console.log('SUCCESS!', response);
                setValues({
                    fullName: '',
                    email: '',
                     role: '',
                    message: ''
                });
                setStatus('SUCCESS');
            }, error => {
              console.log('FAILED...', error);
            });
    }
    useEffect(() => {
        if(status === 'SUCCESS') {
          setTimeout(() => {
            setStatus('');
          }, 3000);
        }
    }, [status]);
    
    const handleChange = (e) => {
        setValues(values => ({
          ...values,
          [e.target.name]: e.target.value
        }))
      }

  return (
      <div>
          
          {status && renderAlert()}
           
          <form onSubmit={handleSubmit} >
              <div>
                  <InputField type="text"
                      name = "fullName"
                      placeholder="John White" 
                      required
                      value={values.fullName}
                      handleChange={handleChange}
                      label = "Full Name:"
                  />
              </div>
              <div>
                  <InputField type="email"
                      name = "email"
                      placeholder="example@mail.com"
                      required
                      value={values.email}
                      handleChange={handleChange}
                      label = "E-mail:"

                  />
                  
              </div>
              <div>
                  <SelectField handleChange={handleChange}
                      name="role"
                      label="Role:" />
              </div>
              <div>
              <TextAreaField
                      placeholder="Message"
                      required
                      value={values.message}
                      handleChange={handleChange}
                      name="message"
                      label = "Message:"
          />
              </div>
              <button type= "submit">Send Message</button>
          </form>
      </div>
  )
}

const renderAlert = () => (
    <div >
      <p>your message submitted successfully</p>
    </div>
)

export default ContactForm