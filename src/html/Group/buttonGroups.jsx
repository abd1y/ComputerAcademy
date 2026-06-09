import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
export default function ButtonGroups() {
  const {t}=useTranslation()
  return (
    <div className="buttonGroups" id="buttonGroups">
      <Link to={"Serch-Groupe"}>
        <button
          className="ButtonSearch"
          title={t("Searching for study groups")}
        >
          <svg
            className="Icon-Button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path>
          </svg>
        </button>
      </Link>
      <Link to={"/Creat-Groups"}>
        <button className="ButtonCreate" title={t("Create study groups ")}>
          <svg
            className="Icon-Button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"></path>
          </svg>
        </button>
      </Link>
    </div>
  );
}
