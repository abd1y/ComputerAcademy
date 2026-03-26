import React from 'react'
import Defult from '../../../assets/images.png'
import { Link } from 'react-router-dom'
const ProfileAdmin = ({item}) => {
  return (
    <Link to={`/Profile/${item.id}`}>
   
    <div className=' Profile-admin' key={item.id}>
        
                 <div className='Profile-logo'>
        <img src={`https://abdullih123.pythonanywhere.com/${item.Profile_image}`} />
      </div>
      <div className="Name-member">
        <p>{item.Name}</p>
      </div>
           

  
    </div>
     </Link>
  )
}

export default ProfileAdmin
