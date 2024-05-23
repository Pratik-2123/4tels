import './Programs.css'
import city_clutch from '../../assets/City.png'
import {animate, motion, useAnimate, useScroll, useTransform} from "framer-motion"
import download from '../../assets/Download_details.png'
import book from '../../assets/Book_now.png'
import fill from '../../assets/Fill_details.png'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import downloadImg from '../../assets/Download_Details_img.png'
import fillDetailsImg from '../../assets/Fill_details_img.png'
import BookNowImg from '../../assets/Book_now_img.png'
import cityClutchPdf from '../../assets/CITYCLUTH.pdf'

const Programs = () => {

  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset:["0 1", "1.33 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0,1], [0.5,1])

  return (
    <motion.div className='Programs' 
    // ref={ref} 
    // style={{
    //   scale:scaleProgress, opacity:scrollYProgress
    //   }}
    >
      <motion.div className="program" whileHover={{scale: 1.2}}>
        <img src={downloadImg} alt="" />

        <a href={cityClutchPdf} download="CityClutch">
        <div className="caption">
            <img src={download} alt="" />
            <p>Download Details</p>
        </div>
        </a>

      </motion.div> 

      <motion.div className="program" whileHover={{scale: 1.2}}>
        <Link to='/booknow'>
        <img src={BookNowImg} alt="" />
        <div className="caption">
            <img src={book} alt="" />
            <p>Book Now</p>
        </div></Link>
      </motion.div>

      <motion.div className="program" whileHover={{scale: 1.2}}
        onClick={
          () => {
            window.scrollTo({ top : 3100, behavior: 'smooth' })
          }
        }
      >
      
        <img src={fillDetailsImg} alt="" />
        <div className="caption">
            <img src={fill} alt="" />
            <p>Fill Details</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Programs
