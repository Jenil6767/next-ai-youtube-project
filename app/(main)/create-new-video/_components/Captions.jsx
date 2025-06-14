'use client'
import React, { useState } from 'react'
const videoCaptions = [
    { caption: "Intro", style: "text-xl font-bold text-red-500  p-2 rounded" },
    { caption: "Scene 1", style: "text-lg font-semibold text-black-500  p-2 rounded" },
    { caption: "Scene 2", style: "text-lg font-semibold text-gray-500  p-2 rounded" },
    { caption: "Highlight", style: "text-xl font-bold text-yellow-500  p-3 rounded" },
    { caption: "Ending", style: "text-xl font-bold text-red-500  p-3 rounded" }
  ];
  
function Captions({onHandleInputChange}) {
    const [selectedCaption,setSelectedCaption] = useState()
  return (
    <div className='mt-5'>
        <h2>Captions Style</h2>
        <p className='text-sm text-gray-400 mb-1'></p>
        <div className='flex flex-wrap gap-4'>
            {videoCaptions.map((caption,index)=>(
                <div className={`p-2 hover:border dark:bg-slate-900 border-gray-400 cursor-pointer rounded-lg ${selectedCaption==caption.caption && 'border'}`} key={index}
                onClick={()=>{setSelectedCaption(caption.caption);
                    onHandleInputChange('caption',caption)
                }}
                >
                    <h2 className={caption.style}>{caption.caption}</h2>
                </div>
            ))}
        </div>
        </div>
  )
}

export default Captions