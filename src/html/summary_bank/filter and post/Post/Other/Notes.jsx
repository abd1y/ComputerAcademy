import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Notes() {
    const [t,i18n]=useTranslation()
  return (
    <div className='Notes' dir={i18n.language==='en'?'ltr':'rtl'}>
   

     <div className='NoteItem' > 
<p>
  <span>*</span>   {t('Make sure to enter all the information, as all fields are required.')} 
</p>
<p>
    <span>*</span> {t('Any summary submitted will be reviewed before approval.')} 
   
</p>
<p>
    <span>*</span> {t('For contact and inquiries, call support.')}  
</p>
<p>
  <span>*</span> {t('Any document published and approved will earn you contribution points')} 
   <span> {t(" (each published file = 3 contribution points)")}</span>
</p>
    </div> 
    <div className='contact'>
     
<a href='mailto:abduillh160@gmail.com' class="ri-mail-line"></a>
<a title={t('admin Nana')} href='https://t.me/MAKI20020' class="ri-telegram-line"></a>
<a title={t('admin Rossevelt')} href='https://t.me/Rossevelt_1' class="ri-telegram-fill"></a>
    </div>
    </div>
  )
}
