import React from 'react'
import { useTranslation } from 'react-i18next'
export default function MsgNoPostDoement() {
  const {t}=useTranslation()
  return (
    <div className='MsgNoPostDoement'>
    <i class="ri-calendar-close-fill"></i>  <p>{t("This user does not have any published document.")}</p>
    </div>
  )
}
