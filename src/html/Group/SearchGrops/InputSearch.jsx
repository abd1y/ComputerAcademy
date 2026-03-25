import {useState} from 'react'
import { useTranslation } from 'react-i18next'
import ClickSerchs from './ClickSerch'
import ResultSearch from './ResultSearch/ResultSearch'

export default function InputSearch({Loding, apisearch,data,searchcode,setsearchcode,isClick,handKeydown}) {
    const {i18n}=useTranslation()
    
  return (
    <div className='InputSearch' dir={i18n.language==="en"?"ltr":"rtl"} >
     <ClickSerchs apisearch={apisearch} searchcode={searchcode}  handKeydown={handKeydown} setsearchcode={setsearchcode} />
     <ResultSearch searchcode={searchcode} Loding={Loding} data={data} isClick={isClick}/>

    </div>
  )
}
