import React from 'react'

function Tricks({tricks}) {

    const allTrickNames = tricks.map(trick => trick.name)

  return (
    <div>{allTrickNames}</div>
  )
}

export default Tricks