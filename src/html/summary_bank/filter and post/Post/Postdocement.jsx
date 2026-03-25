import {useState} from 'react'
import BackPostDocement from './BackPostDocement'
import DocementName from './DocementName'
import UplodeFilePDF from './UplodeFilePDF/UplodeFilePDF'
import SelectDepartment from './Select Department/SelectDepartment'
import SelectLevel from './Select Level/SelectLevel'
import SelectCourse from './Select Course/SelectCourse'
import OtherPost from './Other/OtherPost'
import '../../../../css/SummaryBank/PostDocement.css'
import API from '../../../Axios'
import { useNavigate } from 'react-router-dom'



export default function Postdocement() {
  const nav=useNavigate()
      const [clock,setclock]=useState(false)
  const [file_name,setfile_name]=useState("")
  const [Level,setLevel]=useState("1")
  const [GetCourse,setCourse]=useState("1")
  const [file,setfile]=useState(null)
  const [erorr,setErorr]=useState([])
  const [Departments,setDepartments]=useState([])
  // create data for type Form data
 
const save_data=JSON.parse(localStorage.getItem("data"))
  const token=JSON.parse(localStorage.getItem("Token"))

// API
const APIPostDocement=()=>{
  setErorr([])
  setclock(true)
   const dataPostDocement = new window.FormData(); 
  dataPostDocement.append("File_name", file_name);
  dataPostDocement.append("File", file); 
  dataPostDocement.append("Level", Level);
  dataPostDocement.append("Course", GetCourse);

  if (Departments && Departments.length > 0) {
    Departments.forEach((dep) => {
      dataPostDocement.append("Departments", dep);
    });
  }
    API.post("Summary_bank/Post_docement/",dataPostDocement,{
    headers:{
      Authorization:`Token ${token}`
    }
  })
  .then(res=>{
    setclock(false)
nav('/')

  })
  .catch(err=>{
setclock(false)
if (err.response && err.response.data) {
  const dataErorr=err.response.data

  const MesErorr=Object.values(dataErorr).flat()
  setErorr(MesErorr)
}
else{
  setErorr(['Something is wrong please try again'])
}
  })
}




  return (
    <div className='PostDocement' id='PostDocement'>
    <div className='itemPostDocement'>

     
<BackPostDocement/>

<UplodeFilePDF  setfile={setfile} />
<DocementName file_name={file_name} setfile_name={setfile_name}/>
<SelectDepartment  setDepartments={setDepartments}/>
<SelectLevel Level={Level} setLevel={setLevel}/>
<SelectCourse GetCourse={GetCourse} setCourse={setCourse}/>

<OtherPost erorr={erorr} setclock={setclock} clock={clock} APIPostDocement={APIPostDocement}/>
    </div>
    </div>
  )
}
