import React from 'react'
import  {Link }from 'react-router-dom'
import { useTranslation } from 'react-i18next'
export default function FilterAndPost({SliderFilterhandler}) {
   const {t}=useTranslation()
  return (
    <div className='FilterAndPost'>
      <div className='buttenSummry' id='buttrnPost'>
      <Link to={'DocementPost'}>
        <button  className='buttenSummarypost' title={t("post summry")}> <i class="ri-pencil-fill"></i></button>
      </Link>
      </div>
      <div id='buttrnFilter' className='buttenSummry'>   
        <button  onClick={SliderFilterhandler} title={t("filter")}><i class="ri-equalizer-line"></i></button>
        </div>
    </div>
  )
}
