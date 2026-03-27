import React from 'react'
import { useState } from 'react'
import Password from './Password'
import { useTranslation } from 'react-i18next';
export default function ChangePassword({setPassword,setChangePassword,setConfirmPassword}) {
const {t,i18n}=useTranslation()
  return (
      <div className='ChangPassword Changs' dir={i18n.language==='en'?"ltr":"rtl"}>
     
        <Password setPassword={setPassword}/>
       <div className='ChanPass'>
       
   <h4 >{t('Change Password:')}</h4>
      <input 
        style={{textAlign:i18n.language==="en"?"left":"right"}}
      type="text"
      onChange={e=>setChangePassword(e.target.value)}
       />
       </div>
       <div className='ChanPass'>
       
        <h4 > {t('Confirm Password: ')} </h4>
      <input 
       style={{textAlign:i18n.language==="en"?"left":"right"}}
      type="text"
      onChange={e=>setConfirmPassword(e.target.value)}
       />
       </div>
      </div>
  )
}