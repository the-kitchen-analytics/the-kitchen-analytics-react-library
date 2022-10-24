import React from 'react'
import { Form } from 'semantic-ui-react'
import { buildDropdownOptions } from '../../utils/dropdown'
import procedureTypesJson from '../../data/procedure-types.json'

const procedureTypeOptions = buildDropdownOptions(
  procedureTypesJson,
  ({ id }) => id,
  ({ displayName }) => displayName,
  ({ name }) => name
)

const ProcedureTypeSelect = ({ value, options, handleChange }) => (
  <Form.Select
    required
    label='Тип процедуры'
    placeholder='Нажмите, чтобы выбрать'
    fluid
    selection
    value={value}
    onChange={handleChange}
    options={options || procedureTypeOptions}
  />
)

export default ProcedureTypeSelect
