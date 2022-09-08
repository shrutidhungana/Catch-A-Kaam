import React from 'react'
import {
    Select,
    Selects,
    Option
} from './SelectStyle';

const SelectField = (props) => {
    const {  handleChange, name } = props;
  return (
      <Selects>
         
          <Select onChange={handleChange}
              defaultValue="role"
              name = {name}
          >
          <Option value="role" disabled>Choose Role</Option>
          <Option value="freeLancer">FreeLancer</Option>
          <Option value="client">Client</Option>
         
              
          </Select>
      </Selects>
  )
}

export default SelectField