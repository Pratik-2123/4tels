import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import device_walk from '../../assets/device.jpg'


const About = ({setPlayState}) => {
  return (
    <div className='About'>
      <div className='about-left'>
        <img src={device_walk} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={() => {
          setPlayState(true)
        }} />
      </div>
      <div className='about-right'>
        <h3>About Product</h3>
        <h2>Lets Accelerate the unique experience of pleasurable car driving...</h2>
        <p>Our best selling product is the CityClutch - Automatic transmission at affordable cost.</p>
        <p>This patient product has been evolved over 12 years of research and development and in under constant improvements, keeping abreast with the changes in modern automobiles.</p>
        <p>Hundreds of car fitted free Demos and free RFQ No appoitment neccesary service on call 1 year warranty on kits.</p>
      </div>
    </div>
  )
}

export default About
