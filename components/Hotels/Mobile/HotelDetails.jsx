import React from 'react'
import TopHeaderNav from './components/TopHeaderNav'
import Overview from './components/Overview'
import BookBtn from './components/BookBtn'
import Details from './components/Details'

const HotelDetails = () => {
  return (
    <div className='relative mb-20'>
    <TopHeaderNav/>
    <Overview/>
    <BookBtn/>
    <Details/>
    </div>
  )
}

export default HotelDetails