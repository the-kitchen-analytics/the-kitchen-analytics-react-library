import format from 'date-fns/format'
import { DEFAULT_DATE_TIME_FORMAT_PATTERN } from '../../config/constants'

const formatDateAndTime = (
  date,
  formatPattern = DEFAULT_DATE_TIME_FORMAT_PATTERN
) => {
  return format(date, formatPattern)
}

export default formatDateAndTime
