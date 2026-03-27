import React from 'react'
import { useTranslation } from 'react-i18next'
export default function BioProfile({Bio}) {
    const {t,i18n}=useTranslation()
  return (
    <div className='BioProfile' style={{display: Bio && Bio.length > 0?"flex":"none",  textAlign:i18n.language==='en'?"left":"right"}}>
        <div className="NameBio"><p className='BioName' >{t("BIO")}</p></div>
    <div className='Line'></div>
     <p style={{ whiteSpace: 'pre-wrap' }}>{Bio}</p>
    </div>
  )
  
}
