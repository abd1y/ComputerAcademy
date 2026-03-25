import React from 'react'
import { useTranslation } from 'react-i18next'
export default function InfoResult({data}) {
  const {t,i18n}=useTranslation()
  return (
    <div className='InfoResult'>
      <h1>{data.group_name}</h1>
      <p>{data.owner}</p>
      <p>{t("Level")} {data.Level}</p>
    </div>
  )
}
