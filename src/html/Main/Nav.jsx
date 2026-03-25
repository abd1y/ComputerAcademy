
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
export default function Nav() {
  const {t}=useTranslation()
const data_save=JSON.parse(localStorage.getItem("data"))
const id=data_save?.id
  
  return (
    <nav id="nav" className="nav">
            <ul>
         
               <li className={`ri-home-2-fill  active item` } id='HomeNav'><p className="titleNav">{t('Home')} </p> </li>
                <li className="ri-team-fill item" id='GroupNav'><p className="titleNav"> {t('Group')}</p></li>
                <li className="ri-git-repository-fill item" id='summaryBank'><p className="titleNav"> {t('Summary Bank')}</p></li>
                <li className="ri-settings-4-fill item" id='settingNav'><p className="titleNav">{t('Settings')} </p></li>
              <Link to={`Profile/${id}`}>
                <li className={`ri-user-6-fill  item`}><p className="titleNav">{t('Profile')}</p></li>
              </Link>
            </ul>
          
        </nav>
  )
}
