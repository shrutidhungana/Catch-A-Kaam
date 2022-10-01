import React, { useContext } from 'react'
 import { Link } from 'react-router-dom'
import { AppContext } from '../../../Context/AppContext'
import { RiEditLine, RiDeleteBinLine } from 'react-icons/ri'
import { IoIosAdd } from 'react-icons/io'
import {  Project,List,Paragraph1, Button1, No,Box } from './ProjectListStyle'
import './ProjectList.css'


const ProjectList = () => {
    const {projects, removeProject} = useContext(AppContext)
  return (
      <div>
          {projects.length > 0 ? (
              <div>
                  {projects.map((project) => (
                      <div key={project.id}>
                          <Project>
                              <List>
                          <h2>  Project Name: {project.projectName}</h2>
                         
                          <h3> Date Posted:{project.datePosted}</h3>
                          
                          <h3>Address:{project.address}</h3>
                          <p>Description:{project.description}</p>
                          <p>Features:{project.features}</p>
                          <p>Technologies to be used(Tech Stack):{project.techStack}</p>
                          <h3>Date Completed:{project.dateCompleted}</h3>
                          <h3>Amount:{project.amount}</h3>
                          <div>
                              <Link to={`/edit/${project.id}`}>
                                  <RiEditLine className = "edit"/>
                              </Link>
                              <button onClick={() => removeProject(project.id)}>
                                  <RiDeleteBinLine className = "delete"/>
                              </button>
                          </div>
                          <div>
                              <Link to = "/addproject">Add New Projects</Link>
                                  </div>
                                  </List>
                              </Project>
                      </div>
                   
                  ))}
              </div>
          ) : (<No>
                  <Box>
                  <div>
                      <Paragraph1>It seems Like you don't have any available projects.</Paragraph1>
                      </div>
                 
                      <Button1>
                      <Link to="/addproject" className="button">
                          <IoIosAdd className = "add"/>
                              Add new Projects</Link>
                              </Button1>
                              </Box>
          </No>)}
           
        
          </div>
  )
}

export default ProjectList