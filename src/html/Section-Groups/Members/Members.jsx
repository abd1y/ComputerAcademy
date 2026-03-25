import {useState} from 'react'
import { useTranslation } from 'react-i18next'
import ProfileAdmin from './ProfileAdmin'
import ProfileMember from './ProfileMember'
import adminProfile from '../../../assets/ttt3.jpg'
import Member from '../../../assets/LogoDocement1.png'
import Loding from './Loding'
const Members = ({loding,dataMember}) => {
  const {t,i18n}=useTranslation()


  return (
  <>
  {
    loding ?
    (<Loding/>)
    :
    (  <div className='Members' dir={i18n.language==='en'?"ltr":"rtl"}>
      <div className='Title-members'>
      <h3>{t("Admin")}</h3>
      </div>
      {
         dataMember.filter(item=> item.role==="Admin").map((item)=>(
          <ProfileAdmin item={item}/>
        ))
      }
      
           <div className='Title-members'>
      <h3>{t("Members")}</h3>
      </div>
      {
         
          <ProfileMember  dataMember={dataMember}/>
      
      }
          
       
    </div>)
  }
  </>
  
  )
}

export default Members
