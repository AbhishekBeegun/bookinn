/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Overview = () => {

    const advantages = [
        {
          "icon": "https://img.icons8.com/ios-glyphs/130/1A1A1A/wi-fi-connected.png",
          "alt": "wi-fi-connected",
          "text": "Free Wifi"
        },
        {
          "icon": "https://img.icons8.com/ios-filled/150/1A1A1A/swimming-pool.png",
          "alt": "swimming-pool",
          "text": "Pool"
        },
        {
          "icon": "https://img.icons8.com/ios-glyphs/130/1A1A1A/sandwich.png",
          "alt": "sandwich",
          "text": "Breakfast"
        },
        {
          "icon": "https://img.icons8.com/ios-glyphs/130/1A1A1A/wi-fi-connected.png",
          "alt": "wi-fi-connected",
          "text": "Free Wifi"
        },
        {
          "icon": "https://img.icons8.com/ios-filled/150/1A1A1A/swimming-pool.png",
          "alt": "swimming-pool",
          "text": "Pool"
        },
        {
          "icon": "https://img.icons8.com/ios-glyphs/130/1A1A1A/sandwich.png",
          "alt": "sandwich",
          "text": "Breakfast"
        },
        {
            "icon": "https://img.icons8.com/ios-glyphs/130/1A1A1A/wi-fi-connected.png",
            "alt": "wi-fi-connected",
            "text": "Free Wifi"
          },
          {
            "icon": "https://img.icons8.com/ios-filled/150/1A1A1A/swimming-pool.png",
            "alt": "swimming-pool",
            "text": "Pool"
          },
          {
            "icon": "https://img.icons8.com/ios-glyphs/130/1A1A1A/sandwich.png",
            "alt": "sandwich",
            "text": "Breakfast"
          }
      ]
  return (
    <div className='shadow-lg border rounded-xl p-6 mb-4'>

     <div className='flex justify-between'>

      <div>
        <p className='text-3xl font-semibold text-blue-600 mb-4'>Seapoint Boutique Hotel</p>
        <p className='text-lg font-semibold mb-4'>Grand Baie, Mauritius</p>

        <div className='flex items-center gap-1 my-2'>
          <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/150/1A1A1A/filled-star.png" alt="filled-star"/>
           <p className='font-semibold text-base'>9.2/10</p>
        </div>

        <div className='my-4'>
         <p className='text-lg font-semibold mb-1 text-blue-600'>About this place</p>
         <p className='line-clamp-4 px-1 text-base text-slate-500 w-2/3'>Details About the plac eufec g  euyfge uyfgu ydfg dussd
         dosfihd soifhsdo ifsdfsdf
         dsfgsdhf jgsdhfsdf
         iugdsfhsd gfhsdf jhsd fkjhsdf
         jdhf sjsdfjsdh fjksdf hkjsfh sdoifh 
         vsdfh</p>
        </div> 
      </div>

      <div>
        <iframe className='rounded-lg mb-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7498.081602612113!2d57.5616217!3d-20.0068022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217dab788e8767f5%3A0xe9bad420106c8b56!2sPointe%20aux%20Canonniers%2C%20Grand%20Baie!5e0!3m2!1sfr!2smu!4v1699771089581!5m2!1sfr!2smu"  allowfullscreen="" loading="lazy" width="450px" height="200px" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p className='text-sm mb-2'>Point aux cannonier, Mauritius</p>

        <a href='' className='text-sm text-blue-600 underline'>
            View in map
        </a>
      </div>

     </div>

     <div className='w-1/2'>
      <p className='font-semibold text-lg'>Advantages</p> 

      <div className='grid grid-cols-3 gap-8 my-6'>
          {advantages.map((item, index) => (
          <div className='flex gap-2 items-center justify-around px-8' key= {index}>
           <img width="25" height="25" src={item.icon} alt={item.alt} />
           <p className='font-semibold text-xs'>{item.text}</p>
           </div>
           ))}
          </div>
     </div>
    </div>
  )
}

export default Overview