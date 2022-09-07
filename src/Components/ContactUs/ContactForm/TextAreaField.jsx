import React from 'react'

const TextAreaField = (props) => {
  const { handleChange, name, value, placeholder, label} = props;

  return (
    <div>
      <label htmlFor={name}>{label }</label>
      <textarea name={name}
        rows="4"
        onChange={handleChange}
        value={value}
        placeholder= {placeholder}
      ></textarea>
      </div>
  )
}

export default TextAreaField