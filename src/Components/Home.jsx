import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Programs from './Programs/Programs'
import Title from './Title/Title'
import About from './About/About'
import Campus from './Campus/Campus'
import Testimonials from './Testimonials/Testimonials'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
// import Book from './Components/Book Now/book'
import VideoPlayer from './Video Player/VideoPlayer'

function Home() {
    const [playState, setPlayState] = useState(false)
    return (
        <>
        <Navbar />
        <Hero /><div className="container">
            <Title subtitle={"Our Program"} title={"What we Offer"} />
            <Programs />
            <About setPlayState={setPlayState} />
            <Title subtitle={"Products Gallery"} title={"Car Photos"} />
            <Campus />
            <Title subtitle={"Testimonials"} title={"What Student Says"} />
            <Testimonials />
            <Title subtitle={"Contact Us"} title={"Get in Touch"} />
            <Contact />
            <Footer />
        </div><VideoPlayer playState={playState} setPlayState={setPlayState} /></>
  )
}

export default Home