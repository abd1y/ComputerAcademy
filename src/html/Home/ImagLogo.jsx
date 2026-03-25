import React from 'react'
import LogoGrop from '../../assets/LogoGroup.jpg'
export default function ImagLogo() {
  return (
<div className='imagLogo' >
        <img src={LogoGrop} loading='lazy'/>
      </div>
  )
}
