import React from "react";
import { useTranslation } from 'react-i18next';
export default function ChoiseLsnguage({isOpne}) {
    const{t,i18n}=useTranslation()

    const changeLanguages=(Lag)=>{
        i18n.changeLanguage(Lag)
        localStorage.setItem("Lang",Lag)
    }
  return (
    <div className={isOpne?"ChoiseLsnguageACT":"ChoiseLsnguageNotACT"} >
        
      <ul className="ChoiseLsnguage">
        
        <li className="selectitem">
         
          <label>
            <input type="radio" 
            
             name="option"
              hidden 
              checked={i18n.language==="en"}
             onChange={()=>{changeLanguages("en")}}  />
            <p className="LanguageSelect"  style={{textAlign:i18n.language==="en"?"left":"right"}}> {t('English')}</p>
          </label>
        </li>



        <li  className="selectitem">
          <label>
            <input type="radio"
         
              name="option"
               hidden
               checked={i18n.language==="ar"}
               onChange={()=>{changeLanguages("ar")}} />
            <p className="LanguageSelect" style={{textAlign:i18n.language==="en"?"left":"right"}}> {t('Arbic')}</p>
          </label>
        </li>

      </ul>
    </div>
  );
}
