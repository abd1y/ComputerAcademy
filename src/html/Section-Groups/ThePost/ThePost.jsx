import {useState} from 'react'
import TitlePost from './TitlePost'
import UplodeFile from './UplodeFile'
import BtmPost from './BtmPost'
import { useTranslation } from 'react-i18next'
import API from '../../Axios'
import { useParams } from 'react-router-dom'
const ThePost = ({setactive}) => {

  const {Group_code}=useParams()
  const [title,settitle]=useState("")
  const [media,setmedia]=useState(null)
  const [Loding,setLoding]=useState(false)
  const [erorr,seterorr]=useState([])
const PostGroupsAPI=()=>{
  seterorr([])
  setLoding(true)
   const DataPost=new window.FormData()
   DataPost.append('title',title)
   DataPost.append('media',media)
const Token = JSON.parse(localStorage.getItem("Token"))
  API.post(`/Groups/Post_Group/?Group_code=%23${Group_code}`,DataPost,{
      headers:{
        Authorization:`Token ${Token}`
      }
  })
  .then(()=>{
    setLoding(false)
    setactive('Home')
  })
  .catch(err=>{
if(err.response && err.response.data){
  const data_erorr=err.response.data
  const MesgErorr=Object.values(data_erorr).flat()
  seterorr(MesgErorr)
}
    setLoding(false)
  })
}
    const {i18n}=useTranslation()
  return (
    <div className='The-Post'  dir={i18n.language==="en"?"ltr":"rtl"}>
      <TitlePost settitle={settitle} title={title}/>
      <UplodeFile  setmedia={setmedia}/>
      <BtmPost erorr={erorr}  Loding={Loding} PostGroupsAPI={PostGroupsAPI}/>
    </div>
  )
}

export default ThePost
