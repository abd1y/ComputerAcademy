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
          // (<i  class="ri-add-line AddGroups"></i>)
          (<svg  title={t('Join The Groups')}  xmlns="http://www.w3.org/2000/svg" className='AddGroups handler-click' viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" ></path></svg>)
          
          
          :
          // (<i  class="ri-subtract-line DeletGroups"></i>)
          (<svg title={t('Leaving the group')} className='DeletGroups handler-click' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 11V13H19V11H5Z"></path></svg>)
        }
      </div>
    )
  }
