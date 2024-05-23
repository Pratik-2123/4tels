import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
import car1 from '../../assets/car1.jpg'
import car2 from '../../assets/car2.jpg'
import car3 from '../../assets/car3.jpg'
import car4 from '../../assets/car4.jpg'

import {motion} from 'framer-motion'


const buttonVariants = {
  hover: {
    scale: 1.05,
    textShadow: "0px 0px 8px rgba(255,255,255)",
    boxShadow: "0px 0px 8px rgba(255,255,255)",
    transition: {
      duration: 0.7,
      repeat: Infinity
    }
  }
}


const Campus = () => {

  return (
    <div className='Campus'>
      <div className="Gallery">
        <motion.img src={car1} alt="" whileHover={{scale: 1.2}}/>
        <motion.img src={car2} alt="" whileHover={{scale: 1.2}}/>
        <motion.img src={car3} alt="" whileHover={{scale: 1.2}}/>
        <motion.img src={car4} alt="" whileHover={{scale: 1.2}}/>
      </div>
      <motion.button className='btn dark-btn' variants={buttonVariants} whileHover="hover">See more here <img src={white_arrow} alt="" /></motion.button>
    </div>
  )
}

export default Campus
