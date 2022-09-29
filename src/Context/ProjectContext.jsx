import React, { createContext, useReducer } from "react";
import ProjectReducer from "../Reducer/ProjectReducer";
import {
  ADD_PROJECT,
  EDIT_PROJECT,
  REMOVE_PROJECT,
} from "../Reducer/ReducerTypes";

const initialState = {
  projects: [
    {
      id: "",
      projectName: "",
      datePosted: "",
      address: "",
      description: "",
      features: "",
      techStack: "",
      dateCompleted: "",
      amount: "",
    },
  ],
};

export const ProjectContext = createContext(initialState);
const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  const addProject = (project) => {
    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  const editProject = (project) => {
    dispatch({
      type: EDIT_PROJECT,
      payload: project,
    });
  };

  const removeProject = (id) => {
    dispatch({
      type: REMOVE_PROJECT,
      payload: id,
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        addProject,
        editProject,
        removeProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
