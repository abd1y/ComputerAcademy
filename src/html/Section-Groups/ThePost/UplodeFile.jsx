import React from 'react'
import { useState,useRef } from 'react'
import UplodeFilePDF from './UplodeFilePDF'
import { useTranslation } from 'react-i18next'
const UplodeFile = ({setmedia}) => {
        const {t} =useTranslation()
    const [File,SetFile]=useState(null)
    const [FileType,SetFileType]=useState(null)
    const DeletItemRef=useRef(null)


const [fileName,setfileName]=useState("")
    const handlerFile=(e)=>{
const file=e.target.files[0]
if (file){
    SetFile(URL.createObjectURL(file))
setfileName(file.name)
setmedia(file)


//  Select type

if(file.type.toLowerCase().startsWith("image/")){
SetFileType("image")
}
else if(file.type.toLowerCase().startsWith("video/")){
SetFileType("video")
}
else if(file.type.toLowerCase().startsWith("application/pdf")){
    SetFileType("pdf")
}
}
    }
    const delethandler=()=>{
        SetFile(null)
        DeletItemRef.current.value=""
        SetFileType(null)
          setmedia(null)
    }



  return (
    <div className='uplode-file'>
      <div className='File'>
        <div className='input-file'>

        <label className='Label-input-file'>
            <p> {t("Uplode File")}</p>

        <input type='file' ref={DeletItemRef} onChange={handlerFile} accept='.png,.jpg,.pdf,.mp4,.mov' hidden/>        </label>
               </div>
        <div className='File-types'>
            {
            FileType==="image" && (<><img src={File}></img>   <svg className='Delete-items-image' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg></>)
            }
            {
                FileType==='video' &&(<><video controls src={File}></video>  <p class=" Delete-item-video" title={t('delete the video')}  onClick={delethandler}>X</p></>)
            }
            {
                FileType==='pdf' &&(<UplodeFilePDF fileName={fileName} File={File} delethandler={delethandler} />)
            }
        </div>



        
      </div>
    </div>
  )
}

export default UplodeFile
