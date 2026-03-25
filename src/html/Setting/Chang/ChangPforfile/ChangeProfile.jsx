import React from 'react'
import ChangName from './ChangName'
import ChangImag from './ChangImag'
import ChangeBio from './ChangeBio'
export default function ChangeProfile({name,setname,Imagprofile,setImagprofile,Bio,setBio}) {

  return (
    <div className='ChangeProfile'>
      <ChangImag Imagprofile={Imagprofile} setImagprofile={setImagprofile}/>
  <ChangName name={name} setname={setname}/>
<ChangeBio Bio={Bio} setBio={setBio}/>
    </div>
  )
}
