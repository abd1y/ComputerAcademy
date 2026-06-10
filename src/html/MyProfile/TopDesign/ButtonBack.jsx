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
          (<svg className='Icon-Back' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.82843 6.99955L8.36396 9.53509L6.94975 10.9493L2 5.99955L6.94975 1.0498L8.36396 2.46402L5.82843 4.99955H13C17.4183 4.99955 21 8.58127 21 12.9996C21 17.4178 17.4183 20.9996 13 20.9996H4V18.9996H13C16.3137 18.9996 19 16.3133 19 12.9996C19 9.68584 16.3137 6.99955 13 6.99955H5.82843Z"></path></svg>):
         (<svg className='Icon-Back' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 7H11C7.68629 7 5 9.68629 5 13C5 16.3137 7.68629 19 11 19H20V21H11C6.58172 21 3 17.4183 3 13C3 8.58172 6.58172 5 11 5H16V1L22 6L16 11V7Z"></path></svg>)
        }
        
      </div></Link>
    </div>
  )
}
