import React from 'react'
import { Separator } from "@/components/ui/separator"

const Details = () => {
  return (
    <div className='px-4'>
     <div className=''>
        <p className='text-lg font-semibold mb-1 text-blue-600'>About this place</p>
        <p className='line-clamp-3 px-1 text-sm text-slate-500'>Details About the plac eufec g  euyfge uyfgu ydfg dussd
        dosfihd soifhsdo ifsdfsdf
        dsfgsdhf jgsdhfsdf
        iugdsfhsd gfhsdf jhsd fkjhsdf
        jdhf sjsdfjsdh fjksdf hkjsfh sdoifh 
        vsdfh</p>
     </div>    
     <Separator className='my-3' />
     <div>
        <p className='text-lg font-semibold mb-1 text-blue-600'>Location</p>
        <p className='text-sm mb-2'>Point aux cannonier, Mauritius</p>
        <iframe className='rounded-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7498.081602612113!2d57.5616217!3d-20.0068022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217dab788e8767f5%3A0xe9bad420106c8b56!2sPointe%20aux%20Canonniers%2C%20Grand%20Baie!5e0!3m2!1sfr!2smu!4v1699771089581!5m2!1sfr!2smu"  allowfullscreen="" loading="lazy" width="250px" referrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
    </div>
  )
}

export default Details