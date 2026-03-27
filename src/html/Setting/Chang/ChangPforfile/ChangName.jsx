import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
export default function ChangName({name,setname}) {
  const {t,i18n}=useTranslation()

  return (
      <div className='ChangName Changs' dir={i18n.language==="en"?"ltr":"rtl"}>
        <h4> {t('Name')}:  </h4>
      <input 
      style={{textAlign:i18n.language==="en"?"left":"right"}}
      type="text"
       value={name}
       onChange={(e)=>setname(e.target.value)}
       />
      </div>
  )
}
