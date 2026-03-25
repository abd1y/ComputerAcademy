import React from 'react'
import images from '../../../../../assets/images.png'
import { Link } from 'react-router-dom'

export default function UserComent({comment}) {
  const data_save=JSON.parse(localStorage.getItem("data"))
  const id=data_save.id
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

<p className='Delete-commit' style={{display:id===item_comment.user_id?"block":"none"}}>Delete</p>
</div>
</div>
))
      }
    </div>
      </>
  )
}
