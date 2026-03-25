import React from 'react'
import { useTranslation } from 'react-i18next'
export default function BottomOther({clickSendDocement,clock,APIPostDocement}) {
    const {t,i18n}=useTranslation()
  return (
    <div className='BottomOther'dir={i18n.language==='en'?"rtl":'ltr'}>
      <button 
      onClick={APIPostDocement}
      disabled={clock}
      >
       {clock?
       (<div className='clock' ><i class="ri-hourglass-2-line " ></i></div>)
       :
         t('post summry')
       }
        </button>
      
    </div>
  )
}
