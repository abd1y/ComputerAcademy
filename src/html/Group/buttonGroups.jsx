import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
export default function ButtonGroups() {
  const {t}=useTranslation()
  return (
    <div className='buttonGroups' id='buttonGroups'>
      <Link to={'Serch-Groupe'}>
        <button   className='ButtonSearch' title={t("Searching for study groups")} >
        <i class="ri-search-line"></i>
        
      </button>
      </Link>
      <Link to={'/Creat-Groups'}>
      
        <button   className='ButtonCreate' title={t('Create study groups ')} >
        <i class="ri-pencil-fill"></i>
      </button>
     </Link>
     
    </div>
  )
}
