import React, { useState,useEffect } from "react";
import defaultImage  from '../../../../assets/images.png'

import { useTranslation } from 'react-i18next'

export default function ChangImag({Imagprofile,setImagprofile}) {
      const {t}=useTranslation()
    const [image, setImage] = useState(Imagprofile || defaultImage);
    useEffect(() => {
      
  if (Imagprofile && typeof Imagprofile === 'string') {
    setImage(Imagprofile);
  }
}, [Imagprofile]);
const handimag=(e)=>{
const file=e.target.files[0];
if (file){
setImage(URL.createObjectURL(file))
setImagprofile(file)
}
}
  return (
    <div className="imagProfileChang">
     
<div className="image">
    {image&& <img src={image} />}
</div>
 <label title={t("Update profile picture")} id="buttonImagProfile">
        <i className="ri-file-user-fill"></i>
        <input
         type="file" 
         accept="image/*"
         hidden
         onChange={handimag} />
      </label>
    </div>
  );
}
