import React from 'react'
import filecheckfill from "../../../../../assets/file-check-line.png.png"
import { useTranslation } from 'react-i18next'
export default function ItemFile({DeleltePdf,IsFile}) {
  const{t}=useTranslation()
  return (
  <div className='itemFile'>
            <div onClick={DeleltePdf}  className='deleteFilePDF' 
            style={{visibility:IsFile?"visible":"hidden "}}>
                <svg width={"20"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"></path></svg>
            </div>
            <div className='FilePDF'style={{backgroundColor:IsFile?"green":"red"}}>
             {
              IsFile?(<svg className='SVG' width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.9998 7L16 2H3.9985C3.44749 2 3 2.44405 3 2.9918V21.0082C3 21.5447 3.44476 22 3.9934 22H12.3414C12.1203 21.3744 12 20.7013 12 20C12 16.6863 14.6863 14 18 14C19.0928 14 20.1174 14.2922 20.9999 14.8026L20.9998 7ZM14.4646 19.4647L18.0001 23.0002L22.9498 18.0505L21.5356 16.6362L18.0001 20.1718L15.8788 18.0505L14.4646 19.4647Z"></path></svg>):
              (<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 13C19.0928 13 20.1174 13.2922 20.9999 13.8026L20.9998 7L16 2H3.9985C3.44749 2 3 2.44405 3 2.9918V21.0082C3 21.5447 3.44476 22 3.9934 22H12.8027C12.2922 21.1175 12 20.0929 12 19C12 15.6863 14.6863 13 18 13ZM21.5356 21.1212L19.4143 18.9999L21.5356 16.8786L20.1214 15.4644L18.0001 17.5857L15.8788 15.4644L14.4646 16.8786L16.5859 18.9999L14.4646 21.1212L15.8788 22.5354L18.0001 20.4141L20.1214 22.5354L21.5356 21.1212Z"></path></svg>)
             }
            </div>
            </div>

  )
}
