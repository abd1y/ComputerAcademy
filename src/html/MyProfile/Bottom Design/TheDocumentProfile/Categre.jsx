import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Categre({data_summary,dataProfile}) {
     const {t}=useTranslation()
  return (
    <div className='Categre' key={data_summary?.id}>
      <ul>
        <li>{t('Level')} {data_summary?.Level}</li>
            <li>{t('Course')} {data_summary?.Course}</li>
            {
              dataProfile?.Verified?
              (  <li title={t('Verified by the Professor')} className='Isverified'> 
              <>
                  {t('verified')} <i   className="ri-shield-star-fill"></i>
                  </> 
              </li>):
              (<p style={{display:"none"}}></p>)
            }
   
            
                 
               
              
              
            
   <div title={t('branches')} className='branches' >
            {
              data_summary.Departments.map((item,index)=>(
 <li className='branchesli' key={index} >
  {item}
 </li>
              ))
            }
            </div>

      </ul>
    </div>
  )
}
