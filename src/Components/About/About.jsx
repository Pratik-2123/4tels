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
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, excepturi et! Rem natus ex culpa harum vitae veniam magni. Ipsa dignissimos odio sed sit quas.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at nesciunt numquam omnis consequuntur modi.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, delectus obcaecati. Veniam reprehenderit aut numquam corrupti minus doloribus? Facere, asperiores.</p>
      </div>
    </div>
  )
}

export default About
