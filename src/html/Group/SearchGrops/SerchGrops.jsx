import {useState} from 'react'
import '../../../css/SearchGrops.css'
import ButtonBack from './ButtonBack'
import InputSearch from './InputSearch'
import NoteNav from './NoteNav'
import API from '../../Axios'

export default function SerchGrops() {
const [isClick,setIsclick]=useState(false)
const [data,setdata]=useState([])
 const [Loding,setLoding]=useState(false)
const [searchcode,setsearchcode]=useState("")

const sortdata=JSON.parse(localStorage.getItem('data'))
const token =JSON.parse(localStorage.getItem('Token'))
console.log(isClick)

const handKeydown=(e)=>{
  if(e.key==="Enter"){
      apisearch();
  }
}
const apisearch=()=>{
  setLoding(true)
API.post("Groups/Search_Groups/", 
    { Search: searchcode }, 
    { 
      headers: { Authorization: `Token ${token}` } 
    })
  .then(res=>{
    setLoding(false)
    setIsclick(true)
    setdata(res.data.data)

  })
  .catch(err=>{
     setLoding(false)
     setIsclick(true)
     setdata(null)
  })
}

  return (
    <div className='SerchGrops'>
      <ButtonBack/>
      <InputSearch Loding={Loding} apisearch={apisearch} data={data} searchcode={searchcode} setsearchcode={setsearchcode} handKeydown={handKeydown} isClick={isClick} />
      <NoteNav/>
    </div>
  )
}
