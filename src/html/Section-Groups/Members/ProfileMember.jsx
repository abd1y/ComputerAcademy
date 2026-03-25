
import { Link } from 'react-router-dom'
const ProfileMember = ({dataMember}) => {
  return (
    <>
     {
      dataMember.filter(item=> item.role==="Member")
           .map((item,index,arr)=>(
 <Link    to={`/Profile/${item.id}`}>
   <div key={item.id} className='Profile' style={{borderBottom:index===arr.length - 1?"none":" 1px solid #899197"}} >

              
    
       
         
               <div className='Profile-logo'>
         <img src={`http://127.0.0.1:8000/${item.Profile_image}`} />
       </div>
       <div className="Name-member">
         <p>{item.Name}</p>
       </div>
         
    
    
     </div>
  
       </Link>
           ))
    }</>
   
           
  )
}

export default ProfileMember
