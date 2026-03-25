import React from 'react'

export default function Steps({step}) {
  return (
    <div className='Steps'>
        <ul className='itemSteps'>

<li>
<div className={`
circleSteps 
  ${step===1?"Cheack":""}
  `}>1</div>
</li>

<li>
<div className={`
  circleSteps 
  ${step===2?"Cheack":""}
  `}>2</div>
</li>

<li>
<div className={`circleSteps
${step===3?"Cheack":""}

 
  `}>3</div>
</li>
        </ul>
    </div>
  )
}
