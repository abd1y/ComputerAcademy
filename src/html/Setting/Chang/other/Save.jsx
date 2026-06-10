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
        (<div className='Loder-save'><svg className='Icon-itemOther' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.05469 13H5.07065C5.55588 16.3923 8.47329 19 11.9998 19C15.5262 19 18.4436 16.3923 18.9289 13H20.9448C20.4474 17.5 16.6323 21 11.9998 21C7.36721 21 3.55213 17.5 3.05469 13ZM3.05469 11C3.55213 6.50005 7.36721 3 11.9998 3C16.6323 3 20.4474 6.50005 20.9448 11H18.9289C18.4436 7.60771 15.5262 5 11.9998 5C8.47329 5 5.55588 7.60771 5.07065 11H3.05469Z"></path></svg></div>)
          :(<svg className='Icon-itemOther' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 21V13H6V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H18ZM16 21H8V15H16V21Z"></path></svg>)}</button>
    </div>
    </div>
  )
}
