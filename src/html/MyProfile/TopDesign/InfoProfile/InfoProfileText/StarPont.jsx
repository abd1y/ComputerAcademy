import React from 'react'
import {useTranslation} from 'react-i18next'
export default function StarPont({StarPont}) {
      const {t,i18n}=useTranslation()
  return (
    <div title={t("Total points contributed by a user through uploading Document")} className='StarPont' dir={i18n.language==='en'?"ltr":"ltr"}>
      <i class="ri-user-star-fill"></i>  <h4>{StarPont}</h4>
    </div>
  )
}
