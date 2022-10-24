import { formatDate } from '../../utils/date'
import { getDocData } from '../../utils/firebase'

const mapProcedure = (firebaseProcedureEntry) => {
  return Object.freeze({
    name: firebaseProcedureEntry.name,
    type: firebaseProcedureEntry.type,
    price:
      firebaseProcedureEntry.price || firebaseProcedureEntry.priceBeforeTaxes,
    workerIncome:
      firebaseProcedureEntry.workerIncome ||
      firebaseProcedureEntry.priceAfterTaxes
  })
}

const mapFirebaseEntityToReceipt = (firebaseEntity) => {
  const entryData = getDocData(firebaseEntity)

  return {
    id: entryData.id,
    uid: entryData.uid,
    dateCreated: entryData.dateCreated.toDate(),
    date: entryData.date.toDate(),
    dateFormatted: formatDate(entryData.date.toDate()),
    procedures: entryData.procedures.map(mapProcedure)
  }
}

export default mapFirebaseEntityToReceipt
