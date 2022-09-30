import { ADD_PROJECT, EDIT_PROJECT, REMOVE_PROJECT } from "./ReducerTypes";

const AppReducer = (state, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };

    case EDIT_PROJECT:
      const updatedProject = action.payload;

      const updatedProjects = state.projects.map((project) => {
        if (project.id === updatedProject.id) {
          return updatedProject;
        }
        return project;
      });

      return {
        ...state,
        projects: updatedProjects,
      };

    case REMOVE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default AppReducer;
