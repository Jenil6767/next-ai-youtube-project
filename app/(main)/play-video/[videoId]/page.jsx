'use client'
import React, { useEffect, useState } from "react";
import VideoInfo from "../_components/VideoInfo";
import RemotionPlayer from "../_components/RemotionPlayer";
import { useParams } from "next/navigation";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";

function playVideo() {
  const { videoId } = useParams();
  const convex = useConvex();
  const [videoData,setVideoData] = useState()
  
  useEffect(()=>{
    videoId&&getVideoById()
  },[videoId])
  const getVideoById = async () => {
    const result = await convex.query(api.videoData.getVideoById, {
      videoId: videoId
    });
    console.log(result)
    setVideoData(result)
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <RemotionPlayer videoData={videoData} />
      </div>
      <div>
        <VideoInfo videoData={videoData} />
      </div>
    </div>
  );
}

export default playVideo;
