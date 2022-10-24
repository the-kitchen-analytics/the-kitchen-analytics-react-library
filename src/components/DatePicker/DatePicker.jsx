import React from 'react'
import { Form } from 'semantic-ui-react'

const DatePicker = ({
  value,
  label,
  name,
  handleChange,
  required = false,
  isInvalid = false
}) => (
  <Form.Input
    label={label}
    name={name}
    type='date'
    value={value}
    required={required}
    error={isInvalid}
    onChange={handleChange}
  />
)

export default DatePicker
