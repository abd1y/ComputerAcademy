import React from 'react'
import '../../css/LogInAndRegester/Regester.css'
import LogoSingUp from './LogoSingUp'
import InputSingUp from './InputSingUp'
import { useTranslation } from 'react-i18next'
export default function SingUp() {
     const {i18n}=useTranslation()
  return (
    <div className='SingUp' dir={i18n.language==="en"?"ltr":"rtl"}>
           <div className='itemSingup'>
      <LogoSingUp/>
      <InputSingUp/>
            
        </div>
    </div>
  )
}
