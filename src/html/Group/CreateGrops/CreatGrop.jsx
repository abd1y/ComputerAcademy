import '../../../css/CreatGrop.css'

// import categre page
import BackButton from './BackButton'
import NameGroup from './NameGroup'
import SelectLevelGroup from './SelectLevelGroup/SelectLevelGroup'
import ButtonCreat from './ButtonCreat'
import Notes from './Notes'
import API from '../../Axios'
import { useNavigate } from 'react-router-dom'

// import Tools
import { useState } from 'react'
import {useTranslation} from 'react-i18next'
const sort_data=JSON.parse(localStorage.getItem("data"))
  const token=JSON.parse(localStorage.getItem("Token"))
export default function CreatGrop() {
const [loding,setloding]=useState(false)
const [erorr,seterorr]=useState(false)
const [IsClick,setClick]=useState(false)
const [clickBtm, setclickBtm]=useState(false)
const [Groupname,setGroupname]=useState("")
const [LevelGroups,setLevelGroups]=useState("1")
// function 
const {t,i18n}=useTranslation()
 const nav=useNavigate()
  const click=()=>{
      setClick(!IsClick)
  }

const creatgroupApi=()=>{
  setloding(true)
  seterorr(false)
   setclickBtm(true)
API.post('Groups/creat_Groups/',{
group_name:Groupname,
Level:LevelGroups
},
  { 
        headers: { Authorization: `Token ${token}` } 
  }

)

.then(
  res=>{
 setclickBtm(false)
setloding(false)
   nav('/',{replace:true})

  }
)

.catch(
  err=>{
setclickBtm(false)
setloding(false)
seterorr(true)
  }
)
}

  // retern
  return (
    <div className='CreatGrop' dir={i18n.language==="en"?"ltr":"rtl"}>
      <BackButton/>
      <NameGroup Groupname={Groupname} setGroupname={setGroupname} />
      <SelectLevelGroup  setLevelGroups={setLevelGroups} LevelGroups={LevelGroups} IsClick={IsClick} click={click} />
      <ButtonCreat clickBtm={clickBtm} creatgroupApi={creatgroupApi} loding={loding}/>

      
      <div className='Erorr-creat-groups' style={{display:erorr?"block":"none"}}>
        <h1><i class="ri-error-warning-fill"></i> {t("The group name must not be empty or less than 3 letters long")}</h1>
      </div>
<Notes/>
    </div>
  )
}
