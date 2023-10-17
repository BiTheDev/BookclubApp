import React from 'react'
import Header from '../../Components/Header/Header'
import WaveDivider from './Components/WaveDivider/WaveDivider'
import HeroSection from './Components/HeroSection/HeroSection'
import FeatureBooks from './Components/FeatureBooks/FeatureBooks'
import CommunityHighlight from './Components/CommunityHighlight/CommunityHighlight'
import UpcomingEvents from './Components/UpcomingEvents/UpcomingEvents'
import JoinUs from './Components/JoinUs/JoinUs'
import FAQs from './Components/FAQs/FAQs'
import Footer from '../../Components/Footer/Footer'

const LandingPage = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <WaveDivider invert={true}/>
        <FeatureBooks/>
        <CommunityHighlight/>
        <UpcomingEvents/>
        <JoinUs/>
        <FAQs/>
        <Footer/>
    </div>
  )
}

export default LandingPage