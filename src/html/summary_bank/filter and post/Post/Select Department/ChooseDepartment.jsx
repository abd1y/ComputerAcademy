import React from 'react'
import dataLogo from '../../../../../dataLogo/dataLogo'
import { useTranslation } from 'react-i18next'
export default function ChooseDepartment({isclick,setDepartments}) {
  const{t,i18n}=useTranslation()
  const handleChange =(value)=>{
setDepartments(prev=>{
  const Prev=prev || []
 if( Prev.includes(value)){

  return Prev.filter(e=> e!==value)
 }
  else{

  return  [...Prev,value]
  }
})
  }
  return (
   <div className={isclick?"chooseDepartmentActev":'chooseDepartment'} dir={i18n.language==="en"?"ltr":"rtl"} >
<ul className='selectDepartmentItem'>
  { 
  dataLogo.map((item,index)=>(
      <label>
<input 
key={index}
type='checkbox'
accept
 hidden
name='NameDeportment'
  value={item.shortDeportment}
  onChange={()=>handleChange(item.shortDeportment)}
   />

    <li  className={`${isclick?'itemselectDepartmen':'chooseDepartment'}
    ${index==6?"lastitemi":""}
    `  } >
      <div className='CollectionChooseDepartmen'>
      <h1>
      {t(item.NameDeportment)}
      </h1>
      <div className='imagChooseDepartmen' >
        <img  src={item.imagdeportment}/>
      </div>
      </div>
      </li>
  
      </label>
  ))

      }
</ul></div>
  )
}
