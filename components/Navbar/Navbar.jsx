import React from 'react'
import ProfileAvatar from '../Profile/ProfileAvatar'
import SearchBarFake from '../Search/SearchBarFake'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='px-4 lg:px-32 xl:px-64 py-1 lg:py-6 flex justify-between items-center border-b'>
    
     <Link href={"/"} className='flex items-center'>
     <Image width={35} height={35} src="https://img.icons8.com/laces/150/0057FB/b.png" alt="b"/>
     <p className='text-blue-600 text-base lg:text-2xl font-semibold'>Bookinn</p>  
     </Link>

     <SearchBarFake/>

     <div className='flex items-center gap:2 lg:gap-10'>
     <Link className='px-3 py-2 hidden lg:block text-xs lg:text-base whitespace-nowrap font-medium hover:bg-blue-100 hover:rounded-full' href={"host"}>
        Host your home
     </Link>
     <ProfileAvatar/>
     </div>
    </div>
  )
}

export default Navbar