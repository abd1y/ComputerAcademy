import {useEffect,useState} from 'react'
import LogoSearchGrops from './LogoSearchGrops'
import InfoResult from './InfoResult'
import ButtonGroup from './ButtonGroup'
import ResultNotFind from './ResultNotFind'
import LodingResult from './LodingResult'
export default function ResultSearch({searchcode,Loding,data,isClick}) {



 
  const hasdata=data && data.Group_code

  if (!isClick && !Loding) return null;
  return (
    <div className='ResultSearch' >
      {
         Loding?
     (<LodingResult/>):
     hasdata?(  
    
     
     <div className='infoResult' id='infoResult' style={isClick?{display:"flex"}:{display:"none"}} >
        <div className='infoResultP1' >
      <LogoSearchGrops/> 
      <InfoResult data={data}/>
        </div>
<ButtonGroup searchcode={searchcode} data={data} />
       </div> ):
      (<ResultNotFind isClick={isClick} />)
      }
     
   

      
    </div>
  )
}
