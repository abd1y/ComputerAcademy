import React from 'react'
import { useTranslation } from 'react-i18next'
export default function FrontSelectLevel({ClickLevel,selectLevel}) {
   const {t,i18n}=useTranslation()
  return (
   <div onClick={ClickLevel} className='FrontSelectLevel' dir={i18n.language==="en"?"ltr":"rtl"} >
        <h1>{t('Select Level')}</h1>
        {
            selectLevel?(<i class="ri-arrow-drop-up-fill"></i>)
        :(<i class="ri-arrow-drop-down-fill"></i>)
        }
      </div>
  )
}
