import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Pdf({LinkVideo}) {
      const {t}=useTranslation()
  return (
    <div className='Pdf'>

       
        <div className='Item-Pdf' title={t('File PDF')}>
            <div  className='Item-left'>

            
            <div className='Icon-pdf'><i class="ri-file-pdf-2-fill"></i> 
            </div>
           
            <div className='Title-Pdf'><p>PDF Flie</p>  
            <a href={LinkVideo} download title={t('Show File')}> {t("Show Pdf")}</a>
            </div>
          
        </div>
          <div className='Rght-pdf' title={`${t('Click {Download pdf} to download file')} `} 
  >
                <i class="ri-error-warning-fill"></i>   
            </div>
        </div>

    </div>
  )
}
