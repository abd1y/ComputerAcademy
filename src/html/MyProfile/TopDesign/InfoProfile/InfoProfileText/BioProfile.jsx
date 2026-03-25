import React from 'react'
import { useTranslation } from 'react-i18next'
export default function BioProfile({Bio}) {
    const {t}=useTranslation()
  return (
    <div className='BioProfile' style={{display: Bio && Bio.length > 0?"block":"none" }}>
        <div className="NameBio"><p className='BioName' style={{ whiteSpace: 'pre-wrap' }}>{t("BIO")}</p></div>
    <div className='Line'></div>
     <p style={{ whiteSpace: 'pre-wrap' }}>{Bio}</p>
    </div>
  )
  
}
