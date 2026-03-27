import React from 'react'
import PicDocementProfile from './PicDocementProfile'
import InfoDocementProfile from './InfoDocementProfile'
import { useTranslation } from 'react-i18next'
export default function TheDocumentProfile({dataProfile,data_summary}) {
      const {i18n}=useTranslation()
  return (
     <a href={`https://abdullih123.pythonanywhere.com${data_summary?.File}`} download={data_summary?.File_name}>
    <div className='TheDocumentProfile'dir={i18n.language==="en"?"ltr":"rtl"}>
<PicDocementProfile/>

<InfoDocementProfile dataProfile={dataProfile} data_summary={data_summary} />
    </div>
     </a>
  )
}
