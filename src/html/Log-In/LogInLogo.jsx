import React from 'react'
import Logo from '../../assets/Logo.png'

export default function LogInLogo() {

  return (
    <div className='LogoIcon'>
      <img src={Logo} alt="" />
      <div className='TitleIcon'>
      <p> Computer<br/> Academic</p>
      <p>LOG-IN</p>

      </div>
    </div>
  )
}
