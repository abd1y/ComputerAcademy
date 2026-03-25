import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Save({SettingAPI,loader}) {
     const {t}=useTranslation()
  return (
    <div>
       <div className='Save itemOters'>
      <button 
      onClick={SettingAPI} 
      title={!loader?
       t("Save"):
       t("Please wait for saving")}
       disabled={loader?true:false}
       >
        
        {loader?
        (<div className='Loder-save'><i class="ri-loader-3-line"></i></div>)
          :(<i class="ri-save-fill"></i>)}</button>
    </div>
    </div>
  )
}
