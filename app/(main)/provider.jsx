'use client'
import { SidebarProvider } from '@/@/components/ui/sidebar'
import React, { useEffect } from 'react'
import Appsidebar from './_components/AppSidebar'
import AppHeader from './_components/AppHeader'
import { useAuthContext } from 'app/provider'
import { useRouter } from 'next/navigation'
function DashboardProvider({children}) {
  const user =  useAuthContext();
  const router =  useRouter()
  useEffect(()=>{
     user && checkUserIsAuthenticated()
  },[user])
  const checkUserIsAuthenticated = ()=>{
    if(!user){
     router.push('/')
    }
  }
  return (
    <SidebarProvider>
        <Appsidebar />
    <div className='w-full'>
      <AppHeader />
      <div className="p-10">
      {children}
      </div>
       </div>
    </SidebarProvider>
  )
}

export default DashboardProvider