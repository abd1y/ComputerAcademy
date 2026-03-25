import {useState} from 'react'
import { useTranslation } from 'react-i18next'
const PublishingPermissions = ({Role,setAllow_post,allow_post}) => {
    const [isopen,setisOpen]=useState(false)
    const {t} =useTranslation()
    const openHandler=()=>{
        setisOpen(!isopen)
    }
  return (
    <div
      className="permissions"
      style={{ display: Role === "Admin" ? "block" : "none" }}
    >
      <ul className="Publishing-permissionsUl">
        <div className="Title-permissions" onClick={openHandler}>
          <h3>{t("Publishing permissions")}</h3>
          {isopen ? (
            <i class="ri-arrow-up-s-fill"></i>
          ) : (
            <i class="ri-arrow-down-s-fill"></i>
          )}
        </div>
        <li>
          <label
            className={
              isopen ? "permissions-label" : "permissions-label-notActev"
            }
          >
            <h4>{t("Members are allowed to post")}</h4>
            <input
              type="radio"
              name="PublishingPermissions"
              value={"true"}
              checked={allow_post===true}
              onChange={(e) => setAllow_post(e.target.value === "true")}
              hidden
            />
          </label>
        </li>
        <li>
          <label
            className={
              isopen
                ? "permissions-label LAST-LABEL"
                : "permissions-label-notActev"
            }
          >
            <h4>{t("Only Admin  are allowed to post")}</h4>
            <input
              type="radio"
              name="PublishingPermissions"
              value={"false"}
                checked={allow_post===false}
              onChange={(e) => setAllow_post(e.target.value === "true")}
              hidden
            />
          </label>
        </li>
      </ul>
    </div>
  );
}

export default PublishingPermissions
