import { useEffect,useState } from "react"
//  pags
import Artic from "./Artic"
import Nav from "./Nav"



// js
import { Hover } from "../../js/Scrept"
import { listClick } from "../../js/Scrept"
import { clickFunction } from "../../js/Scrept"


export default function Main() {
useEffect(()=>{
Hover();
listClick();
  clickFunction();


},[])

  return (
    <>
       <main id="main" className="main">
        <Artic/>
        <Nav/>
       </main>
       
    </>
  )
}
