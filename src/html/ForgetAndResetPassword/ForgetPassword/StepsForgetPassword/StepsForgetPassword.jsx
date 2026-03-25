import React from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import { useTranslation } from 'react-i18next'
import { dir } from 'i18next'
export default function StepsForgetPassword({increment,step,Decrement}) {
         const {i18n}=useTranslation()
  return (
    <div className={`
      StepsForgetPassword 
      ${step===1?"StepsForgetPasswordOne":""}
      ${step===2?"StepsForgetPasswordTwo":""}
      ${step===3?"StepsForgetPasswordThree":""}
    `
    
    } >
      
      <StepOne  

      increment={increment}
          step={step}
       />

      <StepTwo 
       step={step}
       increment={increment}
       Decrement={Decrement}
       />
      <StepThree     step={step}
      
       Decrement={Decrement}/>
    </div>
  )
}
