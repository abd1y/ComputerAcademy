import React from 'react'
import '../../../css/ResetAndForgetPassword/ResetPassword.css'
import TitleReset from './TitleReset'
import InputAndErorrReset from './InputAndErorrReset'
import { useTranslation } from 'react-i18next'
export default function RessetPassword() {
        const {i18n}=useTranslation()
  return (
    <div className='RessetPassword' dir={i18n.language==="en"?"ltr":"rtl"}>
      <TitleReset/>
      <InputAndErorrReset/>
    </div>
  )
}
