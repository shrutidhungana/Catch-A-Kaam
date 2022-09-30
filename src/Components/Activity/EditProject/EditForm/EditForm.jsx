import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../../../../Context/AppContext'

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
        amount:""
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
      <div>
      <form onSubmit={onSubmit}>
      <div>
          <label htmlFor="projectName">ProjectName:</label>
          <input type="text"
              required
              name = "projectName"
              value={selectedProject.projectName}
              onChange = {(e)=>handleOnChange("projectName",e.target.value)}
          />
      </div>
      <div>
          <label htmlFor="datePosted">Date Posted:</label>
          <input type="date"
          required
          name = "datePosted"
          value={selectedProject.datePosted}
              onChange = {(e)=>handleOnChange("datePosted",e.target.value)}
      />

      </div>
      <div>
          <label htmlFor="address">Address:</label>
          <input type="text"
          required
          name = "address"
          value={selectedProject.address}
              onChange = {(e)=>handleOnChange("address",e.target.value)}
          />
      </div>
      <div>
      <label htmlFor="description">Description:</label>
          <textarea type="text"
              rows= "6"
      required
      name = "description"
      value={selectedProject.description}
      onChange = {(e)=>handleOnChange("description",e.target.value)}
      />
      </div>
      <div>
      <label htmlFor="features">Features:</label>
      <textarea type="text"
              rows= "6"
      required
      name = "features"
      value={selectedProject.features}
              onChange = {(e)=>handleOnChange("features",e.target.value)}
          />
      </div>
      <div>
      <label htmlFor="techStack">Technology to be used(TechStack):</label>
      <textarea type="text"
              rows= "6"
      required
      name = "techStack"
      value={selectedProject.techStack}
      onChange = {(e)=>handleOnChange("techStack",e.target.value)}
          />
      </div>
      <div>
      <label htmlFor="dateCompleted">Expected date to complete:</label>
      <input type="date"
              
      required
      name = "dateCompleted"
      value={selectedProject.dateCompleted}
              onChange = {(e)=>handleOnChange("dateCompleted",e.target.value)}
          />
      </div>
      <div>
      <label htmlFor="amount">Amount willing to pay:</label>
      <input type="text"
              
      required
      name = "amount"
      value={selectedProject.amount}
              onChange = {(e)=>handleOnChange("amount",e.target.value)}
          />
      </div>
      <div>
          <button>Edit Project</button>
      </div>
      <Link to = "/">Cancel</Link>
  </form>
      </div>
  )
}

export default EditForm