import React from 'react'
import ChangePassword from './ChangePassword'
import EmailStatic  from './EmailStatic'
export default function Changinfoaccount({email,setPassword,setChangePassword,setConfirmPassword}) {
  return (
    <div>
<EmailStatic email={email}/>
        <ChangePassword setConfirmPassword={setConfirmPassword} setChangePassword={setChangePassword} setPassword={setPassword}/>
    </div>
  )
}
