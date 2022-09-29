import React, { useContext } from "react";
import { ProjectContext } from "../../../Context/ProjectContext";

const ProjectList = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <div>
      {projects.length > 0 ? (
              <div>
                  {projects.map((project) => (
                      <div
                          key = {project.id}
                      >
                          <p>{project.projectName}</p>
                          <p>{project.datePosted}</p>
                          <p>{project.address}</p>
                          <p>{project.description}</p>
                          <p>{project.features}</p>
                          <p>{project.techStack}</p>
                          <p>{project.dateCompleted}</p>
                          <p>
                             {project.amount}
                           
                          </p>
                      </div> 
                  ))}
              </div>
      ) : (
        <div>
          <p>No Projects Added</p>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
