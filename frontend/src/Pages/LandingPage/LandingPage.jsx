import React from 'react'
import Header from '../../Components/Header/Header'
import WaveDivider from './Components/WaveDivider/WaveDivider'
import HeroSection from './Components/HeroSection/HeroSection'
import FeatureBooks from './Components/FeatureBooks/FeatureBooks'
import CommunityHighlight from './Components/CommunityHighlight/CommunityHighlight'
import UpcomingEvents from './Components/UpcomingEvents/UpcomingEvents'
import JoinUs from './Components/JoinUs/JoinUs'
import FAQs from './Components/FAQs/FAQs'

const LandingPage = () => {
  return (
    <div>
        <HeroSection/>
        <WaveDivider invert={true}/>
        <FeatureBooks/>
        <CommunityHighlight/>
        <UpcomingEvents/>
        <JoinUs/>
        <FAQs/>
    </div>
  )
}

export default LandingPage