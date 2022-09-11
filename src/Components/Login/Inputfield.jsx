import React from "react";
import { Inputs, Label, Labels, Input } from "./InputfieldStyle";

const Inputfield = (props) => {
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

export default Inputfield;
