import React from 'react'
import InformationUserPost from './InformationUserPost'
import BtmEditAndDeletPostGroup from './BtmEditAndDeletPostGroup'
export default function InfoPostProfile({deletehandlerPost,data}) {
  return (
    <div className='InfoPostProfile'>
      <InformationUserPost data={data} />
     <BtmEditAndDeletPostGroup deletehandlerPost={deletehandlerPost} data={data}/>
    </div>
  )
}
