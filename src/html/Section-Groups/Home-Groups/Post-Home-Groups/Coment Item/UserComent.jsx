import React from 'react'
import images from '../../../../../assets/images.png'
import { Link, useParams } from 'react-router-dom'
import API from '../../../../Axios'
export default function UserComent({comment,post_id,setcomments}) {
  const data_save=JSON.parse(localStorage.getItem("data"))
  const id=data_save.id
  const Token=JSON.parse(localStorage.getItem("Token"))
const {Group_code}=useParams()
  const deleteCommithandler=(id)=>{
    API.delete(`Groups/delete_comment/${id}/?Group_code=%23${Group_code}`,{
      headers:{
        Authorization:`Token ${Token}`
      }
    })
    .then(()=>{
setcomments(prv=>prv.filter(commit=>commit.Comment_id !== id))
    })
  }
  return (
    <>
  
    <div className='User-Comment'>
      {
comment.map((item_comment)=>(
        <div className='item-coment-for-each-user'key={item_comment.Comment_id}>

        
<div className='Profile-User-Comment'>
<Link to={`/Profile/${item_comment.user_id}`}>
    <img className='Imag-profile-comment' src={item_comment.Profile_image}  />
</Link>
</div>
<div className='item-coment-for-user'>
  <Link to={`/Profile/${item_comment.user_id}`}>
<h3>{item_comment.member_name}</h3>
  </Link>
<p> {item_comment.content}</p>

<p className='Delete-commit' onClick={()=>deleteCommithandler(item_comment.Comment_id)} style={{display:id===item_comment.user_id?"block":"none"}}>Delete</p>
</div>
</div>
))
      }
    </div>
      </>
  )
}
