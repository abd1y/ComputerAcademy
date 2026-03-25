
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
  data.role=="Admin"?( <p className='Admin-Group'><i class="ri-user-2-fill"></i> {t("admin")}</p>)
  :
      (  <p className='Membrt-Groups'><i class="ri-user-5-fill"></i> {t("Member")}</p>)
      
        }
          </div>
      </div>
    )
  }
