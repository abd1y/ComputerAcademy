import React from 'react'
import { useTranslation } from 'react-i18next'
export default function InputStep2({code,setcode,Decrement,clickST2}) {
  const {t}=useTranslation()
  return (
    <div className='InputStep2'>
      <input type='text' 
      autoComplete='off'
      value={code}
      onChange={e=>setcode(e.target.value)}
      />
      <div className='ButtonStp2'>

      <button onClick={Decrement}>{t("Back to step")}: 1</button>
      
      <button onClick={clickST2} >{t("Continue")}</button>
      </div>
    </div>
  )
}
