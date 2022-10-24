import { useState, useEffect } from 'react'
import { mapFirebaseEntityToProcedure } from '../mappers/procedure'

const useProcedures = (streamProcedures) => {
  const [procedures, setProcedures] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = streamProcedures(
      (querySnapshot) => {
        setIsLoading(true)

        setProcedures(querySnapshot.docs.map(mapFirebaseEntityToProcedure))

        setIsLoading(false)
      },
      (error) => {
        setError(error)
        setIsLoading(false)
      }
    )
    return unsubscribe
  }, [])

  return [isLoading, procedures, error]
}

export default useProcedures
