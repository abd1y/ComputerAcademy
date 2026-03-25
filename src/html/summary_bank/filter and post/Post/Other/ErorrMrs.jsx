import React from 'react'
import { useTranslation } from 'react-i18next'
export default function ErorrMrs({erorr}) {
      const{t}=useTranslation()
  return (
    
    <div className='Main-Erorr'>
        {
        erorr.length > 0 &&(
            erorr.map((err,index)=>(

                <p className='ErorrPostdocement'><i class="ri-error-warning-fill"></i> {t(err)}</p>
            ))
        )

        }
    </div>
  )
}
