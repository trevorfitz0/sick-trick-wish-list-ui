import React from 'react'
import './Tricks.css'

function Tricks({tricks}) {

    console.log(tricks)

    const allTricks = tricks.map(trick => {
        return (
            <div className='trick-box'>
                <h2 key='trick name'>{trick.name}</h2>
                <h2 key='trickobstacle'>{trick.obstacle}</h2>
                <h2 key='trick stance'>{trick.stance}</h2>
                <h5 key='tutorial video'>{trick.tutorial}</h5>
            </div>
        )
    })

  return (
    <div className='trickbox-area'>
        {allTricks}
    </div>
  )
}

export default Tricks