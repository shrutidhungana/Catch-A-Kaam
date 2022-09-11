import React from "react";
import { Inputs, Labels, Label, Input } from "./InputFieldStyle";

const InputField = (props) => {
  const { type, placeholder, name, label } = props;
  return (
    <Inputs>
      <Labels>
        <Label htmlFor={name}>{label}</Label>
      </Labels>
      <Input type={type} placeholder={placeholder} name={name} />
    </Inputs>
  );
};

export default InputField;
