import React from 'react'
import { useTranslation } from 'react-i18next';
export default function ErrMsg({Erorr}) {
  const {t}=useTranslation()
  return (
   
    <div className='Main-Erorr'>
{
Erorr.length >0 &&
Erorr.map((err)=>(

  <p className='ErorrPostdocement'><i class="ri-error-warning-fill"></i>{t(err)}</p>
))
}
    </div>
  )
}
