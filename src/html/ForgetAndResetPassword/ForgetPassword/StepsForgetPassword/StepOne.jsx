import {useState} from 'react'
import { useTranslation } from 'react-i18next'
import API from '../../../Axios'
export default function StepOne({increment,step}) {
    const {t}=useTranslation()
    const [email,setemail]=useState("")
    const [erorr,seterorr]=useState(false)
    const[Loding,setLoding]=useState(false)
    const clickST1=()=>{
           setLoding(true)
            seterorr(false)
      API.post('auth/For-get-password_Step1/',{
email:email
      })
 
      .then(
        res=>{
          increment()
          seterorr(false)
          setLoding(false)
          localStorage.setItem('email_forgetPassword',email)
        }
      )
      .catch(err=>{
        seterorr(true)
        setLoding(false)
      }
      )
    }
  return (
    <div className={step==1 ? 'StepOne ' : 'StepOne StepOneNotActev'}>
<div  className='itemStepOne'>
      <h4> {t("Enter your email")}</h4>
      <input type='email'
       autoComplete='off'
       value={email}
       onChange={e=>setemail(e.target.value)}
       />
      <button  onClick={clickST1}>{t("Continue")}</button>
            <div className='ErrorStep1' style={{display:erorr?"block":"none"}}>
        <i class="ri-error-warning-fill"  > <p>{t("No account found with this email")}</p></i>
       
      </div>

      <div className='hourglass_wate' style={{display:Loding ?"block":"none"}}>
 <div className='hourglass'>
        <i class="ri-hourglass-2-line "></i>
        </div>
      </div>
    </div>
    </div>
  )
}
