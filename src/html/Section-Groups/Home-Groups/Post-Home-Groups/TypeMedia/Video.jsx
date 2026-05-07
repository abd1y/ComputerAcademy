  import { useEffect, useRef } from "react";


  import '@vime/core/themes/default.css';
  import '@vime/core/themes/light.css';
  import { defineCustomElements } from '@vime/core/loader';
import {  Player,
  Ui,
DefaultUi , Video} from '@vime/react';

  export default function VideoMidea({ LinkVideo }) {
    const playerRef = useRef(null);


    return (
      <div className="Type-Media-video">

          <Player className="Video" ref={playerRef} theme="dark" playsinline
          style={{
            '--vm-player-theme': '#164465',
            '--vm-slider-thumb-bg': '#065084',
          }}
          >
<Video>

          <source data-src={LinkVideo} type="video/mp4" />
      
</Video>

      <Ui>
        <DefaultUi  noPip={true}/>
      </Ui>
    </Player>

      </div>
    );
  }