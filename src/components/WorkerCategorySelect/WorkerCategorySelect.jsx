import React from 'react'
import { Form } from 'semantic-ui-react'
import { buildDropdownOptions } from '../../utils/dropdown'
import workerCategoriesJson from '../../data/worker-categories.json'

const workerCategoryOptions = buildDropdownOptions(
  workerCategoriesJson,
  ({ name }) => name,
  ({ displayName }) => displayName,
  ({ name }) => name
)

const WorkerCategorySelect = ({ value, options, handleChange }) => (
  <Form.Select
    required
    label='Квалификация мастера'
    placeholder='Нажмите, чтобы выбрать'
    fluid
    selection
    value={value}
    onChange={handleChange}
    options={options || workerCategoryOptions}
  />
)

export default WorkerCategorySelect
