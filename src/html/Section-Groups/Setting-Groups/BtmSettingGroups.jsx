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

        <i  style={{color:"white"}}><svg width={25} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 2H20V6.45994L13.5366 12L20 17.5401V22H4V17.5401L10.4634 12L4 6.45994V2ZM12 10.6829L18 5.54007V4H6V5.54007L12 10.6829ZM12 13.3171L6 18.4599V20H18V18.4599L12 13.3171Z"></path></svg></i>
        </div>
        ) : (
      <svg width={28} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 21V13H6V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H18ZM16 21H8V15H16V21Z"></path></svg>
        )}
      </button>
      {
        Role === "Admin"?
        ( <button onClick={DeleteGroups} title={t("Delete the group")}>
<svg width={28} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>
      </button>):
      
(   <button onClick={LeaveGrouphandler} title={t("Leaving the group")}>
      <svg width={28} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 22C4.44772 22 4 21.5523 4 21V3C4 2.44772 4.44772 2 5 2H19C19.5523 2 20 2.44772 20 3V6H18V4H6V20H18V18H20V21C20 21.5523 19.5523 22 19 22H5ZM18 16V13H11V11H18V8L23 12L18 16Z"></path></svg>
      </button>)
      }
   
     
    </div>
  );
}

export default BtmSettingGroups
