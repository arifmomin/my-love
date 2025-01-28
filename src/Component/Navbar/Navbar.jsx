import React, { useEffect, useState } from 'react'
import { FaRegHeart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom'
const Navbar = () => {
const [menuOpen, setmenuOpen] = useState (false);
const [menuClose, setmenuClose] = useState (false);
const handlemenuopen = () =>{
  setmenuOpen (!menuOpen);
}
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const handleScroll = () => {
      let scrolly = window.scrollY;
      if (scrolly > 100) {
        navbar.classList.add("navbar-fixed");
      } else {
        navbar.classList.remove("navbar-fixed");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
      <div className='navbar w-full py-5 bg-transparent z-50'>
      { isVisible && (
        <div className='back-to-top text-3xl text-black fixed bottom-[10%] right-[5%]' onClick={scrollToTop}>
        <FaRegHeart/>
        </div>
    )}
    <div className='container w-full h-full flex justify-between items-center'>
      <div>
        <a href='our-love' className='Logo text-xl md:text-3xl text-white font-semibold font-caps'>Shakil & Kajol</a>
      </div>
      <div className='hidden md:block'>
        <ul className='menu-list flex justify-center items-center gap-x-[32px]'>
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
      <div className='text-2xl sm:hidden text-white' onClick={handlemenuopen}>
      <GiHamburgerMenu/>
      </div>
      <div className='hidden md:block'>
        <Link className={'w-[130px] h-[45px] rounded-lg flex justify-center items-center bg-fontColor text-base text-BrandColor font-normal font-roboto border-[2px] border-fontColor ease-linear duration-200 hover:bg-transparent hover:text-fontColor'}>
        Send a Wish
        </Link>
      </div>
    </div>
      </div>

  )
}

export default Navbar