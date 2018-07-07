import React from 'react'

export default ({ data: { name, email } }) => {
  return <li>{`${name}: ${email}`}</li>
}
