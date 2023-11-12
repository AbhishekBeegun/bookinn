"use client"
import Image from 'next/image'
import React from 'react'

import { useRouter } from 'next/navigation'

const TopHeaderNav = () => {

    const Router = useRouter();

  return (
    <div className='flex justify-between items-center px-4 py-3'>
        <button onClick={() => Router.back()}>
         <Image width="22" height="22" src="https://img.icons8.com/ios-glyphs/130/1A1A1A/back.png" alt="back"/>
        </button>

        <div className='flex items-center gap-5'>
            <button onClick={() => alert("share btn click")}>
             <Image width="20" height="20" src="https://img.icons8.com/ios-glyphs/130/1A1A1A/share-rounded.png" alt="share-rounded"/>
            </button>
            <button onClick={() => alert("whistlist btn click")}>
             <Image width="22" height="22" src="https://img.icons8.com/ios/150/1A1A1A/hearts--v1.png" alt="hearts--v1"/>
            </button>
        </div>
    </div>
  )
}

export default TopHeaderNav