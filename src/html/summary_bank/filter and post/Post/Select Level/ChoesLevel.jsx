import React from 'react'
import { useTranslation } from 'react-i18next'
export default function ChoesLevel({selectLevel,setLevel,Level}) {
   const {t,i18n}=useTranslation()
    const level=[
       {"Level":"1"},
       {"Level":"2"},
       {"Level":"3"},
       {"Level":"4"},
    ]
  return (
    <div className={selectLevel?"ChoesLevelACT":"ChoesLevelNotACT"} dir={i18n.language==="en"?"ltr":"rtl"}>
      <ul className={selectLevel?"ULChoeseLevel":"ChoesLevelNotACT"}>
        {
level.map((item,index)=>(
       <li  className='LiChoeseLevel'key={index}>
        <label className='LiChoeseLevelLabel'>
            <h4>{t('Level')} {item.Level}</h4>
            <input  type='radio' name='option' hidden value={item.Level} onChange={e=>{setLevel(e.target.value)}} checked={Level ==item.Level}  />
        </label>
        </li>
))
        
     }
      </ul>
    </div>
  )
}
