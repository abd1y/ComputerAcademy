import FilterAndPost from "./filter and post/FilterAndPost"
import Filtering from "./filter and post/filter/Filtering"
import TheDocements from "./The Docement SummaryBank/TheDocements"
import '../../css/SummaryBank/SummaryBank.css'
import API from '../Axios'
import {useState,useEffect } from "react"
export default function SummaryBank() {
  const Save_data=JSON.parse(localStorage.getItem("data"))
  const token=JSON.parse(localStorage.getItem("Token"))
  const [loding,SetLoding]=useState(false)
  const [slidefilter,setslidfilter]=useState(false)
  const [data,setdata]=useState([])
const [level,setlevel]=useState([])
const [departments,setdepartments]=useState([])
const [Course,SetCourse]=useState([])
const SliderFilterhandler=()=>{
  setslidfilter(!slidefilter)
}
const Summary_bankAPI=()=>{
  setslidfilter(false)
SetLoding(true)
API.post('Summary_bank/Filter_docement/',
 { Level:level,
    Departments:departments,
    Course:Course
 }
  ,{
   headers: { Authorization: `Token ${token}` } 
})
.then(res=>{
  setslidfilter(true)
SetLoding(false)
setdata(res.data.data);
})
.catch(err=>{
  setslidfilter(true)
SetLoding(false)
console.log("erorr",err)
})
}

useEffect(()=>{
SetLoding(true)
Summary_bankAPI()



},[])
    
  return (
    <div id="SummaryBank" className='SummaryBank' >
      <FilterAndPost SliderFilterhandler={SliderFilterhandler}/>
      <Filtering slidefilter={slidefilter} SetCourse={SetCourse} setlevel={setlevel} setdepartments={setdepartments} Summary_bankAPI={Summary_bankAPI} />
      
    <TheDocements  data={data} loding={loding} SetLoding={SetLoding}/>
   
 
    </div>
  )
}
