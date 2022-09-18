import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const AddProjectForm = () => {
    const [selectedDate, setSelectedDate] = useState("")
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="projectName">Project Name:</label>
                    <input type="text"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="datePosted">DatePosted:</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input type="text"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        required
                        rows="6"
                    >
                    </textarea>
          
                </div>
                <div>
                    <label htmlFor="features">Features</label>
                    <textarea
                        required
                        rows="6"
                    >
                    </textarea>
                </div>
                <div>
                    <label htmlFor="tech">Technologies to be used:</label>
                    <textarea
                        rows="6"
                        required
                    >
                    </textarea>
                </div>
                <div>
                    <label htmlFor="time">Expected date to complete:</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount willing to pay:</label>
                    <input
                        type="text"
                        required
                    />
                </div>
                <button>Add Project</button>
            </form>
        </div>
    )
}
export default AddProjectForm