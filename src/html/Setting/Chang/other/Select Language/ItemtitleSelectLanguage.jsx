import React from 'react'
import { useTranslation } from 'react-i18next';
export default function ItemtitleSelectLanguage({clickSlider,isOpne}) {
  const{t}=useTranslation()
      const {i18n}=useTranslation()
  return (
     <div className='ItemtitleSelectLanguage' dir={i18n.language==='en'?'ltr':'rtl'} onClick={clickSlider}>
            <h1>{t('Select Language')}</h1>
           {isOpne?(<i class="ri-arrow-drop-up-line"></i>):(<i class="ri-arrow-drop-down-line"></i>)} 
        </div>
  )
}
