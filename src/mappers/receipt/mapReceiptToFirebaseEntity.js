import { parseDateFromDropdown } from '../../utils/date'

const mapReceiptToFirebaseEntity = (receipt) => {
  const procedures = receipt.procedures.map((procedure) => ({
    name: procedure.name,
    type: procedure.type,
    price: procedure.price,
    workerIncome: procedure.workerIncome
  }))

  const data = Object.freeze({
    uid: receipt.uid,
    procedures: procedures,
    date: parseDateFromDropdown(receipt.date),
    dateCreated: new Date()
  })

  return data
}

export default mapReceiptToFirebaseEntity
