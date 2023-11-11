import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"


const MainCardSkeleton = () => {
  return (
    <div className='flex flex-col gap-1'>
    <Skeleton className="h-[170px] rounded-lg w-full" />
    <Skeleton className="h-[20px] rounded-lg w-2/3" />
    <Skeleton className="h-[20px] rounded-lg w-1/2" />
    <Skeleton className="h-[20px] rounded-lg w-1/3" />

    </div>
  )
}

export default MainCardSkeleton