import React from 'react'

const SelectField = (props) => {
    const { label, handleChange, name } = props;
  return (
      <div>
          <label htmlFor={name}>{label}</label>
          <select onChange={handleChange}
              defaultValue="role"
              name = {name}
          >
          <option value="role" disabled>Choose Role</option>
          <option value="freeLancer">FreeLancer</option>
          <option value="client">Client</option>
         
              
          </select>
      </div>
  )
}

export default SelectField