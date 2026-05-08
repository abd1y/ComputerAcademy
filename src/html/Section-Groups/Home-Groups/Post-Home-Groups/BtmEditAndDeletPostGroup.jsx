import {useState} from 'react'
import API from '../../../Axios'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
export default function BtmEditAndDeletPostGroup({deletehandlerPost,data}) {
       const {t}=useTranslation()
  const [List,setList]=useState(false)
  const [loding,setLoding]=useState(false)
  const clickList=()=>{
    setList(!List)
  }
  const {Group_code}=useParams()
  const Token=JSON.parse(localStorage.getItem('Token'))
  console.log("code",Token)
const Deletehandler=()=>{
  setLoding(true)
  API.delete(`Groups/delete_post/${data.post_id}/?Group_code=%23${Group_code}`,{
    headers:{
      Authorization:`Token ${Token}`
    }
  })
.then(()=>{
  deletehandlerPost(data.post_id)
  setLoding(false)
})
  .catch(err=>{
   setLoding(false)
  })
}

    const data_save=JSON.parse(localStorage.getItem('data'))
    const id=data_save.id
  return (
    <div className='Btm-Edit-And-Delet-Post-Group' style={{display:data.user_id==id?"flex":"none"}} >
  <div className='BtmTolls' onClick={clickList}>
    <i class="ri-equalizer-line"></i>
  </div>
          <ul className='Tolls-Btm-post-Group' onClick={Deletehandler}  style={{display:List?"block":"none"}}>
{
  loding?(
    <div className='contener-loder-delete'>
      <p>{t("Loding to delete")}</p>
    
  <div class="loaderDelete"></div></div>):(<li>{t("Delete")}</li>)
}

    
        </ul>
    </div>
  )
}
