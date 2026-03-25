import {useState} from 'react'
import TitleStepTwo from './TitleStepTwo'
import InputStep2 from './InputStep2'
import { useTranslation } from 'react-i18next'
import API from '../../../Axios'
export default function StepTwo({increment,step,Decrement}) {
const {t}=useTranslation()

const [code,setcode]=useState("")
const [erorr,seterorr]=useState(false)
const[Loding,setLoding]=useState(false)
const clickST2=()=>{
  seterorr(false)
  setLoding(true)
  API.post('auth/For-get-password_Step2/',{
    email:localStorage.getItem('email_forgetPassword'),
    code:code
  })
  .then(res=>{

increment()
  })
  .catch(err=>{
    setLoding(false)
seterorr(true)
  })
}
  return (
    <div className={`${step===2?"StepTwo":"StepTwoNotAct"}`}>
      <TitleStepTwo/>
      <InputStep2 
      clickST2={clickST2}
      code={code}
       setcode={setcode}
       Decrement={Decrement}

       />
      <div className='ErrorStep2' style={{display:erorr?"block":"none"}}>
        <i class="ri-error-warning-fill"> <p>{t('The code is wrong')}</p></i>
       
      </div>
       <div className='hourglass_wate hourglass_wate_s2' style={{display:Loding?"block":"none"}}>
 <div className='hourglass '>
        <i class="ri-hourglass-2-line "></i>
        </div>
      </div>
    </div>
  )
}
