import React from 'react'
import { useTranslation } from 'react-i18next'
export default function FrontCourseSelect({ISopen,ClickCourse}) {
    const {t,i18n}=useTranslation()
  return (
    <div onClick={ClickCourse} className='FrontCourseSelect' dir={i18n.language==="en"?"ltr":"rtl"}>
      <h1>{t('Select Course')} </h1>
      {
        ISopen?
       (<svg className='arrow-drop' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 10L16 14H8L12 10Z"></path></svg>)
        :(<svg className='arrow-drop' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>)
      }
      
    </div>
  )
}
