import React from 'react'
import TheDocumentProfile from './TheDocumentProfile/TheDocumentProfile'
import TitleDocementPost from './TheDocumentProfile/TitleDocementPost'
import MsgNoPostDoement from './MsgNoPostDoement'


export default function BottomDesign({data_summary,dataProfile}) {
      
      if(!data_summary.length){
        return <MsgNoPostDoement/>
      }
  return (
    <>
       <TitleDocementPost/>

{
  data_summary.map((data_summary)=>(
  
    <TheDocumentProfile  dataProfile={dataProfile} key={data_summary?.id} data_summary={data_summary} />
  ))
}


    </>
  )
}
