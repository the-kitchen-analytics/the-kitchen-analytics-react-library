import React from 'react'
import { Message } from 'semantic-ui-react'

const ErrorMessage = ({ header, message }) => (
  <Message
    error
    header={header || 'Произошла ошибка.'}
    content={
      message || 'Пожалуйста, проверьте введённые данные и повторите попытку.'
    }
  />
)

export default ErrorMessage
