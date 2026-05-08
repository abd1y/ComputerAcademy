import {useState} from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import API from '../../../../Axios'
export default function AddComent({commenthandler,post_id}) {
  const {t}=useTranslation()
  const [addComent,setaddComment]=useState("")
  const [Loding,setloding]=useState(false)
   const {Group_code}=useParams()
  const token=JSON.parse(localStorage.getItem("Token"))
  const url=`Groups/add_comment/${post_id}/?Group_code=%23${Group_code}`
const addComenthandler=()=>{

    if (!addComent.trim()) return
    setloding(true)
API.post(url,{content:addComent},{
    headers:{
        Authorization:`Token ${token}`
      }
})
.then(res=>{
  if(commenthandler) commenthandler(res.data)
  
  setaddComment("")
  setloding(false)
  
})
.catch(
  err=>{
setloding(false)

  }
)

}

  return (
    <div className='Add-Coment'>
<input type='Text' value={addComent} onChange={v=>setaddComment(v.target.value)} autoCapitalize='off' placeholder={t('Add Comment')}/>
{
  Loding?
  (<div className='contener-loding-comment'>
    <div className='loding-comment'></div>
  </div>):
  (<div className='btm-comment-send' onClick={addComenthandler}>
    <i class="ri-send-plane-2-fill"></i>
</div>)
}

    </div>
  )
}
