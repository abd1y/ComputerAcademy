import {useState} from 'react'
import BottomOther from './BottomOther'
import Notes from './Notes'
import ErorrMrs from './ErorrMrs'
export default function OtherPost({APIPostDocement,clock,setclock,erorr}) {

   const clickSendDocement=()=>{
    if(!clock){
       setclock(true) 
    }
    else{
       setclock(false)  
    }
   }

  return (
    <div className='OtherPost'>
      <BottomOther APIPostDocement={APIPostDocement} clickSendDocement={clickSendDocement} clock={clock} />
      <ErorrMrs erorr={erorr}/>
      <Notes/>
    </div>
  )
}
