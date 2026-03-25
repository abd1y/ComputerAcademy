import React from 'react'
import { useTranslation } from 'react-i18next'
export default function TitleStepTwo() {
         const {t,i18n}=useTranslation()
  return (
    <div className='TitleSteptwo' dir={i18n.language==='en'?"ltr":"rtl"}>
        <div className='itemStepTwo'>
  <div className="TitleReset">
      <i class="ri-mail-unread-fill"></i>
      <p>
        {t("Enter the code sent to ")}: example@student.uotechnology.edu.iq
        <br /> <span>*</span>(
        {t("Check the Spam folder if you did not receive the code")})
      </p>
    </div>
        </div>
    </div>
  )
}
