import React from 'react'
import { useTranslation } from 'react-i18next'
export default function BtnSaveandRestar({Summary_bankAPI}) {
  const {t}=useTranslation()
  return (
    <div className='btmapplyandreset'>
        <form>
  
        
        <button type='button' onClick={Summary_bankAPI} > {t('Apply')}</button>
</form>

    </div>
  )
}
