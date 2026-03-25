import React from 'react'
import TitleSelectLevel from './TitleSelectLevel'
import ChooseLevelGroup from './ChooseLevelGroup'
export default function SelectLevelGroup({IsClick,click,LevelGroups,setLevelGroups}) {
  return (
    <div className='SelectLevelGroup'>
      <TitleSelectLevel IsClick={IsClick} click={click}/>
      <ChooseLevelGroup LevelGroups={LevelGroups} IsClick={IsClick} setLevelGroups={setLevelGroups}/>

    </div>
  )
}
