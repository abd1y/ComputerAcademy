import React from 'react'
import { useTranslation } from 'react-i18next'
const BtmPost = ({PostGroupsAPI,Loding,erorr}) => {
  const {t}=useTranslation()
  return (
    <>
      <div className='ErorrMsg'>
     {
    erorr.length >0 && erorr.map((erorr)=>(
      <p><i class="ri-error-warning-fill"></i> {erorr}</p>
    ))
     } 
      
    </div>
    <div className='Btm-Post'>
      <button onClick={PostGroupsAPI}> {Loding?(<div className='hourglass'><i class="ri-hourglass-2-line" style={{color:"white"}}></i></div>):t("post")} </button>

    </div>
  
    </>
  )
}

export default BtmPost
