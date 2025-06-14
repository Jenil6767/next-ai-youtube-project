import { Button } from '@/components/ui/button'
import { Outdent } from 'lucide-react'
import React from 'react'
import Authentication from './authentication'

function Hero() {
  return (
    <div  className='p-10 flex flex-col items-center justify-center mt-24 md:px-20 lg:px-36 xl:px-48'>
    <h2 className='font-bold text-6xl text-center'>AI Yotube Video Generator</h2>
    <p className='mt-4 text-2xl text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur non pariatur dolores ipsam officiis cupiditate quidem quaerat reprehenderit aspernatur?</p>
     <div className='mt-7 gap-8 flex' > 
     <Button size="lg" variant='outline'>Explored</Button>
     <Authentication>

        <Button size="lg">Get Started</Button>
     </Authentication>
     </div>
    </div>
    
  )
} 

export default Hero 