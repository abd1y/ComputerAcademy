import React from 'react'
import InfoOwner from './InfoOwner'
import InfoDr from './InfoDr'
import ImagLogo from './ImagLogo'
import { Link } from 'react-router-dom'

export default function Group({group_name,owner,Level,Group_code}) {
  const GroupCode=Group_code.replace("#","")
  return (

    <div className='Group'>
      <Link to={`/Section-Group/${GroupCode}`}>
      <ImagLogo />
      <InfoOwner group_name={group_name} />
      <InfoDr owner={owner} Level={Level} />
      </Link>
    </div>


  )
}
