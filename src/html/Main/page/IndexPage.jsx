import {useState,useEffect} from 'react'
import Head from "../Header"
import Main from "../Main"
import {useNavigate } from 'react-router-dom'
export default function IndexPage() {
  const [IsToken,setIsToken]=useState(null)
  const nav=useNavigate()
  const token=JSON.parse(localStorage.getItem("Token"))
  const checkToken=()=>{
    if (token){
      setIsToken(true)
    }
    else{
      setIsToken(false)
      nav('/Log-in',{replace:true})
    }
  }
  useEffect(()=>{
checkToken()

  },[])

  return (
    
    <div>
      {
IsToken?(
  <>
  <Head/>
    <Main/>
    </>):("")
      }
   
    </div>
  )
}
