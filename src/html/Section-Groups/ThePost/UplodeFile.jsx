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
        <div className='File-types'>
            {
            FileType==="image" && (<><img src={File}></img>   <i class="ri-close-circle-fill Delete-items-image" title={t("delete the image")} onClick={delethandler}></i></>)
            }
            {
                FileType==='video' &&(<><video controls src={File}></video>  <p class=" Delete-item-video" title={t('delete the video')}  onClick={delethandler}>X</p></>)
            }
            {
                FileType==='pdf' &&(<UplodeFilePDF fileName={fileName} File={File} delethandler={delethandler} />)
            }
        </div>



        <div className='input-file'>

        <label className='Label-input-file'>
            <p> {t("Uplode File")}</p>

        <input type='file' ref={DeletItemRef} onChange={handlerFile} accept='.png,.jpg,.pdf,.mp4,.mov' hidden/>        </label>
               </div>
      </div>
    </div>
  )
}

export default UplodeFile
