// import Page
import '../../css/MyProfile/MyProfile.css'
import TopDesign from './TopDesign/TopDesign'
import BottomDesign from './Bottom Design/BottomDesign'
import ppd from '../../assets/ppd.pdf'
import ppd2 from '../../assets/ppd2.pdf'
import LogoDocement3 from '../../assets/LogoDocement3.png'
import defaultImage  from '../../assets/images.png'
import LodingProfile from './LodingProfile'
import API from '../Axios'


// import tools
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function MyProfile() {
  const [Loding,SetLoding]=useState(false)
  const [dataProfile,SetdataProfile]=useState(null)
  const [data_summary,Setdata_summary]=useState([])
  const apiProfile=[
    {
      id:1,
      Name:"Rossevelt",
      StarPont:250,
      IMGProfile:defaultImage,
      verfiled:true,
      BIO:"اسمي عبدالله علي مزبان  \n لقبي روسيفيلت \n عمر 23 سنه \n ادرس علوم حاسوب \n الجامعة التكنولوجيه \n فيسكا بارسا \n"
     ,
     PostDocement:[
       {
         id:1,
         NameDocement:"Data strack",
         Level:2,
         URLPDF:ppd2,
         course:1,
        
         branch:[
           {
             branch:"AI"
           },
           {
             branch:"MM"
           }
         ]
   
       },
       {
         id:2,
         NameDocement:"Data",
         Level:4,
         URLPDF:ppd,
         course:1,
       
         branch:[
           {
             branch:"SY"
           },
           {
             branch:"MM"
           }
         ]
   
       },
       {
         id:2,
         NameDocement:"قواعد البيانات",
         Level:2,
         URLPDF:ppd2,
         course:2,
         
         branch:[
           {branch:"SY"},
           { branch:"AI"},
           { branch:"CY"},
           { branch:"IS"},
           { branch:"CN"},
           {branch:"MM"}
         ]
   
       },
    ]
    }
  ]
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
