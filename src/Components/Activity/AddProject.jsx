import React, {useState} from 'react'
import { Project, Heading } from './AddProjectStyle'
import ProjectForm from './Form/ProjectForm'
import ProjectItems from './ProjectItems/ProjectItems'
import { useNavigate } from 'react-router-dom'



const AddProject = (props) => {
  const [projects, updateProjects] = useState([])
  let navigate = useNavigate
  const addProject = (project) => {
    updateProjects([...projects, project])
   
  }
 
  return (
   
    <Project>
      <Heading>Add Project of Your Choice:</Heading>
      <ProjectForm
        addProject={addProject}
        
      />
      <ProjectItems projects={projects}
       
      />
      </Project>
      
  )
}

export default AddProject