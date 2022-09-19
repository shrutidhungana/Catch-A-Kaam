import React from 'react'
import AddProjectForm from './AddProjectForm/AddProjectForm'
import { Project, Heading } from './AddProjectStyle'


const AddProject = () => {
  return (
   
    <Project>
      <Heading>Add Project of Your Choice:</Heading>
     <AddProjectForm />
      </Project>
      
  )
}

export default AddProject