'use client'
import React, { useState } from "react";
import { Player } from "@remotion/player";
import RemotionComposition from '../../../_components/RemotionComposition'
import { useVideoConfig } from "remotion";
function RemotionPlayer({videoData}) {
  const [duration,setDurationFrame] = useState(100);
    return (
    <div>
      <Player
        component={RemotionComposition}
        durationInFrames={Number(duration.toFixed(0)) + 100}
        compositionWidth={720}
        compositionHeight={1280}
        fps={30}
        style={{
            width:'25vw',
            height:'70vh'
        }}
        controls
        inputProps={{
            videoData:videoData,
            setDurationFrame:(frameValue)=>setDurationFrame(frameValue)
        }}
      />
    </div>
  );
}

export default RemotionPlayer;
