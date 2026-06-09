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
              
               {t('verified')} <svg width={16}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM12 13.5L14.9389 15.0451L14.3776 11.7725L16.7553 9.45492L13.4695 8.97746L12 6L10.5305 8.97746L7.24472 9.45492L9.62236 11.7725L9.06107 15.0451L12 13.5Z"></path></svg>
            
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
