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
    <div
      className={
        !clickComent
          ? "Like-And-Comment"
          : "Like-And-Comment Like-And-Comment-click"
      }
    >
      <div
        className={!isClick ? "Like-item" : "Like-item Like-Click"}
        onClick={handlerClick}
      >
        <li className='content-item-Like-comment'> 
        <svg
        className='Icon-Like-Coment'
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path  d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
        </svg>
         {likeCount}
        </li>
      </div>

      <div
        className={
          !clickComent ? "Comment-item" : " Comment-item Comment-Click"
        }
        onClick={handlerclickComent}
      >
         <li className='content-item-Like-comment'>
          
          <svg className='Icon-Like-Coment' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.29117 20.8242L2 22L3.17581 16.7088C2.42544 15.3056 2 13.7025 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.2975 22 8.6944 21.5746 7.29117 20.8242Z"></path></svg>
           {Totle_comment.length}</li>
      </div>
    </div>
  );
}
