'use client'
import React, { useState } from 'react'
import Topic from './_components/Topic'
import VideoStyle from './_components/VideoStyle'
import Voice from './_components/Voice'
import Captions from './_components/Captions'
import { Button } from "@/components/ui/button"
import { Loader2Icon, WandSparkles } from 'lucide-react'
import Preview from './_components/Preview'
import axios from 'axios'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useAuthContext } from 'app/provider'

function CreateNewVideo() {
  const [formData,setFormData] = useState();
  const [loading,setLoading] = useState(false);
  const {user} =  useAuthContext()
  const createInitialVideoRecord = useMutation(api.videoData.CreateVideo)
  const onHandleInputChange = (fieldName,fieldValue)=>{
    setFormData(prev=>({
      ...prev,
      [fieldName]:fieldValue
    }))
    console.log(formData)
  } 
  const generateVideoData =async ()=>{
      if(user?.credits<=0){
        console.log('please add more credits')
        return
      }
      if(!formData?.voice||!formData?.caption||!formData?.videoStyle|| !formData?.topic|| !formData?.script){
          console.log('Enter All fields')
          return;
      }
      setLoading(true)
      const resp =  await createInitialVideoRecord({
        title:formData.title,
        topic:formData.topic,
        script:formData.script,
        VideoStyle:formData.videoStyle,
        caption:formData.caption,
        voice:formData.voice,
        uid:user?._id,
        createdBy:user?.email,
        credits:user?.credits
      })
      console.log(resp)
      const result = await axios.post('/api/generate-video-data',{
        ...formData,
        recordId:resp
      })
      console.log(result)
      setLoading(false)
  }
  return (
    <div>
        <h2 className='text-3xl'>Create new video</h2>
        {/* Topic */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
           <div className='col-span-3 p-7 border rounded-xl mt-8 h-[75vh] overflow-auto'>
        <Topic onHandleInputChange={onHandleInputChange}/>
        <VideoStyle onHandleInputChange={onHandleInputChange}/>
         <Voice onHandleInputChange={onHandleInputChange}/>
         <Captions onHandleInputChange={onHandleInputChange}/> 
           <Button className='w-full mt-3'
           disable={loading}
           onClick={generateVideoData}
           >{loading ?<Loader2Icon className='animate-spin' />:<WandSparkles/>} Generate Video</Button>
           </div>
          <div>
            <Preview formData={formData} />
          </div>
        </div>
    </div>
  )
}

export default CreateNewVideo