import React from 'react'

const InputField = (props) => {
    const {handleChange, name, type, value, placeholder, label } = props;
  return (
      <div>
          <label htmlFor={name}>{label }</label>
          <input type={type}
              onChange={handleChange}
              value={value}
              name={name}
              placeholder={placeholder} required /> 
      </div>
  )
}

export default InputField