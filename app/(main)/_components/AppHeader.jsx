"use client"
import React from 'react'
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useAuthContext } from 'app/provider'
import Image from 'next/image';

function AppHeader() {
  const { user } =  useAuthContext();
  return (
    <div className='p-3 flex justify-between items-center'>
        <SidebarTrigger />
        <Image src={user?.photoURL  || "/nextImage.svg"} alt='user' className='rounded-full' width={40} height={40}/>
        
        
        </div>
  )
}

export default AppHeader