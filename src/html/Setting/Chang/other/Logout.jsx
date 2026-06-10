import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
export default function Logout() {
  const nav=useNavigate()
  const Logouthandler=()=>{
    localStorage.removeItem("Token")
    localStorage.removeItem("data")
    localStorage.removeItem("email")
    nav('/Log-in',{ replace: true })
  }
     const {t}=useTranslation()
  return (
   
       <div className='Logout itemOters'>
      <button  onClick={Logouthandler} title={t("Logout")}><svg className='Icon-itemOther' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path></svg></button>
    </div>
  
  )
}
