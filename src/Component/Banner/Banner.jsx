import React from 'react'
import Navbar from "../Navbar/Navbar"

const Banner = () => {
  return (
    <div className='Banner w-full h-screen relative overflow-hidden'>
      <div className='z-[9999]'>
        <Navbar/>
      </div>
      <div className='container'>
       <div className='flex flex-col justify-center items-center pt-20 md:pt-40 pb-20 md:pb-36'>
        <h2 className='text-2xl md:text-[36px] text-fontColor font-medium font-greatvibs'>Shakil & Kajol</h2>
       <h1 className='text-[36px] leading-[42px] md:text-[66px] md:leading-[76px] text-fontColor font-semibold font-caps max-w-[923px] text-center mt-4 md:mt-0 mb-6 md:mb-10'>
        From Strangers to Soulmates The Journey of Us
        </h1>
        <p className='text-[15px] md:text-[18px] text-gray-300 font-normal font-caps max-w-[900px] text-center'>
        What started as a chance meeting quickly turned into something magical. From awkward first conversations to countless unforgettable moments, our journey has been nothing short of extraordinary. This is the story of how two strangers found their way to each other and created a love that feels like home.
        </p>
       </div>
      </div>
    </div>
  )
}

export default Banner