import React from 'react'
import TypeMedia from './TypeMedia/TypeMedia'
export default function IteminformationPost({data}) {
  return (
    <div className='Item-information-Post'>
<TypeMedia media={data?.media}/>
    </div>
  )
}
