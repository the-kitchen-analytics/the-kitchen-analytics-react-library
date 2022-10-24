import React from 'react'

const Email = ({ to, content = to }) => <a href={`mailto:${to}`}>{content}</a>

export default Email
