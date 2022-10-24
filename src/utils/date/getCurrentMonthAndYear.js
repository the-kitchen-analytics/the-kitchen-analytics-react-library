import { getCurrentDate } from './getCurrentDate'

export default function getCurrentMonthAndYear() {
  const now = getCurrentDate()

  return Object.freeze({
    month: now.getMonth(),
    year: now.getFullYear()
  })
}
