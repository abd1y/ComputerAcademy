import React from 'react'
import images from '../../../../assets/images.png'
import API from '../../../Axios'
export default function ImagProfile({IMGProfile}) {
  const image=()=>{
    if(IMGProfile?.Profile_image){
      return `${API.defaults.baseURL}${IMGProfile?.Profile_image }`
    }else{
      return  images
    }
  }
  return (
    <div className='ImagProfile'>
      <img src={image()}/>
    </div>
  )
}
