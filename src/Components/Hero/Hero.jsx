import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'
import city from '../../assets/City Clutch.png'
import videoBg from '../../assets/city_clutch.mp4'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="overlay"></div>
      <video className= 'videoBg' src={videoBg} autoPlay loop muted/>
      <div className="hero-text">
      
      
      </div>
    </div>
  )
}

export default Hero
