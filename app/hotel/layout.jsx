import React from 'react'
import Navbar from '@/components/Navbar/Navbar'


const layout = ({children}) => {
  return (
    <div className=''>
     <div className='hidden lg:block'>
     <Navbar/>
     </div>
     <div className='lg:px-32 xl:px-64 overflow-scroll'>
      {children}
     </div>
    </div>
  )
}

export default layout