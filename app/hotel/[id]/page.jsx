import React from 'react'
// import { useRouter, usePathname } from 'next/navigation'

import HotelDetails from '@/components/Hotels/Mobile/HotelDetails'
const Hotel = () => {
    return (
    <>
    {/* // Desktop layout */}
     <div className='hidden lg:block'>
     Desktop
     </div>
    {/* // Mobile layout */}
     <div className='lg:hidden'>
     <HotelDetails/>
     </div>
    </>

  )
}

export default Hotel