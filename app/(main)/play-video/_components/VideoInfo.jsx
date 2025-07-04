import { ArrowLeft, DownloadIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function VideoInfo({videoData}) {
  return <div className="p-5 border rounded-2xl">
    <Link href={'/dashboard'}>
    <h2 className="flex gap-2 items-center">
      <ArrowLeft/>
      Back To DashBoard
    </h2>
    </Link>
    <div className="flex flex-col gap-3">
      <h2 className="mt-5">Project Name:{videoData?.title}</h2>
      <p className="text-gray-500">Script:{videoData?.script}</p>
       <h2>Video Style : {videoData?.VideoStyle} </h2>
       <Button ><DownloadIcon/> Export & Download</Button>
    </div>
  </div>;
}

export default VideoInfo;
