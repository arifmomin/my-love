import React from 'react';
import { FaHeart } from 'react-icons/fa';
import FirstMet from './OurStoryImage/first-met.svg';
import FirstDate from './OurStoryImage/first-date.jpg';
import Engegment from "./OurStoryImage/engagement.svg";
import marrigeProposal from "./OurStoryImage/marriage-proposal.svg"
const Story = () => {
  return (
    <div className='py-16'>
        <div className='container'>
            <div>
                <h2 className='heading'>Our Love Story</h2>
                <div className='flex justify-center items-center gap-x-4'>
                    <span className='w-[50px] h-[1px] bg-fontColor inline-block'></span>
                    <span className='text-base text-fontColor inline-block'><FaHeart/></span>
                    <span className='w-[50px] h-[1px] bg-fontColor inline-block'></span>
                </div>
            </div>
            <div className='max-w-[1250px] m-auto mt-10'>
                <div className='flex'>
                    <div className='w-1/2'>
                        <img className='w-full' src={FirstMet} alt="first-met.svg" />
                    </div>
                    <div className='p-[30px] flex-1'>
                        <div className='flex flex-col justify-center w-full h-full'>
                        <h2 className='story-title'>First time we met</h2>
                        <h3 className='text-xl text-black font-medium font-caps mt-2 mb-3'>Dec 12 2024</h3>
                        <p className='text-[18px] text-gray-500 font-normal font-roboto'>
                            The first time I saw her was at her home, where our families had arranged a gathering to finalize our marriage. It was a moment filled with excitement, curiosity, and a little nervousness. Among the lively conversations and warm hospitality, my eyes met hers, and in that instant, I knew this was the beginning of a beautiful journey. It wasn’t just a meeting—it was the start of our forever
                        </p>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='p-[30px] flex-1'> 
                        <div className='flex flex-col justify-center w-full h-full items-end'>
                        <h2 className='story-title'>First time we met</h2>
                        <h3 className='text-xl text-black font-medium font-caps mt-2 mb-3'>Dec 12 2024</h3>
                        <p className='text-[18px] text-gray-500 font-normal font-roboto text-end'>
                            The first time I saw her was at her home, where our families had arranged a gathering to finalize our marriage. It was a moment filled with excitement, curiosity, and a little nervousness. Among the lively conversations and warm hospitality, my eyes met hers, and in that instant, I knew this was the beginning of a beautiful journey. It wasn’t just a meeting—it was the start of our forever
                        </p>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <img className='w-full' src={FirstDate} alt="first-date.svg" />
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-1/2'>
                        <img className='w-full' src={Engegment} alt="engagement.svg" />
                    </div>
                    <div className='p-[30px] flex-1'>
                        <div className='flex flex-col justify-center w-full h-full'>
                        <h2 className='story-title'>First time we met</h2>
                        <h3 className='text-xl text-black font-medium font-caps mt-2 mb-3'>Dec 12 2024</h3>
                        <p className='text-[18px] text-gray-500 font-normal font-roboto'>
                            The first time I saw her was at her home, where our families had arranged a gathering to finalize our marriage. It was a moment filled with excitement, curiosity, and a little nervousness. Among the lively conversations and warm hospitality, my eyes met hers, and in that instant, I knew this was the beginning of a beautiful journey. It wasn’t just a meeting—it was the start of our forever
                        </p>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='p-[30px] flex-1'>
                        <div className='flex flex-col justify-center w-full h-full items-end'>
                        <h2 className='story-title'>First time we met</h2>
                        <h3 className='text-xl text-black font-medium font-caps mt-2 mb-3'>Dec 12 2024</h3>
                        <p className='text-[18px] text-gray-500 font-normal font-roboto text-end'>
                            The first time I saw her was at her home, where our families had arranged a gathering to finalize our marriage. It was a moment filled with excitement, curiosity, and a little nervousness. Among the lively conversations and warm hospitality, my eyes met hers, and in that instant, I knew this was the beginning of a beautiful journey. It wasn’t just a meeting—it was the start of our forever
                        </p>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <img className='w-full' src={marrigeProposal} alt="marrige-proposal.svg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Story