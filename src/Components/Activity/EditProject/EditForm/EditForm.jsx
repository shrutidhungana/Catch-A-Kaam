import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../../../Context/AppContext'
import { Add,Input,Inputs,Textarea,Button, Button1 } from './EditFormStyle';

import './EditForm.css'
const EditForm = () => {
    const [selectedProject, setSelectedProject] = useState({
        id: null,
        projectName: "",
        datePosted: "",
        address: "",
        description: "",
        features: "",
        techStack: "",
        dateCompleted: "",
        amount: ""
    })

    
    const { projects, editProject } = useContext(AppContext)
    let navigate = useNavigate()
    const { id } = useParams()
    
    useEffect(() => {
        const projectId = id
        const selectedProject = projects.find(
            (currentProjectTraversal) => currentProjectTraversal.id === parseInt(projectId)
        );
        setSelectedProject(selectedProject)
        
    }, [id, projects])


    const handleOnChange = (userKey, newValue) =>
    setSelectedProject({ ...selectedProject, [userKey]: newValue });

  if (!selectedProject || !selectedProject.id) {
      return (
          <div>
              Invalid Project ID.
          </div>
      );
  }

 
    const onSubmit = (e) => {
        e.preventDefault();
        editProject(selectedProject);
        navigate("/dashboard");
      };
    
  return (
      <Add>
      <form onSubmit={onSubmit}>
      <Inputs>
          <label htmlFor="projectName">ProjectName:</label>
          <Input type="text"
              required
              name = "projectName"
              value={selectedProject.projectName}
              onChange = {(e)=>handleOnChange("projectName",e.target.value)}
          />
      </Inputs>
      <Inputs>
          <label htmlFor="datePosted">Date Posted:</label>
          <Input type="date"
          required
          name = "datePosted"
          value={selectedProject.datePosted}
              onChange = {(e)=>handleOnChange("datePosted",e.target.value)}
      />

      </Inputs>
      <Inputs>
          <label htmlFor="address">Address:</label>
          <Input type="text"
          required
          name = "address"
          value={selectedProject.address}
              onChange = {(e)=>handleOnChange("address",e.target.value)}
          />
      </Inputs>
      <Inputs>
      <label htmlFor="description">Description:</label>
          <Textarea type="text"
              rows= "6"
      required
      name = "description"
      value={selectedProject.description}
      onChange = {(e)=>handleOnChange("description",e.target.value)}
      />
      </Inputs>
      <Inputs>
      <label htmlFor="features">Features required:</label>
      <Textarea type="text"
              rows= "6"
      required
      name = "features"
      value={selectedProject.features}
              onChange = {(e)=>handleOnChange("features",e.target.value)}
          />
      </Inputs>
      <Inputs>
      <label htmlFor="techStack">Technology to be used(TechStack):</label>
      <Textarea type="text"
              rows= "6"
      required
      name = "techStack"
      value={selectedProject.techStack}
      onChange = {(e)=>handleOnChange("techStack",e.target.value)}
          />
      </Inputs>
      <Inputs>
      <label htmlFor="dateCompleted">Expected date to complete:</label>
      <Input type="date"
              
      required
      name = "dateCompleted"
      value={selectedProject.dateCompleted}
              onChange = {(e)=>handleOnChange("dateCompleted",e.target.value)}
          />
      </Inputs>
      <Inputs>
      <label htmlFor="amount">Amount willing to pay:</label>
      <Input type="text"
              
      required
      name = "amount"
      value={selectedProject.amount}
      onChange = {(e)=>handleOnChange("amount",e.target.value)}
          />
      </Inputs>
      <div>
          <Button>Edit Project</Button>
              </div>
              <Button1>
                  <Link to="/dashboard" className = "lk">Cancel</Link>
                  </Button1>
  </form>
      </Add>
  )
}

export default EditForm