import React from 'react'
import EditForm from './EditForm/EditForm'
import {Heading, Div }from './EditProjectStyle'

const EditProject = () => {
  return (
      <div>
          <Heading>Do you want to make some changes in your requirements?</Heading>
          <Div>
              <EditForm />
              </Div>
      </div>
  )
}

export default EditProject