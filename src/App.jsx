  //  import page
  import IndexPage from "./html/Main/page/IndexPage"
  import PostDocementPage from "./html/Main/page/PostDocementPage"
  import SerchGroups from "./html/Main/page/SerchGroups"
  import CreatGroups from "./html/Main/page/CreatGroups"
  import Profile from "./html/Main/page/Profile"
  import Login from "./html/Main/page/LogInAndRegester/Login"
  import Regester from "./html/Main/page/LogInAndRegester/Regester"
  import MainResetPassword from "./html/Main/page/ResetAndForgetPassword.jsx/MainResetPassword"
 import MainForgetPaassword from "./html/Main/page/ResetAndForgetPassword.jsx/MainForgetPaassword"
 import SectionGroups from "./html/Main/page/Section-Groups/SectionGroups"
  // import tolls
  import { Route,Routes } from "react-router-dom"
  import {useEffect} from 'react'
  import { useTranslation } from 'react-i18next';

  function App() {
    const Language=localStorage.getItem("Lag")
    const {i18n}=useTranslation()
    useEffect(()=>{
      if(Language){

        i18n.changeLanguage(Language) 
      }else{
        i18n.changeLanguage("en") 
      }
  },[])
    return (
      <Routes>
      <Route path="/" element={<IndexPage/>} />
      <Route path="DocementPost" element={<PostDocementPage/>} />
      <Route path="Serch-Groupe" element={<SerchGroups/>}/>
      <Route path="Creat-Groups" element={<CreatGroups/>} />
      <Route path="Profile/:id" element={<Profile/>} />
      <Route path="Log-in" element={<Login/>}/>
      <Route path="sing-up" element={<Regester/>}/>
      <Route path="Reset-Password" element={<MainResetPassword/>}/>
      <Route path="Forget-password" element={<MainForgetPaassword/>}/>
      <Route path="Section-Group/:Group_code" element={<SectionGroups/>}/>

      

    </Routes>
    )
  }

  export default App
