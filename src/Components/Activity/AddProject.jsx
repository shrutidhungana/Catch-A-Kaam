import React, {useState, useEffect} from 'react'
import ProjectForm from './Form/ProjectForm'
import { Project, Heading } from './AddProjectStyle'


const AddProject = () => {


  return (
   
    <Project>
      <Heading>Add Project of Your Choice:</Heading>
      <ProjectForm />
      </Project>
      
  )
}

export default AddProject