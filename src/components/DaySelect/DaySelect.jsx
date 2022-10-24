import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { DEFAULT_CONTROLS_SIZE } from '../../config/constants'

const DaySelect = ({ value, handleChange, disabled, size, options = [] }) => (
  <Dropdown
    disabled={disabled || options.length <= 1}
    placeholder='Выберите день'
    search
    selection
    options={options}
    onChange={handleChange}
    value={value}
    className={size || DEFAULT_CONTROLS_SIZE}
    fluid
  />
)

export default DaySelect
