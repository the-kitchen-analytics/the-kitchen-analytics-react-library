import React from 'react'
import { Table } from 'semantic-ui-react'

const NoTableContent = ({ colSpan, content }) => (
  <Table.Row>
    <Table.Cell colSpan={colSpan} icon='info circle' content={content} />
  </Table.Row>
)

export default NoTableContent
