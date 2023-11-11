"use client"
import Image from 'next/image'
import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const MemberDiscount = () => {
  return (


    <Dialog>
    <DialogTrigger>
    <div className='flex items-center gap-1 justify-center px-4 md:px-4 lg:w-4/6 xl:w-3/6 bg-blue-600 text-white font-semibold rounded-full text-center py-1 whitespace-nowrap text-xxs lg:text-xs'>
      <p>Member Perks</p>
      <Image width="15" height="15" src="https://img.icons8.com/ios/150/FFFFFF/info.png" alt="info"/>
    </div>
    </DialogTrigger>
    <DialogContent>
    <DialogHeader>
      <DialogTitle>100 % Discount</DialogTitle>
      <DialogDescription>
      Because you are a member
      </DialogDescription>
      </DialogHeader>
    </DialogContent>
    </Dialog>
  )
}

export default MemberDiscount