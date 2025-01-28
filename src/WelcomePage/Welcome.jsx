import React, { useState } from 'react';
import leftImage from "../WelcomePage/WelcomeImage/walpaper-left.svg";
import RightImage from "../WelcomePage/WelcomeImage/walpaper-right.svg";
import { ImArrowLeft2 } from "react-icons/im";
import { SuccessToast, ErrorToast } from '../Toastify/Toastify';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  const [princeNameinput, setprinceNameinput] = useState('');
  const [princessNameinput, setprincessNameinput] = useState('');
  const [princeNameError, setprinceNameError] = useState(false);
  const [princessNameError, setprincessNameError] = useState(false);

  const handleprinceInput = () => {
    const normalPrinceName = princeNameinput.trim().toLowerCase();
    const validPrinceName = ["arif", "arif momin", "shakil"];
    const finalPrinceName = validPrinceName.includes(normalPrinceName);

    const normalPrincessName = princessNameinput.trim().toLowerCase();
    const validPrincessName = ["kajol", "Airen", "Airen Akter kajol", "Airen Akter", "kajol Akter"];
    const finalPrincessName = validPrincessName.includes(normalPrincessName);

    if (!princeNameinput) {
      ErrorToast("Prince name is required. Please enter a name.");
      setprinceNameError(true);
    } else if (!finalPrinceName) {
      ErrorToast(`${princeNameinput} is not a valid name. Please try again!`);
      setprinceNameError(true);
    } else if (!princessNameinput) {
      setprincessNameError(true);
      ErrorToast("Princess name is required. Please enter a name.");
    } else if (!finalPrincessName){
      setprincessNameError(true);
      ErrorToast(`${princessNameinput} is not a valid name. Please try again!`);
    }else {
      SuccessToast(`${princeNameinput} & ${princessNameinput} is a valid name. Thank you!`);
      setprinceNameError(false);
      setprincessNameError(false);
      setprinceNameinput('');
      setprincessNameinput('')
      navigate('/our-love')
    }
  };

  return (
    <div className='w-full h-screen bg-BrandColor'>
      <div className='container'>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <div className='w-full flex flex-col justify-center items-center mb-4'>
          <h2 className='text-[36px] sm:text-[56px] text-fontColor font-semibold font-greatvibs'>Our Journey of Love</h2>
          <h3 className='text-[26px] sm:text-[36px] text-black font-semibold font-roboto'>Shakil <span className='text-fontColor'>&</span> Kajol</h3>
        </div>
        <div className='flex justify-center items-center sm:gap-x-[25px] md:gap-x-[35px] lg:gap-x-[50px] gap-x-[15px]'>
          <div className='welcome-LeftName relative flex flex-col justify-center items-center gap-y-[30px]'>
            <div className='welcome-image w-[130px] h-[130px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]'>
              <img className='w-full h-full' src={leftImage} alt={leftImage} />
            </div>
            <div className='input-left relative h-[30px] border border-fontColor rounded-md sm:border-none sm:rounded-none sm:h-[43px] md:h-[50px] lg:h-[60px] w-full max-w-[130px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] flex z-50'>
              <input
                className={`w-full sm:w-[200px] md:w-[242px] lg:w-[280px] h-full pl-[10px] sm:pl-[25px] md:pl-[30px] lg:pl-[35px] bg-transparent text-sm sm:text-[18px] font-medium font-robot
                  ${princeNameError ? 'text-red-500 placeholder:text-red-600' : 'text-fontColor placeholder:text-fontColor'}`}
                type="text"
                name="name"
                id="firstName"
                placeholder='Enter Prince Name'
                value={princeNameinput}
                onChange={(e) => setprinceNameinput(e.target.value)}
              />
              <div className='hidden sm:flex justify-center items-center flex-1 duration-300 ease-linear'>
                <span className='text-base md:text-xl text-fontColor font-medium font-roboto'>
                  AK
                </span>
              </div>
            </div>
          </div>
          <div className='welcome-RightName relative flex flex-col justify-center items-center gap-y-[30px]'>
          <div className='welcome-image w-[130px] h-[130px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]'>
              <img className='w-full h-full' src={RightImage} alt={RightImage} />
            </div>
            <div className='input-left relative h-[30px] border border-fontColor rounded-md sm:border-none sm:rounded-none sm:h-[43px] md:h-[50px] lg:h-[60px] w-full max-w-[130px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] flex z-50'>
              <input
                className={`w-full sm:w-[200px] md:w-[242px] lg:w-[280px] h-full pl-[10px] sm:pl-[25px] md:pl-[30px] lg:pl-[35px] bg-transparent text-sm sm:text-[18px] font-medium font-robot
                  ${princessNameError ? 'text-red-500 placeholder:text-red-600' : 'text-fontColor placeholder:text-fontColor'}`}
                type="text"
                name="name"
                id="firstName"
                placeholder='Enter Princess Name'
                value={princessNameinput}
                onChange={(e) => setprincessNameinput(e.target.value)}
              />
              <a
                href='#'
                className='hidden sm:flex justify-center items-center flex-1 text-base md:text-2xl text-fontColor duration-300 ease-linear'
                onClick={handleprinceInput}
              >
                <span className='rotate-180'>
                  <ImArrowLeft2 />
                </span>
              </a>
            </div>
          </div>
        </div>
        <a
          href='#'
          className='w-full max-w-[275px] mt-4 h-[30px] rounded-md bg-fontColor text-white flex justify-center items-center sm:hidden'
          onClick={handleprinceInput}
        >
          <span className='rotate-180'>
            <ImArrowLeft2 />
          </span>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Welcome;
