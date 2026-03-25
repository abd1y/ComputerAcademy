import React from 'react'
import { useTranslation } from 'react-i18next'
export default function MsgError() {
  const{t}=useTranslation()
    const refclick=()=>{
        window.location.reload()
    }
  return (
  <div className='errorHome'>
    <div className='errorHomeItam'>
    <i class="ri-calendar-close-fill ErrorItamMesLogo"></i>
      <h1>{t('Somthing Is Wrong!')}  <br/> {t('Palese Restar The Page')}</h1>
    <button  onClick={refclick}> <i class="ri-restart-line"></i></button>
      </div>
    </div>
  )
}
