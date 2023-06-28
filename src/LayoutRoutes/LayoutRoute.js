import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from '../components/Pages/Home/Home'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Plan from '../components/Pages/Plans/Plan'
import Courses from '../components/Pages/Courses/Courses'
import About from '../components/Pages/AboutUs/About'
import Contact from '../components/Pages/ContactUs/Contact'
import Support from '../components/Pages/Support/Support'
function LayoutRoute() {
  return (
   <Router>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Plan/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/support' element={<Support/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default LayoutRoute