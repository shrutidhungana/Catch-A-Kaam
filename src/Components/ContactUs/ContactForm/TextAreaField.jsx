import React from 'react'
import {
  TextArea,
  TextAreas
} from './TextAreaStyle';

const TextAreaField = (props) => {
  const { handleChange, name, value, placeholder} = props;

  return (
    <TextAreas>
     
      <TextArea name={name}
        rows="5"
        onChange={handleChange}
        value={value}
        placeholder= {placeholder}
      ></TextArea>
      </TextAreas>
  )
}

export default TextAreaField