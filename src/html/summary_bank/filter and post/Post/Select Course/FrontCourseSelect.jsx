import React from 'react'
import { useTranslation } from 'react-i18next'
export default function FrontCourseSelect({ISopen,ClickCourse}) {
    const {t,i18n}=useTranslation()
  return (
    <div onClick={ClickCourse} className='FrontCourseSelect' dir={i18n.language==="en"?"ltr":"rtl"}>
      <h1>{t('Select Course')} </h1>
      {
        ISopen?
        (<i className="ri-arrow-drop-up-fill"></i>):
        (<i className="ri-arrow-drop-down-fill"></i>)
      }
      
    </div>
  )
}
