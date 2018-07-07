import React from 'react'

export default ({ data: { title, body } }) => {
  return (
    <li>
      <header>{title}</header>
      <div>{body}</div>
    </li>
  )
}
