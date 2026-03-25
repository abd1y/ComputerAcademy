import {useState} from 'react'
import FrontSelectLevel from './FrontSelectLevel'
import ChoesLevel from './ChoesLevel'
export default function SelectLevel({Level,setLevel}) {
    const [selectLevel,SetSelectLevel]=useState(false)
 
    const ClickLevel=()=>{
        if(!selectLevel){
            SetSelectLevel(true)
        }
        else{
            SetSelectLevel(false)
        }
    }
  return (
    <div className='SelectLevel' >
      <FrontSelectLevel ClickLevel={ClickLevel} selectLevel={selectLevel} />
      <ChoesLevel Level={Level} setLevel={setLevel} selectLevel={selectLevel}/>
    </div>
  )
}
