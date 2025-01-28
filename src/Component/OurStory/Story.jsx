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
                        <h3 className='text-xl text-black font-medium font-caps mt-2 mb-3'>November 29 2024</h3>
                        <p className='text-[18px] text-gray-500 font-normal font-roboto'>
                            The first time I saw her was at her home, where our families had arranged a gathering to finalize our marriage. It was a moment filled with excitement, curiosity, and a little nervousness. Among the lively conversations and warm hospitality, my eyes met hers, and in that instant, I knew this was the beginning of a beautiful journey. It wasn’t just a meeting—it was the start of our forever
                        </p>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='p-[30px] flex-1'> 
                        <div className='flex flex-col justify-center w-full h-full items-end'>
                        <h2 className='story-title'>First time we Talk</h2>
                        <h3 className='text-xl text-black font-medium font-caps mt-2 mb-3'>December 12 2024</h3>
                        <p className='text-[18px] text-gray-500 font-normal font-roboto text-end'>
                        Our first conversation began with a simple 'Hello,' but it carried the weight of destiny. My sister had already handed over my Facebook ID to her, and when her friend request popped up, my heart skipped a beat. I gathered my courage and sent her a message, nervous yet excited. That first message was the start of something magical—little did I know, our families had already planned for us to be together. Every word we exchanged that day felt special, as if the universe had aligned to bring us closer.
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
                        <h2 className='story-title'>A Promise of Forever</h2>
                        <h3 className='text-xl text-black font-medium font-caps mt-2 mb-3'>Month Day Year</h3>
                        <p className='text-[18px] text-gray-500 font-normal font-roboto'>
                        The first time I saw her picture, I felt something I couldn’t explain—an instant connection, as if my heart recognized her even before we met. Her smile, her eyes—it was enough to make me realize she was special. When we finally started chatting on Messenger, every conversation felt like a new beginning. With every message, I got to know her better, and my feelings only grew stronger.
                        I knew I couldn’t wait any longer to tell her how I felt. So, one day, gathering all my courage, I expressed my heart. I told her how much she meant to me and how I wanted to spend the rest of my life with her. To my relief and happiness, she accepted my proposal, and in that moment, my world felt complete.
                        </p>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='p-[30px] flex-1'>
                        <div className='flex flex-col justify-center w-full h-full items-end'>
                        <h2 className='story-title'>A Family’s Blessing</h2>
                        <h3 className='text-xl text-black font-medium font-caps mt-2 mb-3'>Dec 12 2024</h3>
                        <p className='text-[18px] text-gray-500 font-normal font-roboto text-end'>
                        Our relationship blossomed in a way that only families can understand. It all started when my mother and aunt, along with my mom's sister-in-law, went to visit her house. It was during that visit that my mother saw her, and without a doubt, she instantly liked her.
                        Soon after, my mom showed me her picture, and I, too, felt a connection. It was an undeniable feeling of admiration and respect. My heart knew then that she was someone special.
                        From that moment, things moved quickly. My mom, with a heart full of love and warmth, arranged our engagement, gifting her a piece of jewelry as a symbol of our family’s blessing. It wasn’t just an engagement; it was a beautiful union of families, a bond that was built on trust, love, and mutual respect.
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