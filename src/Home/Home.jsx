import React from 'react'
import Banner from '../Component/Banner/Banner';
import AboutUs from "../Component/AboutUs/AboutUs";
import OurStory from "../Component/OurStory/Story";
import TimeLine from '../Component/TimeLine/TimeLine';
const Home = () => {
  return (
    <div>
        <Banner/>
        <AboutUs/>
        <OurStory/>
        <TimeLine/>
    </div>
  )
}

export default Home