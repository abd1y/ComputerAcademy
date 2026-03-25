import {useState,useEffect} from 'react'
import {useNavigate } from 'react-router-dom'
import Head from '../Header'
import Postdocement from '../../summary_bank/filter and post/Post/Postdocement'
export default function PostDocementPage() {
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
      <Head/>
      <Postdocement/>
    </div>
  )
}
