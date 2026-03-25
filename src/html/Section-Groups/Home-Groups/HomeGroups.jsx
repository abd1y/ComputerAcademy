import {useState,useEffect} from 'react'
import '../../../css/SectionGroup/HomeGroups.css'
import LodingHome from './LodingHome'
import PostHomeGroups from './Post-Home-Groups/PostHomeGroups'
import API from '../../Axios'
import { useParams } from 'react-router-dom'
export default function HomeGroups({CanComment}) {
  const [Loding,setLoding]=useState(false)
  const [data_Post,setdata_post]=useState([])
  const {Group_code}=useParams()

  const deletehandlerPost=(idPost)=>{
    setdata_post(prev=> prev.filter(data=>data.post_id !== idPost))
  }
const token=JSON.parse(localStorage.getItem("Token"))
  const HomeGroupApi=()=>{
    setLoding(true)
    API.get(`Groups/show_post/?Group_code=%23${Group_code}`,{
      headers:{
        Authorization:`Token ${token}`
      }
    })
    .then((res=>{
      setLoding(false)

      const apiPost=res.data.data.posts.map((Post_data)=>({
        post_id:Post_data.post_id,
        user_id:Post_data.user_id,
        member_name:Post_data.member_name,
        member_profile:Post_data.member_profile,
        role:Post_data.role,
        title:Post_data.title,
        media:Post_data.media,
        Like:Post_data.Like,
        Totle_comment:Post_data.Totle_comment,
        is_liked:Post_data.is_liked,
        comment:Post_data.comment,
 

      })
    )
     setdata_post(apiPost)

    }))
    .catch(err=>{
      setLoding(false)
    })
    }
    useEffect(()=>{
      HomeGroupApi()
    },[])
  return (
    <>
    {
Loding?
(<LodingHome/>):
(  <div className='HomeGroups'>
    <PostHomeGroups CanComment={CanComment} deletehandlerPost={deletehandlerPost} data_Post={data_Post} />
    </div>)
    }
    </>
  
  )
}
