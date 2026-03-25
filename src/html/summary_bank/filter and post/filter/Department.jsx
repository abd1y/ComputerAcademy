
import dataLogo from "../../../../dataLogo/dataLogo"
import { useTranslation } from 'react-i18next'
export default function Department({setdepartments}) {
  const {t,i18n}=useTranslation()
  return (
    
    <div className='Department'>
        <div className="titleDepartment">
      <h1 style={{textAlign:i18n.language==='en'?'start':"center"}}>{t("Department")}</h1>
      </div>
      <ul className="lifilterDepartment">
{
    dataLogo.map((item,index)=>(
   <label  >
        <li >
            
                <input key={index} type='checkbox' hidden
                value={item.shortDeportment}
                 onChange={
              e => {
    const val = e.target.value
    setdepartments(prev => {
      if (prev.includes(val)) {
        return prev.filter(v => v !== val)
      } else {
        return [...prev, val]
      }
    })
  }}
                />
             <div title={t(item.NameDeportment)} className='department'>
                <div  className='imageDepartment'>
                   <img src={item.imagdeportment}  />
                </div>
               <h1 className="shortDeportment">{item.shortDeportment}</h1>
             </div>
            
        </li>
        </label>

    ))
}
     


       
      </ul>
    </div>
  )
}
