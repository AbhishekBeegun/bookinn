/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'


const Overview = () => {
  return (
    // Images + title + loaction + reviews + perks
    <div className='flex flex-col'>
      <div className=''>
        <img src='https://a0.muscache.com/im/pictures/dacc8fb8-1aaa-431a-8e6d-1d482c9d90fe.jpg' alt=''/>
      </div>

      <div className='px-4 pt-4'>
       <p className='font-semibold text-lg'>Seapoint Boutique Hotel</p>
       <p className='text-sm'>Pointe Aux Canonnier, Mont Choisy</p>
       <div className='flex items-center gap-1'>
          <Image width="15" height="15" src="https://img.icons8.com/ios-glyphs/150/1A1A1A/filled-star.png" alt="filled-star"/>
           <p className='font-semibold text-xs'>9.2/10</p>
        </div>

        <div>
          <p className='font-semibold text-sm'>Advantages</p>

          <div className='grid grid-cols-3'>
            <div>
              Advantages
            </div>
            <div>
              Advantages
            </div>
            <div>
              Advantages
            </div>
            <div>
              Advantages
            </div>
            <div>
              Advantages
            </div>
            <div>
              Advantages
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Overview