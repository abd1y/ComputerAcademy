import {useState} from 'react'
import { useTranslation } from 'react-i18next'
import PublishingPermissions from './PublishingPermissions'
import CommentingPrivileges from './CommentingPrivileges'
import BtmSettingGroups from './BtmSettingGroups'
import API from '../../Axios'
import { useParams } from 'react-router-dom'
const SettingGroups = ({
  Role,
  dataGroup,
  setgroup_name,
  group_name,
  SetteingGroupAPI,
  Lodingbtm,
  setAllow_post,
  allow_post,
  allow_comments,
  setallow_comments
}) => {
  const [copy, IsCopy] = useState(false);
  const [Name_group, setNameGroup] = useState(dataGroup.group_name);
  setgroup_name(Name_group);
  const { Group_code } = useParams();
  const Text = `#${Group_code}`;
  const CopyHandler = () => {
    navigator.clipboard.writeText(Text);
    IsCopy(true);
    setTimeout(() => {
      IsCopy(false);
    }, 2000);
  };
  const { t, i18n } = useTranslation();
  return (
    <div
      className="Setting-Groups"
      dir={i18n.language === "en" ? "ltr" : "rtl"}
    >
      <h2>{t("Information Groups")}</h2>
      <h3> {t("Name Group")}:</h3>
      <input
        type="text"
        autoCapitalize="off"
        value={group_name}
        onChange={(e) => setNameGroup(e.target.value)}
        readOnly={Role !== "Admin"}
      />
      <h3> {t("Level")}: </h3>
      <input
        type="nuber"
        autoCapitalize="off"
        value={dataGroup.Level}
        readOnly={Role !== "Admin"}
      />
      <h3> {t("Groups Code")}:</h3>
      <div className="Code-Groups">
        <input type="text" autoCapitalize="off" value={Text} readOnly />
        <i onClick={CopyHandler}>

          <svg width={22} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>
        </i>
      </div>
      <h5 className="Copy-Done" style={{ display: copy ? "block" : "none" }}>
        {t("The Copying successful")} ✅
      </h5>
      <h2 style={{ display: Role === "Admin" ? "block" : "none" }}>
        {t("User permissions")}
      </h2>

      <PublishingPermissions
        Role={Role}
        setAllow_post={setAllow_post}
        allow_post={allow_post}
      />
      <CommentingPrivileges 
      Role={Role}
      setallow_comments={setallow_comments}
  allow_comments={allow_comments}
      />
      <BtmSettingGroups 
        Lodingbtm={Lodingbtm}
        Role={Role}
        SetteingGroupAPI={SetteingGroupAPI}
      />
    </div>
  );
};

export default SettingGroups
