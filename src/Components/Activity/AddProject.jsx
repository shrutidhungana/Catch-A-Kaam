import React, {useState} from 'react'
import { Project, Heading } from './AddProjectStyle'
import ProjectForm from './Form/ProjectForm'
import ProjectItems from './ProjectItems/ProjectItems'




const AddProject = (props) => {
  const [projects, updateProjects] = useState([])
   
  const addProject = (project) => {
    updateProjects([...projects, project])
   
  }
 
  return (
   
    <Project>
      <Heading>Add Project of Your Choice:</Heading>
      <ProjectForm
        addProject={addProject}
        
      />
      <ProjectItems projects = {projects} />
      </Project>
      
  )
}

export default AddProject