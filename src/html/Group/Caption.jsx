import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Caption() {
   const {t}=useTranslation()
  return (
       <div className='Caption'>
        <i className="ri-group-fill" id='fontCaption'></i>
        <h2 id='fontCaptionH2'> {t('Studying becomes easier when')} <br/>{t("it’s done in a group.")}</h2>
        <p id='fontCaptionP'> {t('join the group or add you group')}</p>
    </div>
  )
}
