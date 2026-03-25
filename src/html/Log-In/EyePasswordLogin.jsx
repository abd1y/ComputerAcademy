import React, { use } from 'react'
import { useTranslation } from 'react-i18next'

export default function EyePasswordLogin({Clickeye,eyePassword}) {

        const {i18n}=useTranslation()
  return (
    <div className='EyePasswordLogin'  dir={i18n.language==="en"?"ltr":"rtl"} onClick={Clickeye}>
     {
      eyePassword? (<i class="ri-eye-line"></i>)
      :
      (<i class="ri-eye-close-line"></i>)
     
     }
     
      
    </div>
  )
}
