import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
export default function Logout() {
  const nav=useNavigate()
  const Logouthandler=()=>{
    localStorage.removeItem("Token")
    nav('/Log-in',{ replace: true })
  }
     const {t}=useTranslation()
  return (
   
       <div className='Logout itemOters'>
      <button  onClick={Logouthandler} title={t("Logout")}><i class="ri-logout-box-r-line"></i></button>
    </div>
  
  )
}
