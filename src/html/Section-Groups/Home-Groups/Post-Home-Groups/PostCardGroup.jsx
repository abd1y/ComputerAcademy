import React from 'react'
import InfoPostProfile from './InfoPostProfile'
import IteminformationPost from './IteminformationPost'
import LikeAndComment from './LikeAndComment'
import CommentItem from './Coment Item/CommentItem'
import { useState } from 'react'
export default function PostCardGroup({deletehandlerPost,data,CanComment}) {
const [clickComent,setclickcoment]=useState(false)
const [comments,setcomments]=useState(data.comment || [])
const handlerclickComent=()=>{
setclickcoment(!clickComent)
}
  return (
    <div className='Post-Card-Group'>
<InfoPostProfile deletehandlerPost={deletehandlerPost} data={data}/>
<p className='Title-Post' style={{ whiteSpace: "pre-line" }}>{data?.title}</p>
<IteminformationPost data={data}/>
<LikeAndComment post_id={data.post_id} is_liked={data.is_liked} Like={data.Like} Totle_comment={comments} clickComent={clickComent} handlerclickComent={handlerclickComent}/>
<CommentItem CanComment={CanComment} post_id={data.post_id} comment={comments} setcomments={setcomments}  clickComent={clickComent} />
      </div>
    
  )
}
