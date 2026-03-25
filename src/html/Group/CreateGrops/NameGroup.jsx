import React from 'react'
import { useTranslation } from 'react-i18next'
export default function NameGroup({Groupname,setGroupname}) {
  const {t}=useTranslation()
  return (
    <div className="NameGroup">
      <h1> {t("Name")} :</h1>
      <input
        type="text"
        maxLength={26}
        minLength={5}
        autoComplete="off"
        value={Groupname}
        onChange={e=>setGroupname(e.target.value)}
        placeholder={t("Enter Group Name")}
        required
      />
    </div>
  );
}
