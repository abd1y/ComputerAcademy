  import {useState,useEffect} from 'react'
  import { useTranslation } from 'react-i18next'
  import API from '../../../Axios'

  export default function ButtonGroup({searchcode,data}) {
  const {t}=useTranslation()
      const [IsAdd, SetIsAdd] = useState(data.isMember)
        console.log(IsAdd)
      const sortdata=JSON.parse(localStorage.getItem('data'))
  const token=JSON.parse(localStorage.getItem("Token"))
const isMember= data.isMember
      const handler=()=>{
        SetIsAdd(!IsAdd)
      }
      useEffect(() => {
          SetIsAdd(data.isMember)
      }, [data.isMember])
      const Join_or_Leve_groupsAPI=()=>{
        API.post('Groups/Join_Leave_group/',
          {Group_code:searchcode},
        
          {
            headers:{
              Authorization:`Token ${token}`
            }
          }
        )
        .then(res=>{
          handler()
       
        })
        .catch(err=>{

        })
      }
      
    return (
      <div onClick={Join_or_Leve_groupsAPI} className='handler'>
        {
        
          !IsAdd?
          (<i title={t('Join The Groups')} class="ri-add-line AddGroups"></i>):
          (<i title={t('Leaving the group')} class="ri-subtract-line DeletGroups"></i>)
        }
      </div>
    )
  }
