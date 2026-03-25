import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import API from '../../Axios'
import { useNavigate } from 'react-router-dom'
const BtmSettingGroups = ({Role,SetteingGroupAPI,Lodingbtm}) => {
  const {Group_code}=useParams()
  const Token=JSON.parse(localStorage.getItem("Token"))
    const {t}=useTranslation()
      const nav = useNavigate()  
const LeaveGrouphandler=()=>{
API.delete(`Groups/Leave_groups/?Group_code=%23${Group_code}`,
{

  headers:{
    Authorization:`Token ${Token}`
    }
}
)
.then(()=>{
nav('/',{replace:true})
})
}
const DeleteGroups=()=>{
  API.delete(`Groups/delete_group/?Group_code=%23${Group_code}`,
  {
     headers:{
    Authorization:`Token ${Token}`
    }
  }

)
.then(()=>{
  nav('/',{replace:true})
})
}
  return (
    <div className="Btm-Setting-Groups">
      <button
        onClick={SetteingGroupAPI}
        title={t("Save changes")}
        style={{ display: Role === "Admin" ? "block" : "none" }}
      >
        {Lodingbtm ? (
 <div className='hourglass'>

        <i class="ri-hourglass-2-line" style={{color:"white"}}></i>
        </div>
        ) : (
          <i class="ri-save-fill"></i>
        )}
      </button>
      {
        Role === "Admin"?
        ( <button onClick={DeleteGroups} title={t("Delete the group")}>
<i class="ri-close-circle-fill"></i>
      </button>):
      
(   <button onClick={LeaveGrouphandler} title={t("Leaving the group")}>
        <i class="ri-logout-box-r-line"></i>
      </button>)
      }
   
     
    </div>
  );
}

export default BtmSettingGroups
