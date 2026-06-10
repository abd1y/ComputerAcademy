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
  <svg width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.17071 18C6.58254 16.8348 7.69378 16 9 16C10.3062 16 11.4175 16.8348 11.8293 18H22V20H11.8293C11.4175 21.1652 10.3062 22 9 22C7.69378 22 6.58254 21.1652 6.17071 20H2V18H6.17071ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H22V13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H2V11H12.1707ZM6.17071 4C6.58254 2.83481 7.69378 2 9 2C10.3062 2 11.4175 2.83481 11.8293 4H22V6H11.8293C11.4175 7.16519 10.3062 8 9 8C7.69378 8 6.58254 7.16519 6.17071 6H2V4H6.17071ZM9 6C9.55228 6 10 5.55228 10 5C10 4.44772 9.55228 4 9 4C8.44772 4 8 4.44772 8 5C8 5.55228 8.44772 6 9 6ZM15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13ZM9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z"></path></svg>
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
