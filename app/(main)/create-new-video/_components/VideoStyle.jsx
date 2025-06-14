'use client'
import Image from "next/image";
import React, { useState } from "react";
export const options = [
  {
    name: "Education",
    image: "/education.png",
  },
  {
    name: "Motivational",
    image: "/motivational.png",
  },
  {
    name: "Science",
    image: "/science.png",
  },
  {
    name: "Technology",
    image: "/technology.png",
  },
  {
    name: "Gaming",
    image: "/gaming.png",
  },
  {
    name: "Comedy",
    image: "/comedy.png",
  },
  {
    name: "LifeStyle",
    image: "/lifestyle.png",
  },
  {
    name: "Study",
    image: "/book.png",
  },
  {
    name: "waterfall",
    image: "/waterfall.png",
  }
];
function VideoStyle({ onHandleInputChange }) {
  const [selectedStyle,setSelectedStyle] = useState()
  return <div>
    <h2>Video Style</h2>
    <p className="text-sm text-gray-400 mb-1"></p>
     <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
      {options?.map((option,index)=>(
        <div key={index} className="mb-2 relative"
        onClick={()=>{setSelectedStyle(option.name);
          onHandleInputChange('videoStyle',option.name)
        }}
        >
         <Image src={option.image}
         alt={option.name}
         width={500}
         height={120}
         className={`object-cover h-[80px]
         lg:h-[90px]
         xl:h-[190px] rounded-lg p-1
         hover:border border-gray-300 cursor-pointer
         ${option.name==selectedStyle &&'border'}
         `}
         />
         <h2 className="absolute bottom-3 text-center w-full">{option.name}</h2>
         </div>
      ))}
     </div>
  </div>
}

export default VideoStyle;
