import {useState,useEffect} from 'react'
import ItemtitleSelectLanguage from './ItemtitleSelectLanguage'
import ChoiseLsnguage from './ChoiseLsnguage'
import { useTranslation } from 'react-i18next';

export default function SelectLanguage() {
  const {i18n}=useTranslation()

  const [isOpne,setIsOpen]=useState(false)

  const clickSlider=()=>{
    if(!isOpne){
      setIsOpen(true)
    }
    else{
      setIsOpen(false)
    }
  }
  return (
    <div className='SelectLanguage' dir={i18n.language==='en'?'ltr':'rtl'}  >
       <ItemtitleSelectLanguage clickSlider={clickSlider} isOpne={isOpne}  />
   <ChoiseLsnguage isOpne={isOpne}/>
    </div>
  )
}
