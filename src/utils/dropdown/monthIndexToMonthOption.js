import { ru } from '../../data/monthNames'

const monthIndexToMonthOption = (index) =>
  Object.freeze({
    key: index,
    text: ru[index],
    value: index
  })

export default monthIndexToMonthOption
