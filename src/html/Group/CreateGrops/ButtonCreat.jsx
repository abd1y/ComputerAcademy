import React from 'react'
import { useTranslation } from 'react-i18next'
export default function ButtonCreat({loding,creatgroupApi,clickBtm}) {
    const {t,i18n}=useTranslation()
  return (
    <div className='ButtonCreat' dir={i18n.language==="en"?"rtl":'ltr'}  >
      <button onClick={creatgroupApi}disabled={clickBtm}>{!loding? t("Create Group"):(<div className='anmation-loding'><i class="ri-hourglass-2-line " ></i> </div>)} </button>
    </div>
  )
}
