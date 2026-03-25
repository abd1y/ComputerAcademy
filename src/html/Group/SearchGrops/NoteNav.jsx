import React from 'react'
import { useTranslation } from 'react-i18next'
export default function NoteNav() {
    const {t,i18n}=useTranslation()
  return (
    <div className='NoteNav' dir={i18n.language==='en'?"ltr":"rtl"}>
      <p><span>* </span>{t("Enter only the group's code, not the group's name")}</p>
      <p><span>* </span>{t("Always start the search with")} <span>#</span> ( {t("for example:")} <span>#</span>123abc)</p>
      <p><span>* </span>{t("Without entering")} <span>#</span> {t(",no group will appear")}</p>
    </div>
  )
}
