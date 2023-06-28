import React from 'react'
import tech from '../../../assets/img/tech.png'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import './Home.css';
import Courses from '../Courses/Courses';
import Community from './Community/Community';
import Plan from '../Plans/Plan';

function Home() {
    const handleClick=()=>{
        window.open('https://www.youtube.com/@LamaDev','_blank')
    }
  return (
    <>
   <section>
    <div className="container">
<div className="home_container">
    <div className="home_content">
<h2 className='section_title'>Learn Everything For Free</h2>
<p>Matter Trending Technologies with Techflix AI.Invest Your Time and return skills</p>
 <div className="home_btns">
    <button className='register-btn' onClick={handleClick}>
        Get Started
    </button>
    <button className='register-btn'onClick={handleClick}>
        Watch now
    </button>
 </div>
 </div>

    <div className="home_img">
<div className="home-img-wrapper">
<div className="box-01">
    <div className="box-img">
<img src={tech} alt="" />
    </div>
</div>
<div className="whatsapp-container">
    <h5>500 + students</h5>
   <AiOutlineWhatsApp color='green'/>
</div>

<div className="support">
    <h5>Active Support</h5>
</div>
</div>
    </div>
</div>



    </div>
   </section>
   <Courses/>
  <Community/>
  <Plan/>
   </>
  )
}

export default Home