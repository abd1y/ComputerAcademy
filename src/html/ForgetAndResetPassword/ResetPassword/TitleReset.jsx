import React from 'react'
import { useTranslation } from 'react-i18next'
export default function TitleReset() {
    const {t}=useTranslation()
  return (
    <div className="TitleReset">
   
      <i class="ri-mail-unread-fill"></i>
      <p>
        {t("Enter the code sent to ")}: example@student.uotechnology.edu.iq
        <br /> <span>*</span>(
        {t("Check the Spam folder if you did not receive the code")})
      </p>
        
    </div>
  );
}
