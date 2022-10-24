import { parse } from 'date-fns'
import { DEFAULT_DATE_FORMAT_PATTERN } from '../../config/constants'

const parseDate = (dateStr, formatPattern = DEFAULT_DATE_FORMAT_PATTERN) => {
  return parse(dateStr, formatPattern, new Date())
}

export default parseDate
