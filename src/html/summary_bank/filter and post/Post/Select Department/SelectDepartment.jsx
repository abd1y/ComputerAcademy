import {useState} from 'react'
import FrontSelectDepartment from './FrontSelectDepartment'
import ChooseDepartment from './ChooseDepartment'

export default function SelectDepartment({setDepartments}) {
    const [isclick,setisclick]=useState(false)
    const clickSelectDepartment=()=>{
    if(!isclick){
        setisclick(true)
    
    }
    else{
         setisclick(false)
    }
  
}
  return (
    <div className='SelectDepartment'>
      <FrontSelectDepartment clickSelectDepartment={clickSelectDepartment} isclick={isclick} />
      <ChooseDepartment setDepartments={setDepartments} isclick={isclick}/>

    
  
    </div>
  )
}
