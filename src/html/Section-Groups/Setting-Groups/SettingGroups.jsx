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
        <i class="ri-file-copy-line" onClick={CopyHandler}></i>
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
