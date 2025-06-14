'use client'
import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupContent,
    SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
  } from "@/components/ui/sidebar"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Gem, HomeIcon, LucideFileVideo, Search, WalletCards } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuthContext } from 'app/provider'
const MenuItem = [
  {
    title:'Home',
    url:'/dashboard',
    icon:HomeIcon
  },
  {
    title:'Create New Video',
    url:'/create-new-video',
    icon:LucideFileVideo
  },
  {
    title:'Explore',
    url:'/explore',
    icon:Search
  },
  {
    title:'Billing',
    url:'/billing',
    icon:WalletCards
  }
]
function Appsidebar() {
  const path = usePathname()
  const {user} =  useAuthContext()
  console.log(path)
  return (
    <Sidebar>

    <SidebarHeader>
      <div className="flex items-center gap-3">

      <Image src={'/logo.svg'}  alt='logo' width={40} height={40} priority></Image>
      <h2 className='font-bold text-2xl'>video generator</h2>
      {/* <h2 className='font-bold text-2xl'>video generator</h2> */}
      {/* <h2 className='font-bold text-2xl'>AI generated Videos</h2> */}

      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup >
      <SidebarGroupContent>
        <div className='mx-3 mt-8'>
          <Link href={'/create-new-video'}>
          <Button className='w-full'>+ Create New video</Button>
          </Link> 
        </div>
        <SidebarMenu>
          {MenuItem.map((menu,index)=>(
            <SidebarMenuItem key={menu.id || index} className='mt-3 mx-3'>
              <SidebarMenuButton isActive={path == menu.url} className='p-5'>
                <Link href={menu?.url} className='flex items-center gap-4 p-3'>
                <menu.icon />
                <span>{menu?.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        </SidebarGroupContent>      
      </SidebarGroup>
      <SidebarGroup />
    </SidebarContent>
    <SidebarFooter >
      <div className='p-5 border rounder-lg mb-6 bg-gray-800'>
        <div className='flex items-center justify-between'>
          <Gem  className='text-gray-400'/>
          <h2 className='text-gray-400' >{user?.credits} Credit limit</h2>
        </div>
        <Button  className='w-full mt-3'> Buy More Credits</Button>
      </div>
    </SidebarFooter>
  </Sidebar>  )
}

export default Appsidebar