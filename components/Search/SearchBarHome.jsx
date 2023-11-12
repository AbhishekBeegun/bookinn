/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { useState ,useEffect } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import  DateRange  from "react-day-picker"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const SearchBarHome = () => {

  const [Region, setRegion] = useState('Select Region')
  const [NumAdult, setNumAdult] = useState(1)
  const [NumChild, setNumChild] = useState(0)
  const [NumPeople, setNumPeople] = useState( NumAdult+NumChild )


  const [date, setDate] = useState({
    from: new Date(2023, 10, 11),
    to: addDays(new Date(2023, 10, 11), 11),
  })

  useEffect(() => {
    setNumPeople(NumAdult + NumChild);
  }, [NumAdult, NumChild]);


  const decrementAdult = () => {
    if (NumAdult > 0) {
      setNumAdult(NumAdult - 1);
    }
  };

  const decrementChild = () => {
    if (NumChild > 0) {
      setNumChild(NumChild - 1);
    }
  };

  return (
    <div className='hidden my-4 p-6 rounded-lg lg:flex flex-col items-center justify-center '>


    <div className='bg-blue-600 h-[270px] w-full rounded-xl'>
    <h1 className='text-center mt-12 text-4xl xl:text-5xl font-semibold text-white'>Your cosiest holiday ever</h1>
    <h2 className='px-20 xl:px-56 mt-8 text-center text-lg font-semibold text-white'>Get inspired with our choice of Hotel, Villa, Appartments, perfect holiday at the best price in Mauritius and Rodrigues.</h2>
    </div>
    <div className='border bg-white flex items-center px-8 rounded-full shadow py-3 -mt-8'>
    <DropdownMenu>
      <DropdownMenuTrigger className='font-semibold mr-6 hover:bg-slate-50 px-4 hover:border py-1 rounded-full focus:outline-none'>
      {Region}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className='text-base px-4 py-2'>Search by Region</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className='grid grid-cols-3'>
          <DropdownMenuItem>
          <div onClick={() => setRegion('Pamplemousse')} className='h-[120px] cursor-pointer relative rounded-lg w-[120px] bg-blue-500 overflow-hidden'>
            <img className='object-fit scale-150 grayscale hover:grayscale-0' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Pamplemousses_in_Mauritius.svg/500px-Pamplemousses_in_Mauritius.svg.png'/>
            <p className='absolute bottom-2 left-1 font-semibold text-sm'>Pamplemousse</p>
          </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <div onClick={() => setRegion('Riviere du Rempart')} className='h-[120px] cursor-pointer relative rounded-lg w-[120px] bg-blue-500 overflow-hidden'>
            <img className='object-fit scale-150 grayscale hover:grayscale-0' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Riviere_du_Rempart_in_Mauritius.svg/500px-Riviere_du_Rempart_in_Mauritius.svg.png'/>
            <p className='absolute bottom-2 left-1 font-semibold text-sm'>Riviere du Rempart</p>
          </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <div onClick={() => setRegion('Port Louis')} className='h-[120px] cursor-pointer relative rounded-lg w-[120px] bg-blue-500 overflow-hidden'>
            <img className='object-fit scale-150 grayscale hover:grayscale-0' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Port_Louis_in_Mauritius.svg/500px-Port_Louis_in_Mauritius.svg.png'/>
            <p className='absolute bottom-2 left-1 font-semibold text-sm'>Port Louis</p>
          </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <div onClick={() => setRegion('Moka')} className='h-[120px] cursor-pointer relative rounded-lg w-[120px] bg-blue-500 overflow-hidden'>
            <img className='object-fit scale-150 -translate-y-14 grayscale hover:grayscale-0' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Moka_in_Mauritius.svg/500px-Moka_in_Mauritius.svg.png'/>
            <p className='absolute bottom-2 left-1 font-semibold text-sm'>Moka</p>
          </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <div onClick={() => setRegion('Flacq')} className='h-[120px] cursor-pointer relative rounded-lg w-[120px] bg-blue-500 overflow-hidden'>
            <img className='object-fit scale-150 -translate-y-14 grayscale hover:grayscale-0 -translate-x-6' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Flacq_in_Mauritius.svg/500px-Flacq_in_Mauritius.svg.png'/>
            <p className='absolute bottom-2 left-1 font-semibold text-sm'>Flacq</p>
          </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <div onClick={() => setRegion('Black River')} className='h-[120px] cursor-pointer relative rounded-lg w-[120px] bg-blue-500 overflow-hidden'>
            <img className='object-fit scale-150 -translate-y-20 translate-x-6 grayscale hover:grayscale-0' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Black_River_in_Mauritius.svg/500px-Black_River_in_Mauritius.svg.png'/>
            <p className='absolute bottom-2 left-1 font-semibold text-sm'>Black River</p>
          </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <div onClick={() => setRegion('Plaine Wilhems')} className='h-[120px] cursor-pointer relative rounded-lg w-[120px] bg-blue-500 overflow-hidden'>
            <img className='object-fit scale-150 -translate-y-20 translate-x-6 grayscale hover:grayscale-0' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Plaines_Wilhems_in_Mauritius.svg/500px-Plaines_Wilhems_in_Mauritius.svg.png'/>
            <p className='absolute bottom-2 left-1 font-semibold text-sm'>Plaine Wilhems</p>
          </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <div onClick={() => setRegion('Grand Port')} className='h-[120px] cursor-pointer relative rounded-lg w-[120px] bg-blue-500 overflow-hidden'>
            <img className='object-fit scale-150 -translate-y-20 grayscale hover:grayscale-0' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Grand_Port_in_Mauritius.svg/500px-Grand_Port_in_Mauritius.svg.png'/>
            <p className='absolute bottom-2 left-1 font-semibold text-sm'>Grand Port</p>
          </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <div onClick={() => setRegion('Savanne')} className='h-[120px] cursor-pointer relative rounded-lg w-[120px] bg-blue-500 overflow-hidden'>
            <img className='object-fit scale-150 -translate-y-20 grayscale hover:grayscale-0' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Savanne_in_Mauritius.svg/500px-Savanne_in_Mauritius.svg.png'/>
            <p className='absolute bottom-2 left-1 font-semibold text-sm'>Savanne</p>
          </div>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>

    <div className={cn("grid gap-2")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] rounded-full justify-center text-left mr-6",
              !date && "text-muted-foreground focus:outline-none"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>

    <DropdownMenu>
      <DropdownMenuTrigger className='font-semibold mr-6 hover:bg-slate-50 px-4 hover:border py-1 rounded-full'>{NumPeople} People</DropdownMenuTrigger>
      <DropdownMenuContent>
      <DropdownMenuLabel className='text-base px-4 py-2'>No of People</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <div className='flex items-center gap-4 text-base'>
          <Button
           onClick={(e) => {e.preventDefault(), decrementAdult()}}
           className='bg-white text-black rounded-full border p-4 hover:text-white hover:bg-blue-600'>-</Button>
          <p className='font-semibold'>Adults : {NumAdult}</p>
          <Button
           onClick={(e) => {e.preventDefault(), setNumAdult(NumAdult + 1)}}
           className='bg-white text-black rounded-full border p-4 hover:text-white hover:bg-blue-600'>+</Button>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem>
      <div className='flex items-center gap-4 text-base'>
          <Button 
          onClick={(e) => {e.preventDefault(), decrementChild()}}
          className='bg-white text-black rounded-full border p-4 hover:text-white hover:bg-blue-600'>-</Button>
          <p className='font-semibold'>Children : {NumChild}</p>
          <Button 
          onClick={(e) => {e.preventDefault(), setNumChild(NumChild + 1)}}
          className='bg-white text-black rounded-full border p-4 hover:text-white hover:bg-blue-600'>+</Button>
        </div>
      </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <button
    onClick={() => alert('Search BTN click')}
     className='bg-blue-600 text-white font-semibold px-6 py-2 rounded-full'>
      Search
    </button>
    

    </div>
    </div>
  )
}

export default SearchBarHome