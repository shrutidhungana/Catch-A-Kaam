import React, {useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { ProjectContext } from '../../../../Context/ProjectContext'

const AddForm = () => {
  let navigate = useNavigate()
  const {projects, addProject} = useContext(ProjectContext)
  const [values, setValues] = useState({
    projectName: "",
    datePosted: "",
    address: "",
    description: "",
    features: "",
    techStack: "",
    dateCompleted:""
   
 })
  const [amount, setAmount] = useState("");
 

  
  const onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amount);
    }
  }
   
  const handleChange = (e) => {
    setValues((values) => ({
      ...values,

      [e.target.name]: e.target.value
    }));
  };
    
  const handleSubmit = (e) => {
    e.perventDefault();
    const newProject = {
      id: projects.length + 1,
      ...values,
      amount
    }
   
    addProject(newProject);
    navigate("/dashboard")
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">ProjectName:</label>
       
        <input
          type="text"
          name="projectName"
            required
            value={values.projectName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="datePosted">Date Posted:</label>
          <input
            type="date"
            name = "datePosted"
            required
            value={values.datePosted}
            onChange = {handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input 
            type="text"
            name="address"
            required
            value={values.address}
            onChange={handleChange}
            
           
          />
        </div>
        <div>
          <label htmlFor="description">
            Description:
          </label>
          <textarea
          required
          rows="6"
            name="description"
            value={values.description}
            onChange = {handleChange}
        ></textarea>
        </div>
        <div>
          <label htmlFor="features">
            Features:
          </label>
          <textarea
          required
          rows="6"
            name="features"
            value={values.features}
            onChange = {handleChange}
        ></textarea>
        </div>
        <div>
          <label htmlFor="techStack">Technologies to be used(Tech Stack):</label>
          <textarea
            rows="6"
            required
            name="techStack"
            value={values.techStack}
            onChange={handleChange}
            
          ></textarea>
        </div>
        <div>
          <label htmlFor="dateCompleted">Expected date to complete:</label>
          <input
            name = "dateCompleted"
            type="date"
            required
            value={values.dateCompleted}
            onChange = {handleChange}
            
            
          />
        </div>
        <div>
          <label htmlFor="amount">Amount Willing to Pay</label>
          <input
            name="amount"
            type="text"
            value={amount}
            onChange={onAmountChange}
          />
        </div>
        <button>Add Project</button>
        <div>
          <Link to = "/dashboard">Cancel</Link>
        </div>
      </form>
    </div>
  )
}

export default AddForm