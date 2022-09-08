import React from 'react'
import {
    Input,
    Inputs
    
} from './InputStyle';

const InputField = (props) => {
    const {handleChange, name, type, value, placeholder } = props;
  return (
      <Inputs>
          
          <Input type={type}
              onChange={handleChange}
              value={value}
              name={name}
              placeholder={placeholder} required /> 
      </Inputs>
  )
}

export default InputField