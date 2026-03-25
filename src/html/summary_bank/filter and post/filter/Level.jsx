import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Level({setlevel}) {


    const {t}=useTranslation()
  return (
    <div className='Level'>
      <div className="LevelClass">
      <h1>{t("Level")}</h1>
      </div >
      <ul className='LevelFilter' >
        

        <li className='lifilterLever'><label>
            <input type='checkbox'
             hidden 
             value={"1"}
             onChange={
              e => {
    const val = e.target.value
    setlevel(prev => {
      if (prev.includes(val)) {
        return prev.filter(v => v !== val)
      } else {
        return [...prev, val]
      }
    })
  }}
             />
            <span className='lifilter'>
              {t("Level")} 1
              <h5>
              </h5>
              </span>
            </label>
            </li>

        <li className='lifilterLever'><label>
            <input type='checkbox' hidden value={"2"} 
             onChange={
              e => {
    const val = e.target.value
    setlevel(prev => {
      if (prev.includes(val)) {
        return prev.filter(v => v !== val)
      } else {
        return [...prev, val]
      }
    })
  }} />
            <span className='lifilter'>
              {t("Level")} 2</span>
            </label></li>

        <li className='lifilterLever'><label>
            <input type='checkbox' hidden  
            value={"3"}
             onChange={
              e => {
    const val = e.target.value
    setlevel(prev => {
      if (prev.includes(val)) {
        return prev.filter(v => v !== val)
      } else {
        return [...prev, val]
      }
    })
  }}/>
            <span className='lifilter'>{t("Level")} 3</span>
            </label></li>

        <li className='lifilterLever'><label>
            <input type='checkbox' hidden  
            value={"4"}
             onChange={
              e => {
    const val = e.target.value
    setlevel(prev => {
      if (prev.includes(val)) {
        return prev.filter(v => v !== val)
      } else {
        return [...prev, val]
      }
    })
  }}/>
            <span className='lifilter'>{t("Level")} 4</span>
            </label></li>

      </ul>
    </div>
  )
}
