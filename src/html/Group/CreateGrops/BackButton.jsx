import React from 'react'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
export default function BackButton() {
    const {i18n}=useTranslation()
  return (
    <div className='BackButton' dir={i18n.language==="en"?"rtl":"ltr"}>
        
        <Link to={'/'}>
        <div className='clickHome' >
            {
                i18n.language==="en"?
                (<i class="ri-arrow-go-forward-fill"></i>):
                (<i class="ri-arrow-go-back-line"></i>)
            }
      
        </div>
             </Link>
    </div>
  )
}
