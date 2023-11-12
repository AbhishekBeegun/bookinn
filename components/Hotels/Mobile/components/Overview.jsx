/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"


const Overview = () => {

  const advantages = [
    {
      "icon": "https://img.icons8.com/ios-glyphs/130/1A1A1A/wi-fi-connected.png",
      "alt": "wi-fi-connected",
      "text": "Free Wifi"
    },
    {
      "icon": "https://img.icons8.com/ios-filled/150/1A1A1A/swimming-pool.png",
      "alt": "swimming-pool",
      "text": "Pool"
    },
    {
      "icon": "https://img.icons8.com/ios-glyphs/130/1A1A1A/sandwich.png",
      "alt": "sandwich",
      "text": "Breakfast"
    },
    {
      "icon": "https://img.icons8.com/ios-glyphs/130/1A1A1A/wi-fi-connected.png",
      "alt": "wi-fi-connected",
      "text": "Free Wifi"
    },
    {
      "icon": "https://img.icons8.com/ios-filled/150/1A1A1A/swimming-pool.png",
      "alt": "swimming-pool",
      "text": "Pool"
    },
    {
      "icon": "https://img.icons8.com/ios-glyphs/130/1A1A1A/sandwich.png",
      "alt": "sandwich",
      "text": "Breakfast"
    }
  ]
  return (
    // Images + title + loaction + reviews + perks
    <div className='flex flex-col'>
      <div className=''>
        <img src='https://a0.muscache.com/im/pictures/dacc8fb8-1aaa-431a-8e6d-1d482c9d90fe.jpg' alt=''/>
      </div>

      <div className='px-4 pt-4'>
       <p className='font-semibold text-xl text-blue-600'>Seapoint Boutique Hotel</p>
       <p className='text-sm my-1'>Pointe Aux Canonnier, Mont Choisy</p>
       <div className='flex items-center gap-1 my-2'>
          <Image width="15" height="15" src="https://img.icons8.com/ios-glyphs/150/1A1A1A/filled-star.png" alt="filled-star"/>
           <p className='font-semibold text-xs'>9.2/10</p>
        </div>
        <Separator className='my-3' />
        <div>
          <p className='font-semibold text-lg text-blue-600'>Advantages</p>

          <div className='grid grid-cols-2 gap-4 my-3'>
          {advantages.map((item, index) => (
          <div className='flex gap-2 items-center justify-between px-4' key= {index}>
           <img width="16" height="16" src={item.icon} alt={item.alt} />
           <p className='font-semibold text-xs'>{item.text}</p>
           </div>
           ))}
          </div>

          <p className='text-xs'>See more</p>
        </div>

        <Separator className='my-3' />

      </div>

    </div>
  )
}

export default Overview