import React from 'react'
import Gallery from './components/Gallery'
import Overview from './components/Overview'
import HotelsDetailsAds from '@/components/Banners/Ads/HotelsDetailsAds'
const HotelDetails = () => {
  return (
    <div>
      <Gallery />
      <Overview/>
      <HotelsDetailsAds/>
    </div>
  )
}

export default HotelDetails