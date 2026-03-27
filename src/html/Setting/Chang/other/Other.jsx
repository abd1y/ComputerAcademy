import React from 'react'
import Logout from './Logout'
import Save from './Save'
import SelectLanguage from './Select Language/SelectLanguage'
import ErrMsg from './ErrMsg'

export default function Other({SettingAPI,loader,Erorr}) {

  return (
   <div className='Otheritem' >
    <SelectLanguage/>
    
    <div className='LogoutAndsave'>
     
<Logout/>
<Save loader={loader} SettingAPI={SettingAPI}/>
    </div>
<ErrMsg Erorr={Erorr}/>

   </div>
  )
}
