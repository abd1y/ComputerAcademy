import React from 'react'
// import page
import InfoProfile from './InfoProfile/InfoProfileText/InfoProfile'
import ButtonBack from './ButtonBack'
// import tools
import {useTranslation} from 'react-i18next'
import '../../../css/MyProfile/MyProfile.css'

export default function TopDesign({dataProfile}) {
    const {i18n}=useTranslation()
  return (
    <div className='TopDesign' dir={i18n.language==="en"?"ltr":"rtl"}>
      <ButtonBack/>
      <InfoProfile dataProfile={dataProfile} />
      
    </div>
  )
}
