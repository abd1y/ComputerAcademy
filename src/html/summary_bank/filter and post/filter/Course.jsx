import React from "react";
import { useTranslation } from 'react-i18next'
export default function Course({SetCourse}) {
  const {t}=useTranslation()
  return (
    <div className="Course">
      <div className="CourseClass">
        <h1>{t("Course")}</h1>
      </div>
      <ul>
       
       
        <li >
          <label>
            <input type="checkbox" hidden
            value={"1"}
            onChange={
             e=>{
              const val=e.target.value
              SetCourse(prev=>{
                  if (prev.includes(val)) {
        return prev.filter(v => v !== val)
      } else {
        return [...prev, val]
      }
              })

             }
            }
            />
            <samp className="CourseBtm">{t("Course")} 1 </samp>
          </label>
        </li>
       
       
        <li >
    
          <label>
            <input type="checkbox" hidden
              value={"2"}
            onChange={
             e=>{
              const val=e.target.value
              SetCourse(prev=>{
                  if (prev.includes(val)) {
        return prev.filter(v => v !== val)
      } else {
        return [...prev, val]
      }
              })

             }
            }/>
            <samp className="CourseBtm">{t("Course")} 2 </samp>
          </label>
        </li>
      </ul>
    </div>
  );
}
