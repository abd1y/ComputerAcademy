import React from 'react'
import {Link} from "react-router-dom"
import { useTranslation } from 'react-i18next'
export default function ButtonBack() {
  const {i18n}=useTranslation()
  return (
      <div className='ButtonBack' dir={i18n.language==="en"?"rtl":"ltr"}>
        <Link to="/">
       
      <i class={i18n.language==="en"?"ri-arrow-go-forward-fill":"ri-arrow-go-back-line"}></i>
    </Link>
    
    </div>
  )
}
