import React from 'react'
import Department from './Department'
import Level from './Level'
import Course from './Course'
import BtnSaveandRestar from './BtnSaveandRestar'
import '../../../../css/SummaryBank/Filtering.css'
export default function Filtering({Summary_bankAPI,setlevel,setdepartments,SetCourse,slidefilter}) {
  return (
    <div id='itemFilter' className='itemFilter' style={{display:slidefilter?"none":"block"}}>
        <div className="content">
    <Department setdepartments={setdepartments}/>
    <Level setlevel={setlevel} />
    <Course SetCourse={SetCourse}/>
    <BtnSaveandRestar   Summary_bankAPI={Summary_bankAPI}/>
  
   
</div>
    </div>
  )
}
