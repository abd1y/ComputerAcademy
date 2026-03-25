import React from 'react'
import NameUser from './NameUser'
import Categre from './Categre'
export default function InfoDocementProfile({dataProfile,data_summary}) {
  return (
    <div className='InfoDocementProfile'>
      
 

     
      <h1>{data_summary?.File_name}</h1>
     <NameUser dataProfile={dataProfile} />
     <Categre data_summary={data_summary} dataProfile={dataProfile}/> 
    
    </div>
  )
}
