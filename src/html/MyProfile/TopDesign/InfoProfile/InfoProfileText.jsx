import React from 'react'
import NameProfile from './InfoProfileText/NameProfile'
import StarPont from './InfoProfileText/StarPont'
import BioProfile from './InfoProfileText/BioProfile'

export default function InfoProfileText({dataProfile}) {
  return (
    <div className='InfoProfileText'>
       <NameProfile Name={dataProfile?.Name} Verified={dataProfile?.Verified} />
        <StarPont  StarPont={dataProfile?.StarPont} />
       <BioProfile Bio={dataProfile?.Bio} />
    </div>
  )
}
