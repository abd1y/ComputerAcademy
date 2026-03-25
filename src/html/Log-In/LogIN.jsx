import React from 'react'
import '../../css/LogInAndRegester/LogIN.css'
import LogInLogo from './LogInLogo'
import InputLogIn from './InputLogIn'

// Import tools
import { useTranslation } from 'react-i18next'
export default function LogIN() {
  const {i18n}=useTranslation()
  return (
    
    <div className='LoginCard' dir={i18n.language==="en"?"ltr":"rtl"}>
      <div className='itemLogin'>
<LogInLogo/>
<InputLogIn/>

      </div>
    </div>
    
  )
}
