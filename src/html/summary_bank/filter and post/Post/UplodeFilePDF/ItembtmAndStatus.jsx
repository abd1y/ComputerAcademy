import {useRef,useState} from 'react'
import { useTranslation } from 'react-i18next'
export default function ItembtmAndStatus({FilePDF,IsFile,ClossPdf}) {
   
      const{t}=useTranslation()
   
  return (
      


     <div className='itembtmAndStatus'>

       <div className='btmUplodeFilePDF'> 
        <label>
           <h4>{t('Add PDF Flie')}</h4>
        <input
         type='file'
         accept='.pdf' 
         onChange={FilePDF}
         ref={ClossPdf}
         hidden
         />
        </label>
        </div>
        
        </div>
        
       

  )
}
