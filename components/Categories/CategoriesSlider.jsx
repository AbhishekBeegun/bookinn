import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const CategoriesSlider = () => {

    const CatLinks = [
        {
          "icon": "https://img.icons8.com/ios/150/swimming.png",
          "text": "Pools"
        },
        {
          "icon": "https://img.icons8.com/ios/150/hut.png",
          "text": "Camping"
        },
        {
          "icon": "https://img.icons8.com/ios/150/island-on-water.png",
          "text": "Seaside"
        },
        {
          "icon": "https://img.icons8.com/ios/150/surfing.png",
          "text": "Activities"
        },
        {
          "icon": "https://img.icons8.com/ios/150/booking.png",
          "text": "Hotels"
        },
        {
          "icon": "https://img.icons8.com/ios/150/two-tickets.png",
          "text": "Events"
        },
        {
          "icon": "https://img.icons8.com/ios/150/tesla-model-3.png",
          "text": "Car Rental"
        },
        {
          "icon": "https://img.icons8.com/ios/150/cafe.png",
          "text": "Cafe"
        },
        {
          "icon": "https://img.icons8.com/ios/150/restaurant.png",
          "text": "Food"
        }
      ]
  return (
    <div className='flex gap-5 lg:gap-10 items-center pt-3 overflow-scroll'>
    {CatLinks.map( (item , index) => (
    <Link key={index} href={"£"} className='flex flex-col items-center justify-between gap-1 lg:gap-2 text-slate-500 hover:text-black'>
     <Image className='object-fit hidden lg:block' src={item.icon} width={25} height={25} alt={item.text} />
     <Image className='object-fit lg:hidden' src={item.icon} width={20} height={20} alt={item.text} />
     <p className='text-xxs lg:text-sm whitespace-nowrap font-medium'>{item.text}</p>
    </Link>
    ))}
    </div>
  )
}

export default CategoriesSlider