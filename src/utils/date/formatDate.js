import format from 'date-fns/format'
import { DEFAULT_DATE_FORMAT_PATTERN } from '../../config/constants'

const formatDate = (date, formatPattern = DEFAULT_DATE_FORMAT_PATTERN) => {
  return format(date, formatPattern)
}

export default formatDate
