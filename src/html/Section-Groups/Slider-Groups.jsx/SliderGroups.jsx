import React from 'react'
import '../../../css/SectionGroup/SliderGroups.css'

import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom'
export default function SliderGroups({active,setactive,CanPost}) {
    const {t}=useTranslation()
   
  return (
    <div className="SliderGroups">
      <ul className="Slider-Group-item">
        <Link to={"/"}>
          <li title={t("back to Home")} className="selec-item backHome">
            <i class="ri-arrow-go-forward-fill"> </i>
          </li>
        </Link>

        <li
          className={`selec-item ${active === "Home" ? "Active-selec-item-Group" : ""}`}
          onClick={() => {
            setactive("Home");
          }}
        >
          <i class="ri-home-office-fill "> </i>
          <p>{t("Home")}</p>
        </li>

        <li
          style={{ display: CanPost ? "flex" : "none" }}
          className={`selec-item ${active === "Post" ? "Active-selec-item-Group" : ""}`}
          onClick={() => {
            setactive("Post");
          }}
        >
          <i class="ri-edit-2-fill">  </i>
          <p>{t("Post")}</p>
        </li>
        <li
          className={`selec-item ${active === "Members" ? "Active-selec-item-Group" : ""}`}
          onClick={() => {
            setactive("Members");
          }}
        >
          <i class="ri-team-fill"> </i>
          <p>{t("Members")}</p>
        </li>

        <li
          className={`selec-item ${active === "Setting" ? "Active-selec-item-Group" : ""}`}
          onClick={() => {
            setactive("Setting");
          }}
        >
          <i class="ri-list-settings-line"> </i>
          <p>{t("Setting")}</p>
        </li>
      </ul>
    </div>
  );
}
