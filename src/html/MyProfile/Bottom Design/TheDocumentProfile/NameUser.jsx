import React from 'react'

export default function NameUser({dataProfile}) {
  return (
    <div className='NameUser'>
      {
        dataProfile?.Verified?
        (<> <i class="ri-verified-badge-fill Verified"></i> <p>{dataProfile?.Name}</p></>):(<p>{dataProfile?.Name}</p>)
      }
     
    </div>
  )
}
