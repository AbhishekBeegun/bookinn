import React from 'react'
import CategoriesSlider from '@/components/Categories/CategoriesSlider'
import Filter from '@/components/Filters/Filter'
import MainCard from '@/components/Cards/MainCard'
import HomeAdWide from '@/components/Banners/Ads/HomeAdWide'
import MainCardSkeleton from '@/components/Skeletons/MainCardSkeleton'
import SearchBarHome from '@/components/Search/SearchBarHome'

const page = () => {

    const data = [1,2,3,4,5,6,7,8];

    const nodata = data.length == 0;

  return (
    <>
    <div className='flex items-baseline justify-between pt-3 lg:pt-4'>
    <CategoriesSlider/>
    <Filter/>
    </div>


    <SearchBarHome/>
    <div className='my-4 lg:my-6 grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-5'>
     {nodata &&
     <>
      <MainCardSkeleton/>
      <MainCardSkeleton/>
      <MainCardSkeleton/>
      <MainCardSkeleton/>
     </> 
     }
    {data.length > 0 && data.map((item , index) => (
    
     // eslint-disable-next-line react/jsx-key
     <MainCard item={item} index={index}/>

    ))}
    </div>


    <HomeAdWide />
    </>
  )
}

export default page