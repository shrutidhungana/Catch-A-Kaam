import React from "react";
import AddForm from "./AddForm/AddForm";
import { Heading, Div } from "./AddProjectStyle";

const AddProject = () => {
  return (
    <div>
      <Heading>Add Project of Your Choice:</Heading>
      <Div>
        <AddForm />
      </Div>
    </div>
  );
};

export default AddProject;
