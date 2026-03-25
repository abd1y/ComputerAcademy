import React from 'react'
import filecheckfill from "../../../../../assets/file-check-line.png.png"
import { useTranslation } from 'react-i18next'
export default function ItemFile({DeleltePdf,IsFile}) {
  const{t}=useTranslation()
  return (
  <div className='itemFile'>
            <div onClick={DeleltePdf}  className='deleteFilePDF' 
            style={{visibility:IsFile?"visible":"hidden "}}>
                <i  class="ri-delete-bin-6-fill"></i>
            </div>
            <div className='FilePDF'style={{backgroundColor:IsFile?"green":"red"}}>
             {
              IsFile?(<svg className='SVG' width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.9998 7L16 2H3.9985C3.44749 2 3 2.44405 3 2.9918V21.0082C3 21.5447 3.44476 22 3.9934 22H12.3414C12.1203 21.3744 12 20.7013 12 20C12 16.6863 14.6863 14 18 14C19.0928 14 20.1174 14.2922 20.9999 14.8026L20.9998 7ZM14.4646 19.4647L18.0001 23.0002L22.9498 18.0505L21.5356 16.6362L18.0001 20.1718L15.8788 18.0505L14.4646 19.4647Z"></path></svg>):
              (<i title={t('There are no uploaded PDF files.')} className="ri-file-close-fill"></i>)
             }
            </div>
            </div>

  )
}
