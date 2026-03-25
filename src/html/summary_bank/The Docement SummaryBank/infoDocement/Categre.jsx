import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Categre({Level,Course,verified,Departments}) {
    const {t}=useTranslation()
  return (
    
   <div className='Categre'>
        <ul>
            <li>{t('Level')} {Level}</li>
            <li>{t('Course')} {Course}</li>
            {
              verified?( <li title={t('Verified by the Professor')} className='Isverified'>
              
               {t('verified')} <i   className="ri-shield-star-fill"></i> 
            
             </li>):
             (<p className='ISNotVerified'></p>)
            
           
             }
             <div title={t('branches')} className='branches'>
           {
            
            Departments && Object.values(Departments).map((item,index)=>(
              <li className='branchesli' key={index}>
                {item.Short_code_department}
              </li>
            ))
           }
           </div>
           
        </ul>
      </div>
  )
}
