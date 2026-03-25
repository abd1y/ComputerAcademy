import React from 'react'
import { useTranslation } from 'react-i18next'
export default function TitleDocementPost() {
    const {t}=useTranslation()
  return (
    <div className='TitleDocementPost'>
   
           <h1 className='TitleDocementPosth1'>{t("The Docement published by the user")}</h1>
           </div>
  )
}
