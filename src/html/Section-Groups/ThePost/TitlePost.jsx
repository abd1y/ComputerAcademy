import React from 'react'
import { useTranslation } from 'react-i18next'
const TitlePost = ({settitle,title}) => {
    const {t}=useTranslation()
  return (
    <div className='Title-Post'>
        <h3> {t("TITLE")} :</h3>
      <textarea value={title} onChange={e=>settitle(e.target.value)} placeholder={t('What are you thinking 💭')}></textarea>
    </div>
  )
}

export default TitlePost
