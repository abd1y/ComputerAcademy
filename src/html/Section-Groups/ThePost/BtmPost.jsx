import React from 'react'
import { useTranslation } from 'react-i18next'
const BtmPost = ({PostGroupsAPI,Loding,erorr}) => {
  const {t}=useTranslation()
  return (
    <>
      <div className='ErorrMsg'>
     {
    erorr.length >0 && erorr.map((erorr)=>(
      <p><svg className='eorr-Post' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" ><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"></path></svg> {erorr}</p>
    ))
     } 
      
    </div>
    <div className='Btm-Post'>
      <button onClick={PostGroupsAPI}> {Loding?(<div className='hourglass'><svg className='Icon-Loding-Creat-Groups' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 2H20V6.45994L13.5366 12L20 17.5401V22H4V17.5401L10.4634 12L4 6.45994V2ZM12 10.6829L18 5.54007V4H6V5.54007L12 10.6829ZM12 13.3171L6 18.4599V20H18V18.4599L12 13.3171Z"></path></svg> </div>):t("post")} </button>

    </div>
  
    </>
  )
}

export default BtmPost
