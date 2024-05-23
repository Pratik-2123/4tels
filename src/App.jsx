// import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import BookNow from './Components/Book Now/BookNow';


const App = () => {

  // const [playState, setPlayState] = useState(false)

  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/booknow" element={<BookNow />}/>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
