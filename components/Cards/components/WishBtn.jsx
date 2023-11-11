"use client";
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';

import { useToast } from "@/components/ui/use-toast"


const WishBtn = () => {

  const [AddtoWishlist, setAddtoWishlist] = useState(false);

  const { toast } = useToast()


  return (
    <>
    <button onClick={() => 
      {
      setAddtoWishlist(!AddtoWishlist),
      toast({
          variant : 'destructive',
          title: "Wishlist Updated",
        })}
     } className='absolute z-50 top-3 right-3'>
    {AddtoWishlist ? <Image width="25" height="25" src="https://img.icons8.com/ios/150/FFFFFF/like--v1.png" alt="like--v1"/> : <Image width="25" height="25" src="https://img.icons8.com/ios-filled/150/FA5252/filled-like.png" alt="filled-like"/> }
    </button>
    </>
  )
}

export default WishBtn