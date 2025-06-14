'use client'
import React, { useState } from 'react'
const voiceOption =[
  {
    "value":"af_sarah",
    "name":"Sarah (female)",
  },
  {
    "value":"af_sky",
    "name":"Sky (female)",
  },
  {
    "value":"am_adam",
    "name":"Adam (female)",
  },
  {
    "value":"hf_alpha",
    "name":"Alpha (female)",
  },
  {
    "value":"hf_beta",
    "name":"Beta (female)",
  }
]
function Voice({onHandleInputChange}) {
  const [selectedVoice,setSelectedVoice] = useState()
  return (
    <div className='mt-5'>
      <h2>Video Voice</h2> 
      <p className='text-sm text-gray-400 '>Select the voice for Listen</p>
      <div className='grid grid-cols-2 gap-3'>
        {voiceOption.map((voice,index)=>(
          <h2 onClick={()=>{setSelectedVoice(voice?.name);
            onHandleInputChange('voice',voice.value)
          }}
          className={`cursor-pointer p-3 dark:bg-slate-900 dark:border-white rounded-lg hover:border ${voice.name==selectedVoice && 'border'}`} key={index}
          >{voice.name}</h2>
        ))}

      </div>
    </div>
  )
}

export default Voice