import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
    Project,
    Button,
    Inputs,
    Input,
    Textarea
} from './ProjectFormStyles';
import './ProjectForm.css'

const ProjectForm = (props) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [newDate, setNewDate] = useState("");
  const [values, setValues] = useState({
    projectName: "",
    address: "",
    description: "",
    features: "",
    technology: "",
   
  });
  const [amount, setAmount] = useState("");
    const { addProject } = props;
  

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,

      [e.target.name]: e.target.value
    }));
  };

  const onDatePostedChange = (date) => {
      
        setSelectedDate(date)
    
  };

  const onDateCompletionChange = (date) => {
    setNewDate(date);
  };

  const onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amount);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      addProject({ ...values, selectedDate, newDate, amount });
    setSelectedDate("");
    setNewDate("");
    setAmount("");
    setValues({
      projectName: "",
      address: "",
      description: "",
      features: "",
        technology: "",
     
      
    });
  };
  return (
    <Project>
      <form onSubmit={handleSubmit}>
        <Inputs>
          <label htmlFor="projectName">Project Name:</label>
          <Input
            type="text"
            name="projectName"
            required
            value={values.projectName}
            onChange={handleChange}
          />
        </Inputs>
        <div>
          <label htmlFor="datePosted">DatePosted:</label>
                  <DatePicker
                  className="datepicker"
                  selected={selectedDate}
                  onChange={onDatePostedChange}
                  required
                  name="dateCompleted"
                  />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <Input
            type="text"
            name="address"
            required
            value={values.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <Textarea
            required
            rows="6"
            name="description"
            value={values.description}
            onChange={handleChange}
          ></Textarea>
        </div>
        <div>
          <label htmlFor="features">Features:</label>
          <Textarea
            required
            rows="6"
            name="features"
            value={values.features}
            onChange={handleChange}
          ></Textarea>
        </div>
        <div>
          <label htmlFor="tech">Technologies to be used(Tech Stack):</label>
          <Textarea
            rows="6"
            required
            name="technology"
            value={values.technology}
            onChange={handleChange}
          ></Textarea>
        </div>
        <div>
          <label htmlFor="time">Expected date to complete:</label>
          <DatePicker
            className="datepicker"
            selected={newDate}
            onChange={onDateCompletionChange}
            required
            name="dateCompleted"
          />
        </div>
        <div>
          <label htmlFor="amount">Amount willing to pay:</label>
          <Input
            type="text"
            required
            name="amount"
            value={amount}
            onChange={onAmountChange}
          />
        </div>
        <Button type="submit">Add Project</Button>
      </form>
    </Project>
  );
};
export default ProjectForm;

