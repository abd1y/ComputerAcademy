import React from 'react'
import { useTranslation } from 'react-i18next'
export default function ResultNotFind({isClick}) {
      const {t,i18n}=useTranslation()
  return (
    <div className='ResultNotFind' id='ResultNotFind' style={isClick?{display:"flex"}:{display:"none"}}>
      <i class="ri-error-warning-fill"></i>
      <p>{t("Group not found")}</p>
      <p>{t("Please check the group code")}</p>
      <p>{t("And try again.")}</p>
    </div>
  )
}
