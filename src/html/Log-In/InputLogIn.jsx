import React from 'react'
import EyePasswordLogin from './EyePasswordLogin'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import API from '../Axios'
export default function InputLogIn() {
   const {t,i18n}=useTranslation()
const nav=useNavigate()
   const [email,setemail]=useState("")
   const [Password,setPassword]=useState("")
   const [msgError,setmsgError]=useState(false)
   const[click,setclick]=useState(false)
     const [eyePassword,seteyePassword]=useState(false)


    //  function
     const Clickeye=()=>{
       seteyePassword(!eyePassword)
     }

     const Loginhandler=()=>{
      setclick(true)
      API.post('auth/LongIn/',{
        email:email,
        password:Password
      })
      .then(res=>{
        setclick(false)
        setmsgError(false)
localStorage.setItem("data",JSON.stringify(res.data))
localStorage.setItem("Token",JSON.stringify(res.data.Token))
nav('/',{replace:true})
      }
      )
      .catch(err=>{
        setclick(false)
        setmsgError(true)
      })
     }
  return (
    <div className="InputLogIn">
      <h4> {t("Email")}:</h4>
      <input
        type="email"
        autoComplete="off"
        placeholder={t("University email only")}
        value={email}
        onChange={e=>setemail(e.target.value)}
      />

      <h4> {t("Password")}:</h4>
      <input
        type={eyePassword ? "text" : "Password"}
        autoComplete="off"
        minLength={8}
        placeholder={t("The minimum password length is 8")}
         value={Password}
        onChange={e=>setPassword(e.target.value)}
      />

      <EyePasswordLogin Clickeye={Clickeye} eyePassword={eyePassword} />
      <div
        className="ForgetPassword"
        dir={i18n.language === "en" ? "rtl" : "ltr"}
      >
        <Link to={"/Forget-password"}>
          <p> {t("Forget Password")} </p>
        </Link>
      </div>

      <button 
      className={click?"LogInBtm ClickSingUp":"LogInBtm"}
      onClick={Loginhandler}
      
      >
        
        
        {t("Log in")}</button>

      <Link to={"/sing-up"}>
        <h5>{t("Don’t have an account? Sign up")}</h5>
      </Link>
<div className='ErorrLogin'>
      <h1 style={{ display:msgError?"block": "none" }}> {t("Email OR Password is wrong")}</h1>
      </div>
    </div>
  );
}
