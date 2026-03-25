import { useTranslation } from "react-i18next";
export default function ChooseLevelGroup({IsClick,LevelGroups,setLevelGroups}) {

  // data static
  const Level = [{Level:"1"},{Level:"2"},{Level:"3"},{Level:"4"}];
  const {t}=useTranslation()



  return (
    <div
      className={
        !IsClick
          ? "ChooseLevelGroup ChooseLevelGroupAccept"
          : "ChooseLevelGroup ChooseLevelGroupNotAccept"
      }
    >
      <ul>
        {Level.map((item, index) => (
          <li key={index} className="ChooseLevel">
            <label className="ChooseLevelLable">
              <p>
                {t("Level")} {item.Level}{" "}
              </p>
              <input
                type="radio"
                name="Level"
                hidden
                value={item.Level}
                onChange={e=>setLevelGroups(e.target.value)}
                checked={LevelGroups === item.Level}
                required
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
