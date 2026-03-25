import {useState,useEffect} from 'react'
import ChangeProfile from './ChangPforfile/ChangeProfile'
import Changinfoaccount from "./ChangInformation/Changinfoaccount"
import Other from './other/Other'
import { useTranslation } from 'react-i18next'
import API from '../../Axios'
export default function MainChang() {
     const {t}=useTranslation()
//  useState
  const [name,setname]=useState("")
  const [Bio,setBio]=useState("")
  const [Imagprofile,setImagprofile]=useState(null)
  const [email,setemail]=useState("")
  const [Password,setPassword]=useState("")
  const [ChangePassword,setChangePassword]=useState("")
  const [ConfirmPassword,setConfirmPassword]=useState("")
  const [Erorr,setErorr]=useState([])

  const [loader,setloder]=useState(false)
  
  // Data
   const data_save=JSON.parse(localStorage.getItem('data'))
   const token=JSON.parse(localStorage.getItem("Token"))
  

  // function
  const dataUser=()=>{

    setname(data_save?.Name)
    setImagprofile(data_save?.Profile_image)
    setBio(data_save?.Bio)
    setemail(data_save?.email)
  }
  //  API
const SettingAPI=()=>{
setloder(true)
  setErorr([])

    const DataProfile=new window.FormData()
  DataProfile.append("Name",name)
  DataProfile.append("Profile_image",Imagprofile)
  DataProfile.append("Bio",Bio)
  DataProfile.append("password",Password)
  DataProfile.append("Change_password",ChangePassword)
  DataProfile.append("Confirm_password",ConfirmPassword)
  API.put('auth/Updit-profile/',DataProfile,{
    headers:{
      Authorization:`Token ${token}`
    }
  })
  .then(res=>{
localStorage.setItem("data",JSON.stringify(res.data.data))
setTimeout(()=>{

},5000)

setloder(false)
  })
  .catch(err=>{

    setloder(false)
if(err.response && err.response.data){
  const data_erorr=err.response.data
  const MesgErorr=Object.values(data_erorr).flat()
  setErorr(MesgErorr)
}
else{
  setErorr(['Somting Is Wrong Please Try Again'])
}
  })
}

    useEffect(()=>{
dataUser()

    },[])
  return (
    <div className='change' >
      <h3>{t("Profile")}</h3>
  
      <ChangeProfile name={name} setname={setname} Imagprofile={Imagprofile} setImagprofile={setImagprofile} Bio={Bio} setBio={setBio}/>
        <h3>{t("Information Account")}</h3>
        <Changinfoaccount email={email} setPassword={setPassword} setChangePassword={setChangePassword} setConfirmPassword={setConfirmPassword} />
        <h3>{t("Other")}</h3>
        <Other  Erorr={Erorr} loader={loader} SettingAPI={SettingAPI}/>
        
    </div>
  )
}
