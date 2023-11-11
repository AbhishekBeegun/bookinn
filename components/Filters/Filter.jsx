"use client";
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

const Filter = () => {
  return (
    <Sheet>
    <SheetTrigger
    className='hidden lg:flex items-center justify-center gap-2 border rounded-lg p-4 '>
     <Image width="20" height="20" src="https://img.icons8.com/ios/150/sorting-options--v1.png" alt="sorting-options--v1"/>    
     <p className='text-sm'>Filters</p>
  
    </SheetTrigger>
    <SheetContent>
    <SheetHeader>
      <SheetTitle>Filters</SheetTitle>
      <SheetDescription>
  
        Form Here

    </SheetDescription>
    </SheetHeader>
    </SheetContent>
    </Sheet>
  )
}

export default Filter