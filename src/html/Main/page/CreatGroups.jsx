import {useState,useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import Head from '../Header'
import CreatGrop from '../../Group/CreateGrops/CreatGrop'
export default function CreatGroups() {
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
      <CreatGrop/>
    </div>
  )
}