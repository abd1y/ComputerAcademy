import {useState,useEffect} from 'react'
import ItemtitleSelectLanguage from './ItemtitleSelectLanguage'
import ChoiseLsnguage from './ChoiseLsnguage'


export default function SelectLanguage() {


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
    <div className='SelectLanguage'   >
       <ItemtitleSelectLanguage clickSlider={clickSlider} isOpne={isOpne}  />
   <ChoiseLsnguage isOpne={isOpne}/>
    </div>
  )
}
