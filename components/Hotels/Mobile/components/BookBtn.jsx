import React from 'react'

const BookBtn = () => {
  return (
    <div className='fixed bottom-0 border-t flex justify-between items-center w-full text-sm px-4 py-3 bg-white'>
      
    <div className='flex flex-col'>

     <div className='flex items-baseline gap-1 '>
        <p className='font-semibold '>Rs 5571 <span className='text-xs line-through text-slate-400'>Rs 6000</span></p>
        <p className='text-xxs'>per night</p>
     </div>

     <div>
        Date
     </div>
    </div>

    <button className='bg-blue-600 text-white rounded-lg px-6 py-2 font-semibold'>
     Book
    </button>
    </div>
  )
}

export default BookBtn