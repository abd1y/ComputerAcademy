import {useState,useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import Head from '../Header'
import SerchGrops from '../../Group/SearchGrops/SerchGrops'
export default function SerchGroups() {
  const [IsToken,setIsToken]=useState(null)
  const token=JSON.parse(localStorage.getItem("Token"))
  const nav=useNavigate()

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
      <Head/>
      <SerchGrops/>
    </div>
  )
}
