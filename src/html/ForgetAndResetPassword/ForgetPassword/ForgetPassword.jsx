import React from 'react'
import '../../../css/ResetAndForgetPassword/Forget.css'
import Steps from './Steps'
import StepsForgetPassword from './StepsForgetPassword/StepsForgetPassword'
import { useState } from 'react'

export default function ForgetPassword() {

       const [step,setstep]=useState(1)

    const increment=()=>{
if(step<3){
    setstep(prev=> prev + 1 )

    }
}
const Decrement=()=>{

    setstep(prev=> prev - 1 )


}
  return (
    <div className='ForgetPassword' >
      <Steps  step={step}  />
      <StepsForgetPassword  increment={increment} step={step} Decrement={Decrement} />
    </div>
  )
}
