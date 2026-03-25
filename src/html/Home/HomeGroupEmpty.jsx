import React from 'react'
import { useTranslation } from 'react-i18next'
export default function HomeGroupEmpty (show) {
  const{t}=useTranslation()
  return (
    <div className='GroupEmpty' style={{display:show?"flex":"none"}}>
   <i class="ri-inbox-2-fill"></i>
      <h1>{t(' you dont have any Groups!')}</h1>
      <h2> {t('if you want join the Groups Go to')} <br/> {t('Group Section')} </h2>
      
    </div>
  )
}
