import React from 'react'
import './Tricks.css'
import { removeTrick } from '../../ApiCalls'

function Tricks({tricks}) {

    const allTricks = tricks.map(trick => {
        return (
            <div className='trick-box' id={trick.id}>
                <button className='remove-trick' onClick={() => {removeTrick(trick) }}>&#10005;</button>
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