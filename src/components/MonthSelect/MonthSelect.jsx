import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { DEFAULT_CONTROLS_SIZE } from '../../config/constants'
import { getMonthOptions } from '../../utils/dropdown'

const MonthSelect = ({ value, handleChange, options, disabled, size }) => (
  <Dropdown
    disabled={disabled}
    placeholder='Выберите месяц'
    button
    basic
    selection
    options={options || getMonthOptions()}
    onChange={handleChange}
    value={value}
    className={size || DEFAULT_CONTROLS_SIZE}
    fluid
  />
)

export default MonthSelect
