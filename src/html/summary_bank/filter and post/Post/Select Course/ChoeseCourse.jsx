import React from 'react'
import { useTranslation } from 'react-i18next'
export default function ChoeseCourse({ISopen,GetCourse,setCourse}) {
  const {t,i18n}=useTranslation()
  const course=[
 {"NumberCourse":"1"},
 {"NumberCourse":"2"},
  ]
  return (
    <div className={ISopen?"ChoseCourseAct":"ChoseCourseNotAct"}>
     <ul  className='ChoeseCourseUL'>

  {
    course.map((item,index)=>(
      
      <li key={index}  >
  <label  className='ChoeseCourseLable' dir={i18n.language==="en"?"ltr":"rtl"}>
<h1 >{t('Course')} {item.NumberCourse}</h1>
<input type='radio' 
name='ChCourse' 
 hidden
 value={item.NumberCourse}
 checked={GetCourse == item.NumberCourse}
 onChange={e=>{setCourse(e.target.value)}}
 />
      </label>
</li>
    ))
  }

     </ul>
    </div>
  )
}
