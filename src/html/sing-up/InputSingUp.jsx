  import React from 'react'
  import EyePasswordLogin from '../Log-In/EyePasswordLogin'
  import { useState,useEffect } from 'react'
  import {Link,useNavigate } from 'react-router-dom'
  import { useTranslation } from 'react-i18next'
  import API from '../Axios'
  export default function InputSingUp() {
        const {t}=useTranslation()
        const nav=useNavigate()

        //  useState
          const [eyePassword,seteyePassword]=useState(false)
          const [data,setdata]=useState([])
          const [email,Setemail]=useState("")
          const [Name,SetName]=useState("")
          const [Password,SetPassword]=useState("")
          const [ErorrMsg,SetErorr]=useState("")
          const [isErorr,setisErorr]=useState(false)
          const [isclick,setisClick]=useState(false)

      //  Function
          const Clickeye=()=>{
        seteyePassword(!eyePassword)
      }
      const CheachEmailHandler=(e)=>{
        const v=e.target.value
        Setemail(v)

        if (v.startsWith('cs') && v.endsWith("@student.uotechnology.edu.iq") ||v.endsWith("@uotechnology.edu.iq") ){
          SetErorr("")
        }
      }

      const SendData=()=>{

        setisErorr(false)
            setisClick(true);
  API.post('auth/signup/',{
    first_name:Name,
    email:email,
    password:Password
  })
  .then(res=>{
    console.log(res.data)
    localStorage.setItem('email',email)
    setisClick(false)
    nav('/reset-Password',{ replace: true })
    // window.location.replace('/reset-Password')
    

  })
 
.catch(err => {
  setisErorr(true)
    setisClick(false);
        
    if (err.response && err.response.data) {
       const dataerorr=err.response.data.error || err.response.data
       const ErorrJosn=JSON.stringify(dataerorr)
       .replace(/[\[\]\{\} ."\\]/g,' ')
       .replace(/first_name/g,'Name')
       .replace(/This field may not be blank/g,'The field is required')
            .trim();
            const errorArr=ErorrJosn.split(',').map(item=>item.trim())
SetErorr(errorArr)
    } else {
        SetErorr("Network Error");
    }
});
      }


    return (
      <div className="InputSingUp">
        <h4>{t("Name")}:</h4>
        <input type="Text" 
        autoComplete="off"
        value={Name} 
        onChange={(e)=>SetName(e.target.value)}
         disabled={isclick?true:false}
        />
        
        
        
        <h4>{t("Email")}:</h4>
        <input
          type="email"
          autoComplete="off"
          placeholder={t("University email only")}
          value={email}
          onChange={CheachEmailHandler}
           disabled={isclick?true:false}
        />
      
      
        <h4>{t("Password")}:</h4>
        <input
          type={eyePassword ? "text" : "Password"}
          minLength={8}
          autoComplete="off"
          placeholder={t("The minimum password length is 8")}
          value={Password}
          onChange={(e)=>{SetPassword(e.target.value)}}
           disabled={isclick?true:false}
        />
        
        
        
        <EyePasswordLogin Clickeye={Clickeye} eyePassword={eyePassword} />


        <button className={isclick?"Singupbtm ClickSingUp":"Singupbtm"}
        title={isclick?'Please wait for verification':""} 
        onClick={SendData}
        disabled={isclick?true:false}
        
        >{t("Sing Up")}</button>


        <div className="SingUpother">
          <Link to={"/Log-in"}>
            <p className="gotoLogin">{t("Have an Account? Log In")}</p>
          </Link>
         
        </div>
{
  Array.isArray(ErorrMsg) && ErorrMsg.map((item, index) => {
    const cleanItem = item.replace(/\s+/g, ' ').trim();

    return (
      <p key={index} className='ErrorSingup' style={{ display: isErorr ? "block" : "none" }}>
        <span >* </span>
        {t(cleanItem)} 
      </p>
    );
  })
}
  

         
       
        
         
      </div>
    );
  }
