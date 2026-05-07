import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
export default function ChangeBio({Bio,setBio}) {
  const {i18n,t}=useTranslation()
  const handler = (e) => {

   setBio(e.target.value)

  };
  return (
    <div className='ChangeBio' dir={i18n.language==="en"?"ltr":"rtl"}>
        <h1>{t("BIO")} : </h1>
      <textarea
       style={{textAlign:i18n.language==="en"?"left":"right"}}
      value={Bio} onChange={handler} maxLength={250}></textarea>
      <p dir={i18n.language==="en"?"rtl":"ltr"}>{Bio ? Bio.length : 0}/250</p>
    </div>
  )
}
