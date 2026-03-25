
import ImagProfile from "../ImagProfile"
import InfoProfileText from "../InfoProfileText"


//  import tolls
import { useState } from "react"
export default function InfoProfile({dataProfile}) {


  return (
    <div className="InfoProfile">
      <ImagProfile IMGProfile={dataProfile}/>
      <InfoProfileText  dataProfile={dataProfile} />
    </div>
  )
}
