import React from 'react'
import { useTranslation } from 'react-i18next'
export default function ClickSerchs({apisearch,searchcode,setsearchcode,handKeydown}) {
      const {t}=useTranslation()
  return (
    <>
       <input 
       id='ClickSearchInput'
        type='text' 
        maxLength={7} 
        onKeyDown={handKeydown}
        placeholder={t("Enter the 6-character code specific to the group.(ex: #ABC123 )")}
        autocomplete="off"
        value={searchcode}
        onChange={e=>setsearchcode(e.target.value)}
          />
          
          
          
           <button  className='Serach' id='ClickSearch' onClick={apisearch} >
            <i class="ri-search-line"></i>
           </button>
    </>
  )
}
