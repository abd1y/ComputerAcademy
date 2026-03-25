import React from 'react'

export default function InfoDr({owner,Level}) {
  return (
        <div className='InfoDr'>
        <h4>{owner}</h4>
        <p>{Level}</p>
      </div>
  )
}
