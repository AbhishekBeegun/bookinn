'use client'
import React from 'react'
import Image from 'next/image'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import SearchForm from './SearchForm'


const SearchBarFake = () => {
  return (
   <Sheet>
    <SheetTrigger
     className='hidden lg:flex items-center justify-center gap-8 px-6 py-1 bg-white shadow border rounded-full text-black text-sm font-medium'>
       <p>Region</p>
       <p>Date</p>
       <p>No Person</p>
       <div className='p-2 rounded-full bg-blue-600'>
       <Image width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/ffffff/search--v1.png" alt="search--v1"/>
       </div>
     </SheetTrigger>
     <SheetContent side='top'>
       <SheetHeader className='flex items-center justify-center'>
         <SheetTitle>
         <div className='flex items-center'>
         <Image width={35} height={35} src="https://img.icons8.com/laces/150/0057FB/b.png" alt="b"/>
         <p className='text-blue-600 text-base lg:text-2xl font-semibold'>Bookinn</p>             
         </div>
         </SheetTitle>
         <SheetDescription>
           <SearchForm/>
         </SheetDescription>
        </SheetHeader>
     </SheetContent>
    </Sheet>
       
  )
}

export default SearchBarFake