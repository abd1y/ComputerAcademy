import {useState} from 'react'
import { useTranslation } from 'react-i18next'
import API from '../../../Axios'
import { useParams } from 'react-router-dom'
export default function BtmEditAndDeletPostGroup({deletehandlerPost,data}) {
  const [List,setList]=useState(false)
  const clickList=()=>{
    setList(!List)
  }
  const {Group_code}=useParams()
  const Token=JSON.parse(localStorage.getItem('Token'))
  console.log("code",Token)
const Deletehandler=()=>{
  API.delete(`Groups/delete_post/${data.post_id}/?Group_code=%23${Group_code}`,{
    headers:{
      Authorization:`Token ${Token}`
    }
  })
.then(()=>{
  deletehandlerPost(data.post_id)
})
  .catch(err=>{
    alert("erorr")
  })
}
    const {t}=useTranslation()
    const data_save=JSON.parse(localStorage.getItem('data'))
    const id=data_save.id
  return (
    <div className='Btm-Edit-And-Delet-Post-Group' style={{display:data.user_id==id?"flex":"none"}} >
  <div className='BtmTolls' onClick={clickList}>
    <i class="ri-equalizer-line"></i>
  </div>
          <ul className='Tolls-Btm-post-Group' onClick={Deletehandler}  style={{display:List?"block":"none"}}>
    <li>{t("Delete")}</li>
        </ul>
    </div>
  )
}
