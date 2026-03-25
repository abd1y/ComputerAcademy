// import Page
import '../../css/MyProfile/MyProfile.css'
import TopDesign from './TopDesign/TopDesign'
import BottomDesign from './Bottom Design/BottomDesign'
import LodingProfile from './LodingProfile'
import API from '../Axios'


// import tools
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function MyProfile() {
  const [Loding,SetLoding]=useState(false)
  const [dataProfile,SetdataProfile]=useState(null)
  const [data_summary,Setdata_summary]=useState([])

  const {id}=useParams()
  const token=JSON.parse(localStorage.getItem('Token'))
  const ProfileUser=()=>{
    SetLoding(true)
    API.get(`auth/Profile_user/${id}/`,{
      headers:{
       Authorization: `Token ${token}`
      }
    })
    .then(res=>{
      SetLoding(false)
      SetdataProfile(res.data.Profile)
      Setdata_summary(res.data.data_summary)
    })
    .catch(err=>{
      SetLoding(false)
    })
  }
  useEffect(()=>{
    ProfileUser()
  },[])
  return (
    <div className={!Loding?'MyProfile':"MyProfile scroll"} >
      {
        Loding?
        (<LodingProfile/>):

        ( 
          
          <>
  <TopDesign  dataProfile={dataProfile}/>
    <BottomDesign dataProfile={dataProfile} data_summary={data_summary} />
  

          </>
     
        )
      }


    </div>
  )
}
