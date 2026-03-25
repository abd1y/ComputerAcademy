import React from 'react'
import PDFLogo from '../../../assets/LogoDocement2.png'
import { useTranslation } from 'react-i18next'
const UplodeFilePDF = ({fileName,File,delethandler}) => {
    const {t} =useTranslation()
  return (
    <div className='Uplode-File-PDF'>
   


<div className='Logo-and-info'>


     
      <div className="logo-imag-pdf">
        <img src={PDFLogo}/>
      </div>
      <div className='info-PDF'>
 <h4>{fileName}</h4>
 <a href={File} target='_blank'>

 <button> Show File</button>
 </a>

      </div>
     </div>
              <div className='Delet-item' >
    <i class="ri-delete-bin-line " onClick={delethandler} title={t('Delet the file')}></i>
 </div>
    </div>
  )
}

export default UplodeFilePDF
