import {useState} from 'react'
import { useTranslation } from 'react-i18next'
  import {useNavigate } from 'react-router-dom'
import API from '../../../Axios'
export default function StepThree({step}) {
  const  nav=useNavigate()
      const {t,i18n}=useTranslation()
      const [Loding,setLoding]=useState(false)
      const [error,seterorr]=useState(false)
      const [Password,setPassword]=useState("")
      const [Confirm_password,setConfirm_password]=useState("")
      const clickST3=()=>{
        setLoding(true)
        seterorr(false)
        API.put('auth/For-get-password_Step3/',{
            email:localStorage.getItem("email_forgetPassword"),
            password:Password,
            Confirm_password:Confirm_password
        })
        .then(res=>{
            localStorage.setItem("data",JSON.stringify(res.data))
            localStorage.removeItem("email")
            localStorage.removeItem("email_forgetPassword")
            nav('/',{replace:true})

        })
        .catch(err=>{
            setLoding(false)
            seterorr(true)
            console.log(err.response)
        })

      }
  return (
    <div className={`${step===3?'StepThree':"StepThreeNotAct"}`}dir={i18n.language==='en'?'ltr':"rtl"}>
        <div className='itemStepThree' >

       
        <h4 >
            {t("New Password")} :
        </h4>
        <input 
        type="Text"
        value={Password}
        onChange={e=>setPassword(e.target.value)}
        />
        <h4>
            {t("Confirm Password: ")}
        </h4>
         <input 
         type="text" 
         value={Confirm_password}
        onChange={e=>setConfirm_password(e.target.value)}
        />
        <div  className='BtmSteepthree' dir={i18n.language==='en'?'ltr':"ltr"}>

            <button onClick={clickST3}>{t("Save")}</button>
        </div>
       
    </div>
 <div className='ErrorStep2 ErrorStep3' style={{display:error?"block":"none"}}>
        <i class="ri-error-warning-fill"> <p>{t('Password confirmation does not match')}</p></i>
       
      </div>

      <div className='hourglass_wate hourglass_wate_s3' style={{display:Loding?"block":"none"}}>
 <div className='hourglass '>
        <i class="ri-hourglass-2-line "></i>
        </div>
        </div>
     </div>
  )
}
