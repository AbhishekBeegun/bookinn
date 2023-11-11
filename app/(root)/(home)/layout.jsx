import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import { Toaster } from "@/components/ui/toaster"


const layout = ({children}) => {
  return (
    <div className=''>
    <Navbar/>
    <div className='px-4 lg:px-32 xl:px-64 overflow-scroll'>
    {children}
    <Toaster />
    </div>
    </div>
  )
}

export default layout