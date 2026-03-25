import React from 'react'
import PostCardGroup from './PostCardGroup'
import { useTranslation } from 'react-i18next'
export default function PostHomeGroups({deletehandlerPost,data_Post,CanComment}) {
  const {t}=useTranslation()
  return (
    <>
    {
     ! data_Post.length >0 ?
      (<p className='empty-post-group'>{t("No posts have been published.")}</p>):
    (
   data_Post.map((data)=>(
         <PostCardGroup CanComment={CanComment} deletehandlerPost={deletehandlerPost} key={data.post_id} data={data}/>
      ))
    )
   
    }
     
    
    </>
  )
}
