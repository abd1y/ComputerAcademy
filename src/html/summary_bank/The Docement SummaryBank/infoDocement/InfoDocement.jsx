import React from 'react'
import NameUser from './NameUser'
import Categre from './Categre'
export default function InfoDocement({Name,verified,Level,Course,Departments,NameDocement}) {
  return (
    <div className='InfoDocement'>
     



     
      <div className='NameDoce'>
        <h1>{NameDocement}</h1>
      </div>
      <NameUser Name={Name} verified={verified} />
     <Categre verified={verified} Level={Level} Course={Course} Departments={Departments} />
</div>
  

  )
}
