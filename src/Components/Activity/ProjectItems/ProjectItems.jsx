import React from 'react'

const ProjectItems = (props) => {
    const { projects } = props;
    return (
        <div >
            {projects.map((project) => (
                <div key={project.amount}>
                    Project Name:
                    <p>{project.projectName}</p>
                    Date Posted:
                    <p>{project.datePosted}</p>
                    Address:
                    <p>{project.address}</p>
                    Description:
                    <p>{project.description}</p>
                    Features:
                    <p>{project.features}</p>
                    Technology:
                    <p>{project.technology}</p>
                    Date Completed:
                    <p>{project.dateCompleted}</p>
                    Amount:
                    <p>{project.amount }</p>
                    
                </div>
          ))}
            </div>
  )
}

export default ProjectItems