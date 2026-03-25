import React from 'react'
import { useTranslation } from 'react-i18next'
export default function FrontSelectDepartment({clickSelectDepartment,isclick}) {
  const{t,i18n}=useTranslation()
  return (
   <div onClick={clickSelectDepartment} className='frontSelectDepartment' dir={i18n.language==='en'?"ltr":"rtl"}>
      <h1> {t('Select Department')} </h1>
      {
        isclick?(<i class="ri-arrow-drop-up-fill"></i>)
        :(<i class="ri-arrow-drop-down-fill"></i>)
      }
    </div >
  )
}
