import React from 'react'
import {useTranslation} from 'react-i18next'
export default function NameProfile({Name,Verified}) {
      const {i18n}=useTranslation()
  return (
    <div className='NameProfile' dir={i18n.language==="en"?"ltr":"ltr"}>
      
{
 
 
  Verified?

  (<> <i class="ri-verified-badge-fill"></i> <h1>{Name}</h1></>):
  ( <h1>{Name}</h1>)
  
}

    </div>
  )
}
