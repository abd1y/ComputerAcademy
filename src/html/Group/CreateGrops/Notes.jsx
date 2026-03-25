import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Notes() {
    const {t}=useTranslation()
  return (
    <div className=' notes'>
     <p> <span>*</span>  {t("The maximum number of characters for the group name is")} <span>26</span> {t("characters")}   </p>
     <p><span>*</span> {t("The minimum number of characters to create a group name is")} <span>3</span> {t("characters")}</p>
     <p><span>*</span> {t("You can choose only one academic level")}.</p>
    </div>
  )
}
