import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
      <div className='w-full h-[80px] bg-transparent z-50'>
    <div className='container w-full h-full flex justify-between items-center'>
      <div>
        <a href='our-love' className='text-3xl text-white font-semibold font-caps'>Shakil & Kajol</a>
      </div>
      <div>
        <ul className='flex justify-center items-center gap-x-[32px]'>
          <li className='text-[18px] text-white font-normal font-roboto ease-linear duration-200 hover:text-fontColor'>
            <a href="">Home</a>
          </li>
          <li className='text-[18px] text-white font-normal font-roboto ease-linear duration-200 hover:text-fontColor'>
            <a href="#about-us">About us</a>
          </li>
          <li className='text-[18px] text-white font-normal font-roboto ease-linear duration-200 hover:text-fontColor'>
            <a href="">Our Story</a>
          </li>
          <li className='text-[18px] text-white font-normal font-roboto ease-linear duration-200 hover:text-fontColor'>
            <a href="">Timeline</a>
          </li>
          <li className='text-[18px] text-white font-normal font-roboto ease-linear duration-200 hover:text-fontColor'>
            <a href="">Contact us</a>
          </li>
        </ul>
      </div>
      <div>
        <Link className={'w-[130px] h-[45px] rounded-lg flex justify-center items-center bg-fontColor text-base text-BrandColor font-normal font-roboto border-[2px] border-fontColor ease-linear duration-200 hover:bg-transparent hover:text-fontColor'}>
        Send a Wish
        </Link>
      </div>
    </div>
      </div>

  )
}

export default Navbar