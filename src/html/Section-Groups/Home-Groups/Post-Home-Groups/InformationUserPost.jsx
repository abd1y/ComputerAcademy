
  import Defult from '../../../../assets/images.png'
  import { useTranslation } from 'react-i18next'
  import API from '../../../Axios'
  export default function InformationUserPost({data}) {
    const {t}=useTranslation()
    const ImagProfile=()=>{

      if (data.member_profile){
        return data.member_profile
      }
      else{
        return Defult
      }
    }
    return (
      <div className='Information-User-Post'>

          <div className='imag-Profile-Groups'>
              <img src={ImagProfile()} loading='lazy' />
          </div>

          <div className='text-info-Group'> 
        <h3>{data?.member_name}</h3>
        {
  data.role=="Admin"?( <p className='Admin-Group'><svg width={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 14.0619V20H13V14.0619C16.9463 14.554 20 17.9204 20 22H4C4 17.9204 7.05369 14.554 11 14.0619ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg> {t("admin")}</p>)
  :
      (  <p className='Membrt-Groups'><i class="ri-user-5-fill"></i> {t("Member")}</p>)
      
        }
          </div>
      </div>
    )
  }
