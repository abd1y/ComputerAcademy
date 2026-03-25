import {useState} from 'react'
import { useTranslation } from 'react-i18next'
export default function EmailStatic({email}) {
  const {t,i18n}=useTranslation()

  return (
    <div className='Changs' dir={i18n.language==='en'?"ltr":'rtl'}>
            <h4 >{t('Email')}:</h4>
      <input  
      value={email}
      type="email"
      readOnly
       />
    </div>
  )
}
