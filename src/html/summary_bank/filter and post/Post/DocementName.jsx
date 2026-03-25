import React from 'react'
import { useTranslation } from 'react-i18next'
export default function DocementName({setfile_name,file_name}) {
    const{t,i18n}=useTranslation()
  return (
    <div className='DocementName' dir={i18n.language==='en'?'ltr':"rtl"}>
      <h1>{t('Name Docement')}: </h1>
      <input type='text' required value={file_name} onChange={e=>setfile_name(e.target.value)}/>
    </div>
  )
}
