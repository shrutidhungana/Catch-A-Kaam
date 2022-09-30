import React, { useContext } from 'react'
 import { Link } from 'react-router-dom'
import { AppContext } from '../../../Context/AppContext'
import { RiEditLine, RiDeleteBinLine } from 'react-icons/ri'
import {IoIosAdd} from 'react-icons/io'

const ProjectList = () => {
    const {projects, removeProject} = useContext(AppContext)
  return (
      <div>
          {projects.length > 0 ? (
              <div>
                  {projects.map((project) => (
                      <div key={project.id}>
                       
                          <p>  Project Name: {project.projectName}</p>
                         
                          <p> Date Posted:{project.datePosted}</p>
                          
                          <p>Address:{project.address}</p>
                          <p>Description:{project.description}</p>
                          <p>Features:{project.features}</p>
                          <p>Technologies to be used(Tech Stack):{project.techStack}</p>
                          <p>Date Completed:{project.dateCompleted}</p>
                          <p>Amount:{project.amount}</p>
                          <div>
                              <Link to={`/edit/${project.id}`}>
                                  <RiEditLine />
                              </Link>
                              <button onClick={() => removeProject(project.id)}>
                                  <RiDeleteBinLine />
                              </button>
                          </div>
                          
                      </div>
                   
                  ))}
              </div>
          ) : (<div>
                  <h1>No Projects</h1>
                  <div>
                      <Link to="/addproject">
                          <IoIosAdd />
                          Add Project</Link>
                      </div>
          </div>)}
           
        
          </div>
  )
}

export default ProjectList