import React from 'react'

export default function NameUser({Name,verified}) {
  return (
   <div className='NameUser'>
        <p>
           <samp className='Verified'>
            {
              verified?(<i class="ri-verified-badge-fill"></i>):
              <p className='ISNotVerified'></p>
            }
           </samp> {Name}
             
             </p>
      </div>
  )
}
