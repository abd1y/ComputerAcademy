import React from 'react'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
export default function ButtonBack() {
      const {i18n}=useTranslation()
  return (
    <div className='ButtinBackHome' dir={i18n.language==="en"?"ltr":"rtl"}>
        <Link to={'/'}>
        
      <div className='ClickButtonBack' >
        {
          i18n.language==="en"?
          (<i class="ri-arrow-go-back-line"></i>):
          (<i class="ri-arrow-go-forward-fill"></i>)
        }
        
      </div></Link>
    </div>
  )
}
