import React from 'react'

import { useTranslation } from 'react-i18next'
export default function TitleSelectLevel({IsClick,click}) {
 const {t}=useTranslation()
  return (
  
      <div  onClick={click} className='TitleSelectLevel'>
         <h1>{t("Select Level")}</h1>  
        {
          !IsClick?
          (<i class="ri-arrow-up-s-fill"></i>):
          (<i class="ri-arrow-down-s-fill"></i>)

        }
      </div>
     
        

   
  )
}
