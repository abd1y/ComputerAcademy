import React, { useState } from 'react'

export default function Img({ LinkImage }) {
const [loding,setLoding]=useState(true)

  return (
    <div className='Type-Media-Imag' >
{
  loding && (
    <div className='conter-loder-image-post'>
      <div class="loader-Imag-post"></div> 
      </div>
  )
}
      <img
        src={LinkImage}
        loading="lazy"
    onLoad={()=>setLoding(false)}
    onError={()=>{setLoding(false)}}
      />
    </div>
  )
}