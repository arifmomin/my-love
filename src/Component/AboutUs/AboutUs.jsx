import React from 'react'
import GroomImage from "../AboutUs/AboutUsImage/groom.svg"
import BrideImage from "../AboutUs/AboutUsImage/Bride.svg"
import { FaFacebookF, FaHeart, FaInstagram, FaTwitter } from 'react-icons/fa'
const AboutUs = () => {
  return (
    <div id='about-us' className='w-full mt-12 relative overflow-hidden'>
      <div className='container'>
        <div>
          <h2 className='heading'>About Us</h2>
            <div className='flex justify-center items-center gap-x-4'>
                <span className='w-[50px] h-[1px] bg-fontColor inline-block'></span>
                <span className='text-base text-fontColor inline-block'><FaHeart/></span>
                <span className='w-[50px] h-[1px] bg-fontColor inline-block'></span>
            </div>
        </div>
        <div className='flex flex-col max-w-[900px] m-auto items-center gap-y-[30px] mt-10'>
          <div className='flex items-center gap-[30px]'>
            <div className='max-w-full w-[276px] h-[276px]'>
              <img className='w-full' src={GroomImage} alt='groom.svg' />
            </div>
            <div className='flex flex-col flex-1'>
              <h2 className='text-[36px] text-black font-semibold font-roboto'>About The <span className='text-fontColor'>Groom</span></h2>
              <p className='text-base text-gray-500 font-normal font-roboto mt-2 mb-4'>I’m a dreamer and a believer in love, and my journey became even more meaningful when she came into my life. Her presence inspires me to be the best version of myself every day. With her by my side, I know there’s nothing we can’t achieve together.</p>
              <div className='flex items-center gap-x-8'>
                <h3 className='text-xl text-fontColor font-medium font-caps'> ~ Arif Momin</h3>
                <div className='flex gap-x-2'>
                  <a className='social-icon'>
                    <FaFacebookF/>
                  </a>
                  <a className='social-icon'>
                  <FaTwitter/>
                  </a>
                  <a className='social-icon'>
                  <FaInstagram/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=' flex items-center gap-[30px]'>
            <div className='flex flex-col flex-1 items-end'>
              <h2 className='text-[36px] text-black font-semibold font-roboto'>About The <span className='text-fontColor'>Bride</span></h2>
              <p className='text-base text-gray-500 font-normal font-roboto mt-2 mb-4 text-end'>She is my light, my strength, and my biggest inspiration. Her kindness and love have transformed my world in ways I never thought possible. She’s the reason I smile brighter and dream bigger every single day.</p>
              <div className='flex items-center gap-x-8'>
                <div className='flex gap-x-2'>
                  <a className='social-icon'>
                    <FaFacebookF/>
                  </a>
                  <a className='social-icon'>
                  <FaTwitter/>
                  </a>
                  <a className='social-icon'>
                  <FaInstagram/>
                  </a>
                </div>
                <h3 className='text-xl text-fontColor font-medium font-caps'> ~ Kajol Akter</h3>
              </div>
            </div>
            <div className='max-w-full w-[276px] h-[276px]'>
              <img className='w-full' src={BrideImage} alt='Bride.svg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs