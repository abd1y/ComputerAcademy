import SliderGroups from './Slider-Groups.jsx/SliderGroups'
import HomerGroups from './Home-Groups/HomeGroups'
import ThePost from './ThePost/ThePost'
import Members from './Members/Members'
import SettingGroups from './Setting-Groups/SettingGroups'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import API from '../Axios'

export default function SectionGroup() {
   const [active,setactive]=useState("Home")

   const [dataMember,setdataMember]=useState([])
   const [dataGroup,setdataGroup]=useState([])
   const [loding,isLoding]=useState(false)
   const [Role,setRole]=useState("Member")
   const [group_name,setgroup_name]=useState("")
   const [Lodingbtm,setLodingbtm]=useState(false)
   const [allow_post,setAllow_post]=useState(true)
   const [allow_comments,setallow_comments]=useState(true)
   const Token=JSON.parse(localStorage.getItem("Token"))
   const data_save=JSON.parse(localStorage.getItem("data"))
   const NameUser=data_save.Name
   const {Group_code}=useParams()
const MemberAPI=()=>{
  isLoding(true)
  API.get(`Groups/Member_Group/?Group_code=%23${Group_code}`,{
    headers:{
    Authorization:`Token ${Token}`
    }
  })
  .then(res=>{

    const member=res.data.data.Member
    setdataMember(member)
    setdataGroup(res.data.data)
    setAllow_post(res.data.data.allow_post)
    setallow_comments(res.data.data.allow_comments)
    isLoding(false)
    const findNameuser=member.find(e=>e.Name === NameUser)
    const RoleUser=findNameuser? findNameuser.role :"Member"
    setRole(RoleUser)
  })
  .catch((err=>{
    isLoding(false)
    setdataMember([])

  }))
}
useEffect(()=>{
  MemberAPI()
},[])
const SetteingGroupAPI=()=>{
  setLodingbtm(true)
  API.put('Groups/Upsit_data_Groups/',
    {
      Group_code:`#${Group_code}`,
      group_name:group_name,
      allow_comments:allow_comments,
      allow_post:allow_post
    },
    {
      headers:{
        Authorization:`Token ${Token}`
      }
    }
  )
  .then(res=>{
    setLodingbtm(false)



    
  })
  .catch(err=>{
    setLodingbtm(false)
  })
}
const CanPost=allow_post || Role ==="Admin"
const CanComment=allow_post || Role ==="Admin"
  return (
    <div className="SectionGroup">
      <SliderGroups active={active} setactive={setactive} CanPost={CanPost} />
      {active === "Home" && <HomerGroups CanComment={CanComment} />}
      {active === "Post" && <ThePost setactive={setactive}  />}
      {active === "Members" && <Members dataMember={dataMember} loding={loding} />
      }
      {active === "Setting" && (
        <SettingGroups
          Lodingbtm={Lodingbtm}
          SetteingGroupAPI={SetteingGroupAPI}
          group_name={group_name}
          setgroup_name={setgroup_name}
          dataGroup={dataGroup}
          Role={Role}
          setAllow_post={setAllow_post}
          allow_post={allow_post}
          allow_comments={allow_comments}
          setallow_comments={setallow_comments}
        />
      )}
    </div>
  );
}
