import {useEffect,useState} from "react";
import Group from "./HomeGroup";
import LodingHome from "./LodingHome";
import HomeGroupEmpty from "./HomeGroupEmpty";
import MsgError from "./MsgError";
import axios from "axios"
import '../../css/Group.css'
import API from "../Axios";
// 


export default function HomeGroups(){
const [api,setapi]=useState([])
const [loding,setloding]=useState(true)
const [mesgerror,setmesgerror]=useState(false)



useEffect(()=>{
const datasort=localStorage.getItem("data")
if (!datasort){
  setloding(false)
  setmesgerror(true)
  console.log("No user data found in localStorage")
  return 
}

  const token=JSON.parse(localStorage.getItem("Token"))
API.get("Groups/My_Groups/",{
  headers:{
    Authorization:`Token ${token}`
  }
})
.then(
(res)=>{

  const info =res.data.Group.map((data)=>({
group_name:data.group_name,
owner:data.owner,
Level:data.Level,
Group_code:data.Group_code
}))//end of map


setapi(info)
setloding(false)

}
)//end thin

.catch((error)=>{
setmesgerror(true)
setloding(false)
setapi([])


})//end of catch

},[]) //end useEffect
 

const hasdata=api.length >0
  return(
<div id="HomeSection" >
{
 mesgerror?
  (
    <MsgError/>
  ) // end of mesg errorr
  :
(
 <>
 {
  loding ? (<LodingHome/>):
  hasdata ? (
    <article className="Groups">
      {
        api.map((item)=>(
          <Group
                key={item.Group_id}
                Group_code={item.Group_code}
                group_name={item.group_name}
                owner={item.owner}
                Level={item.Level}
              />
        ))}
    </article>
  ):
  (
          <HomeGroupEmpty />
        )
 }
 </>
)
}
</div>
  ) // end return


} // end function




