import {React,useRef,useState} from 'react'
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom'
export default function Password({setPassword}) {
const eyeRef=useRef(null)
const pasRef=useRef(null)
const {t,i18n}=useTranslation()
const [cheack,setCheack]=useState(true)
const showPassword=()=>{
    let eye=eyeRef.current
    let Password=pasRef.current
    
if (cheack){
   eye.className='ri-eye-line' 
   Password.type="text"

}else{
    eye.className='ri-eye-close-line'
    Password.type="password"
 
}
   setCheack(!cheack)
}

    return (
      <>
        <h4>{t("Password: ")}</h4>
        <input
          ref={pasRef}
          type={cheack ? "password" : "text"}
          onChange={(e) => setPassword(e.target.value)}
           style={{textAlign:i18n.language==="en"?"left":"right"}}
        />
        <div
          className="eyePassword"
          dir={i18n.language === "en" ? "rtl" : "ltr"}
        >
          <i
            ref={eyeRef}
            className="ri-eye-close-line"
            id="eyePassword"
            onClick={showPassword}
          ></i>
        </div>
        <Link to={"/Forget-password"}>
          <div className="ForgetPasswordSys">
            <p> {t("Forget Password")}</p>
          </div>
        </Link>
      </>
    );
}
