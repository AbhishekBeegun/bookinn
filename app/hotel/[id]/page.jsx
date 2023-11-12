import React from 'react'
// import { useRouter, usePathname } from 'next/navigation'

import HotelDetails from '@/components/Hotels/Mobile/HotelDetails'
import HotelDetailsD  from '@/components/Hotels/Desktop/HotelDetails'

const Hotel = () => {
    return (
    <>
    {/* // Desktop layout */}
     <div className='hidden lg:block'>
     <HotelDetailsD/>
     </div>
    {/* // Mobile layout */}
     <div className='lg:hidden'>
     <HotelDetails/>
     </div>
    </>

  )
}

export default Hotel