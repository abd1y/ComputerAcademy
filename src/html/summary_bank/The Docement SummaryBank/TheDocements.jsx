import {useState,useEffect} from 'react'
import TheDocement from './TheDocement'
import LodingDocement from './LodingDocement'


export default function TheDocements({loding,data}) {




 
  return (
    

<>
{
  loding?(<LodingDocement/>):
  ( <div className='TheDocements'>
    
  {
   data && data.map((itam)=>(
         <TheDocement key={itam.id} itam={itam}/>
    ))
  }
    
   
    
    
   
   
    </div>)
}
</>

    
   
    
   
    
 )
//  end return
}
