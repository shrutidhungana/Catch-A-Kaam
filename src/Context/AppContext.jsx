import React, { createContext, useReducer } from "react";
import AppReducer from "../Reducers/AppReducers";
import {
  ADD_PROJECT,
  EDIT_PROJECT,
  REMOVE_PROJECT,
} from "../Reducers/ReducerTypes";

const initialState = {
  projects: [],
};

export const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

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
    <AppContext.Provider
      value={{
        projects: state.projects,
        addProject,
        editProject,
        removeProject,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
