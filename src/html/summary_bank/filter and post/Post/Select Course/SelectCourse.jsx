import {useState} from 'react'
import ChoeseCourse from './ChoeseCourse'
import FrontCourseSelect from './FrontCourseSelect'


export default function SelectCourse({GetCourse,setCourse}) {
  const [ISopen,SetIsOpen]=useState(false)
  
  const ClickCourse=()=>{
   if(!ISopen){
        SetIsOpen(true)
    
    }
    else{
         SetIsOpen(false)
    }
}
  return (
    <div className='SelectCourse'>
      <FrontCourseSelect ClickCourse={ClickCourse} ISopen={ISopen}/>
      <ChoeseCourse setCourse={setCourse} GetCourse={GetCourse}  ISopen={ISopen}/>
    </div>
  )
}
