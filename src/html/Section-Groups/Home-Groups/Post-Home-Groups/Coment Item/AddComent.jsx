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
    <svg width={23} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12.9999H9V10.9999H3V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V12.9999Z"></path></svg>
</div>)
}

    </div>
  )
}
