import {useState} from 'react'
import { useTranslation } from 'react-i18next'
const CommentingPrivileges = ({Role,allow_comments,setallow_comments}) => {
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
          <h3>{t("Commenting permissions")}</h3>
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
            <h4>{t("Members are allowed to comment")}</h4>
            <input
              type="radio"
              name="CommentPermissions"
              value={"true"}
              onChange={e=>setallow_comments(e.target.value==="true")}
              checked={allow_comments===true}
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
            <h4>{t("Members are not allowed to comment")}</h4>
            <input
              type="radio"
              name="CommentPermissions"
              value={"false"}
              hidden
                 onChange={e=>setallow_comments(e.target.value==="true")}
              checked={allow_comments===false}
            />
          </label>
        </li>
      </ul>
    </div>
  );
}

export default CommentingPrivileges
