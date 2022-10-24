import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { DEFAULT_CONTROLS_SIZE } from '../../config/constants'

const YearSelect = ({ value, handleChange, options, disabled, size }) => (
  <Dropdown
    disabled={disabled || options.length <= 1}
    placeholder='Выберите год'
    button
    basic
    selection
    options={options}
    onChange={handleChange}
    value={value}
    className={size || DEFAULT_CONTROLS_SIZE}
    fluid
  />
)

export default YearSelect
