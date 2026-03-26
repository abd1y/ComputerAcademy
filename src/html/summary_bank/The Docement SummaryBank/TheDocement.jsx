import React from 'react'
import TheLogoDocement from './TheLogoDocement'
import InfoDocement from './infoDocement/InfoDocement'
import '../../../css/TheDocement.css'
import { useTranslation } from 'react-i18next'
export default function TheDocement({itam}) {
  const {t,i18n}=useTranslation()
  return (
    <a href={`https://abdullih123.pythonanywhere.com/${itam.File}`} download={itam.File_name} >

    
        <div  className='TheDocement' dir={i18n.language==="en"?"ltr":'rtl'}>
          
  <TheLogoDocement />
<InfoDocement NameDocement={itam.File_name} Name={itam.user.Name} verified={itam.user.Verified}  Level={itam.Level} Course={itam.Course} Departments={itam.Departments}/>
    </div>
    </a>
  
  
  )
}
