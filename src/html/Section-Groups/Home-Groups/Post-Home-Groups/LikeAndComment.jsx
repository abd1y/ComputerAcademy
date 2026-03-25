import React from 'react'
import { useState } from 'react'

import API from '../../../Axios'
import { useParams } from 'react-router-dom'
export default function LikeAndComment({post_id,Like,handlerclickComent,clickComent,Totle_comment,is_liked ,comments}) {
    const [isClick,setisClick]=useState(is_liked)
    const [likeCount,setLikeCount]=useState(Like)

      const {Group_code}=useParams()
const token=JSON.parse(localStorage.getItem("Token"))
const toggelLike=()=>{
  API.post(`Groups/Toggle_Like/${post_id}/?Group_code=%23${Group_code}`,{},{
      headers:{
        Authorization:`Token ${token}`
      }
  })
  .then(res=>{

  })
  .catch(err=>{
    console.log(err.Respons)
  })
}
const incerment=()=>{
  setLikeCount(prv=>prv+1)
}
const decrement=()=>{
   setLikeCount(prv=>prv-1)
}
    const handlerClick=()=>{
    if (!isClick){
      incerment()
    }
    else{
      decrement()
    }
    setisClick(!isClick)
    toggelLike()
    }
  return (
    <div className={!clickComent?'Like-And-Comment':"Like-And-Comment Like-And-Comment-click"}>
     

<div className={!isClick?'Like-item':"Like-item Like-Click"} onClick={handlerClick} >
        <i class="ri-heart-fill">{likeCount} </i>
</div>

      <div className={!clickComent?'Comment-item':" Comment-item Comment-Click"} onClick={handlerclickComent}>
      <i class="ri-chat-3-fill"> {Totle_comment.length}</i>
      </div>

    </div>
  )
}
