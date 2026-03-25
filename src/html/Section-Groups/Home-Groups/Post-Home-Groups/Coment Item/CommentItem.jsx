import {useState,useEffect} from 'react'
import UserComent from './UserComent'
import AddComent from './AddComent'

export default function CommentItem({clickComent,comment,setcomments,post_id,CanComment}) {

const commenthandler=(newcomment)=>{
 
setcomments(prv=>[newcomment ,...prv])
}

  return (
    <div className={clickComent?"Comment-Item-Acteve":"Comment-Item-not-acctev"}>
<UserComent comment={comment}/>
{
  CanComment?( <AddComent post_id={post_id} commenthandler={commenthandler}/>):
  (<p className='Mesgcomment'>Only the admin can add  comment </p>)
}
       
    </div>
  )
}
