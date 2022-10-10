import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import SelectField from "./SelectField";
import {
  Container,
  Heading,
  FormControl,
  Button,
  Form,
  Render,
  Renders,
} from "./ContactFormStyle";

const ContactForm = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
    role: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_vtfv7n6", "template_7oqjf8l", values, "2i6appAU3hpzjhsRX")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            fullName: "",
            email: "",
            role: "",
            message: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container>
      <Heading>Send Message</Heading>

      <Form onSubmit={handleSubmit}>
        <FormControl>
          <InputField
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={values.fullName}
            handleChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <InputField
            type="email"
            name="email"
            placeholder="E-Mail"
            required
            value={values.email}
            handleChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <SelectField handleChange={handleChange} name="role" />
        </FormControl>
        <FormControl>
          <TextAreaField
            placeholder="Message"
            required
            value={values.message}
            handleChange={handleChange}
            name="message"
          />
        </FormControl>
        <Button type="submit">Send Message</Button>
      </Form>
      {status && renderAlert()}
    </Container>
  );
};

const renderAlert = () => (
  <Render>
    <Renders>Your Message has been submitted Successfully.</Renders>
  </Render>
);

export default ContactForm;
