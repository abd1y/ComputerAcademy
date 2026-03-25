import React from 'react'

import ItemVideo from './ItemVideo'
import { useRef,useState,useEffect } from 'react'
import {handlerVideo} from '../../../../../js/Scrept'

export default function Video({LinkVideo}) {
  // ادوات الخاصه بشريط الفيديو
const videoRef=useRef(null)
const PlayVideoRef=useRef(null)
const progresRef=useRef(null)
const [fullvideo,setfullvideo]=useState(false)
const [playVideo,setplayVideo]=useState(false)

const FullSecreen=()=>{
if(!document.fullscreenElement){
  videoRef.current.requestFullscreen()
  setfullvideo(true)
}else{
  document.exitFullscreen()
  setfullvideo(false)
}
}
const PlayVideoClick=()=>{
if(!playVideo){
  PlayVideoRef.current.play()
  setplayVideo(true)
}else{
PlayVideoRef.current.pause()
  setplayVideo(false)
}

}
const CurrentTimeAdd =()=>{
PlayVideoRef.current.currentTime+=10
}
const CurrentTimeSub =()=>{
PlayVideoRef.current.currentTime-=10
}
useEffect(()=>{
  handlerVideo()
},[])

// end 
  return (
    <div className='Type-Media-video'  ref={videoRef}  >
        <video  
        className='video'
        ref={PlayVideoRef}
          onClick={PlayVideoClick}
          src={LinkVideo}
            >
          
            </video>
      <ItemVideo FullSecreen={FullSecreen} fullvideo={fullvideo} PlayVideoClick={PlayVideoClick} playVideo={playVideo} CurrentTimeAdd={CurrentTimeAdd} CurrentTimeSub={CurrentTimeSub} />
      </div>
    )
  }
