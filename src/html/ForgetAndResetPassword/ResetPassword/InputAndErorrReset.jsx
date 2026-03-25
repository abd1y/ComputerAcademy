import {useState} from 'react'
import { useTranslation } from 'react-i18next'
  import {useNavigate } from 'react-router-dom'
import API from '../../Axios'
export default function InputAndErorrReset() {
        const {t}=useTranslation()
const nav=useNavigate()
const [code,setCode]=useState("")
const [erorr,seterorr]=useState(false)
const [wate,iswate]=useState(false)
const [data,setdata]=useState([])
const email=localStorage.getItem('email')
const cheackCodehandler=()=>{
  iswate(true)
  API.post(`auth/Reset-password/?email=${email}`,{
   code:code
  }
  ).then(res=>{
    setdata(res.data)
    iswate(false)
    seterorr(false)
    localStorage.setItem("data",JSON.stringify(res.data))
    nav('/',{replace:true})
  }

  )
  .catch(err=>{

    iswate(true)
seterorr(true)
  }
  )
}

  return (
    <div className='InputAndErorrReset'>
      <div className='InputReset'>
<input type='text'
  autoComplete="off"
   maxLength={6}
    placeholder={t('Enter verification code here')}
    value={code}
    onChange={(e)=>setCode(e.target.value)}
    />
<button 
onClick={cheackCodehandler}
disabled={wate?true:false}

>{t("Send")}</button>
      </div>
      <div className='ErrorReset' style={{display:erorr?'flex':"none"}}>
        <i class="ri-error-warning-fill"> <p>{t('The code is wrong')}</p></i>
       
      </div>


      <div className='wait' style={{display:wate?"block":"none"}}>
        <div className='hourglass'>

        <i class="ri-hourglass-2-line"></i>
        </div>
        <p> Please wait</p>
      </div>
    </div>
  )
}
