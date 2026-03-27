import React from 'react'
import { useTranslation } from 'react-i18next'
export default function ItemVideo({FullSecreen ,fullvideo,PlayVideoClick,playVideo,CurrentTimeAdd,CurrentTimeSub}) {
  const {t}=useTranslation()
  return (
  <div className='item-video'>
    <div className='Full-Screen' onClick={FullSecreen}>
{
  !fullvideo?(<i title={t('Full Secreen')} class="ri-fullscreen-fill"></i>):(<i title={t('out Full Secreen')} class="ri-fullscreen-exit-fill"></i>)
}
    </div>
    <div className='rang'>
      <input 
      className='progres'
      type="range"
      min={0}
      step={0.1}
      // value={0}
      />
    </div>
      <p className='TimeVideo'></p>
      
<div className="play-video" >
<i onClick={CurrentTimeAdd}  class="ri-replay-10-line "></i>
  {
    !playVideo?(  <i onClick={PlayVideoClick} title={t('Play')} class="ri-play-fill "></i>):(  <i title={t('Stop')} onClick={PlayVideoClick} class="ri-pause-line"></i>)
  }
<i onClick={CurrentTimeSub} class="ri-forward-10-line "></i>


</div>


      </div>
  )
}
