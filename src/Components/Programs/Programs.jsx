import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'
import city_clutch from '../../assets/City.png'
import {animate, motion, useAnimate, useScroll, useTransform} from "framer-motion"
import download from '../../assets/Download_details.png'
import book from '../../assets/Book_now.png'
import fill from '../../assets/Fill_details.png'

import React, { useRef } from 'react'


const Programs = () => {

  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset:["0 1", "1.33 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0,1], [0.5,1])

  return (
    <motion.div className='Programs' 
    ref={ref} 
    style={{
      scale:scaleProgress, opacity:scrollYProgress
      }}
    >
      <motion.div className="program" whileHover={{scale: 1.2}}>
        <img src={city_clutch} alt="" />
        <div className="caption">
            <img src={download} alt="" />
            <p>Download Details</p>
        </div>
      </motion.div> 

      <motion.div className="program" whileHover={{scale: 1.2}}>
        <img src={city_clutch} alt="" />
        <div className="caption">
            <img src={book} alt="" />
            <p>Book Now</p>
        </div>
      </motion.div>

      <motion.div className="program" whileHover={{scale: 1.2}}>
        <img src={city_clutch} alt="" />
        <div className="caption">
            <img src={fill} alt="" />
            <p>Fill Details</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Programs
