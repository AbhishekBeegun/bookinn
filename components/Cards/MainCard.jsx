import React from 'react'
import Image from 'next/image'

import DiscountBadge from './components/DiscountBadge'
import MemberDiscount from './components/MemberDiscount'
import WishBtn from './components/WishBtn'
import Link from 'next/link'
import SponsoredBadge from './components/SponsoredBadge'

const MainCard = ({item ,index}) => {
  return (
    <div key={index} className='flex flex-col'>
    <div className='relative rounded-lg bg-slate-200 h-[150px]  lg:h-[200px]  xl:h-[250px] shadow' >
     <Image className='rounded-lg' src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-834441903532854078/original/103ec088-f215-4f14-9fbe-de5c89c94075.jpeg" layout='fill'
     objectFit='cover' alt='' />
     <SponsoredBadge/>
     <WishBtn/>
    </div>

    <div className='my-2'>
       <div className='flex items-center justify-between'>
        <div className='font-semibold'>
           <p className='text-sm lg:text-base'>Grand Baie,<span className='ml-1 text-xxs text-slate-400'>Mauritius</span></p>
        </div>

        <div className='flex items-center gap-1'>
            <Image width="15" height="15" src="https://img.icons8.com/ios-glyphs/150/1A1A1A/filled-star.png" alt="filled-star"/>
            <p className='font-semibold text-sm'>9.2/10</p>
        </div>
       </div>

        <div className='flex items-baseline gap-1 mb-2'>
            <p className='font-semibold'>Rs 5571 <span className='text-xs line-through text-slate-400'>Rs 6000</span></p>
            <p className='text-xxs'>per night</p>
        </div>

        <div className='flex gap-2 flex-row-reverse lg:flex-col justify-evenly'>
        <MemberDiscount/>
        <DiscountBadge/>
        </div>

    </div>
    </div>
  )
}

export default MainCard