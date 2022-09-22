import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {
    Project,
    Button,
    Inputs,
    Input,
    Textarea
} from './ProjectFormStyles';
import './ProjectForm.css'


const AddProjectForm = () => {
    const [selectedDate, setSelectedDate] = useState("")
    const [newDate, setNewDate] = useState("")
    const [values, setValues] = useState({
        projectName: "",
        address: "",
        description: "",
        features: "",
        technology: "",
        amount: ""
    }
     )

    
    const onNameChange = (e) => {
          
      }
    
    
    const onDatePostedChange = (date) => {
       setSelectedDate(date)
    }

    
    const onDateCompletionChange = (date) => {
        setNewDate(date)
    }

    return (
        <Project>
           
            <form>
                <Inputs>
                    <label htmlFor="projectName">Project Name:</label>
                    <Input type="text"
                       
                        required
                    />
                </Inputs>
                <Inputs>
                    <label htmlFor="datePosted">DatePosted:</label>
                    <DatePicker
                        className = "datepicker"
                        selected={selectedDate}
                        onChange={onDatePostedChange}
                       required
                    />
                </Inputs>
                <Inputs>
                    <label htmlFor="address">Address:</label>
                    <Input type="text"
                        required
                    />
                </Inputs>
                <Inputs>
                    <label htmlFor="description">Description:</label>
                    <Textarea
                        required
                        rows="6"
                    >
                    </Textarea>
          
                </Inputs>
                <Inputs>
                    <label htmlFor="features">Features:</label>
                    <Textarea
                        required
                        rows="6"
                    >
                    </Textarea>
                </Inputs>
                <Inputs>
                    <label htmlFor="tech">Technologies to be used(Tech Stack):</label>
                    <Textarea
                        rows="6"
                        required
                    >
                    </Textarea>
                </Inputs>
                <Inputs>
                    <label htmlFor="time">Expected date to complete:</label>
                    <DatePicker
                        className="datepicker"
                        selected={newDate}
                        onChange={onDateCompletionChange}
                       required
                    />
                </Inputs>
                <Inputs>
                    <label htmlFor="amount">Amount willing to pay:</label>
                    <Input
                        type="text"
                        required
                    />
                </Inputs>
                <Button>Add Project</Button>
                </form>
                
        </Project>
    )
}
export default AddProjectForm