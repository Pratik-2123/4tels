import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import {motion} from 'framer-motion'
import vikas from '../../assets/Vikas_Patel.jpg'
import logo from '../../assets/logo.png'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -75) {
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if(tx < 0) {
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }



  return (
    <div className='Testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <motion.div className="slide">
                    <div className="user-info">
                        <img src={vikas} alt="" className='vikas'/>
                        <div>
                            <h2>Vikas Patel</h2>
                            <span>Founder & Director [4Tel's Automation]</span>
                        </div>
                    </div>
                    <p>The very own founder of 4Tels Automation, Mr. Vikas K Patel was born on 25th march 1996, he was too passionate and dedicated towards his working and goals since his late school days, looking towards his passion in automobile automation he started 4Tels Automation in 2018. Our Founder says 'If you never fail, you never succeed'</p>
                </motion.div>
            </li>
            <li>
                <motion.div className="slide">
                    <div className="user-info">
                    <img src={logo} alt="" className='logo'/>
                        <div>
                            <h3>About Us</h3>
                            {/* <span>Founder & CEO [4Tel's Automation]</span> */}
                        </div>
                    </div>
                    <p>4Tels Automation is an Indian based automation company provudes several services for most comfortable driving experience. 4Tels Automation was founded by a middle class, small town boy, named Mr. Vikas Patel, on late 2018 as an automobile modification company "4Tels Automation". We have designed several bikes and Cars. As market needs some evolution as market grows generation to generation. We have shaken hands with several personalities and founded most suitable products like CITYCLUTCH. Not only in India, we have grown our roots to Indonesia as well.
                    </p>
                </motion.div>
            </li>
            <li>
                <motion.div className="slide">
                    <div className="user-info">
                        <img src={logo} alt="" className='logo'/>
                        <div>
                            <h3>Our Vision & Mission</h3>
                            {/* <span>Founder & CEO [4Tel's Automation]</span> */}
                        </div>
                    </div>
                    <p>Our Vision is to provide a unique experience of regular car driving, We had already captured market of india and nepal, and now setting a vision to move globally. </p>
                </motion.div>
            </li>
            <li>
                <motion.div className="slide">
                    <div className="user-info">
                        <img src={logo} alt="" className='logo'/>
                        <div>
                            <h3>Our Core Values</h3>
                            {/* <span>Founder & CEO [4Tel's Automation]</span> */}
                        </div>
                    </div>
                    <p>4Tels Automation's basic values of communication. commitment and great client service run through everything they do. We pay close attention to our customers need and take to holistic approach to thier comfortable driving requirements. We're proud of our unwavering commitmentto maximising the value of our client's automotive interests</p>
                </motion.div>
            </li>
            
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
