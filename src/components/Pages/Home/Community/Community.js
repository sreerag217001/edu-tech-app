import React from 'react'
import './Community.css';
import tech_community from '../../../../assets/img/tech community.jpg'
function Community() {
  const handleClick = () => {
    window.open('https://chat.whatsapp.com/H1qQxZZiv5y0x5XE4dOg0b', '_blank');
  }
  return (
    <div className="container">
      <div className="start-wrapper">
        <div className="start-img">
          <img src={tech_community} alt="" />
        </div>
        <div className="start-content">
          <h2 className="section-title">
            Join Our Free Tech Community
          </h2>
          <p>Unlock the power of knowledge and innovation by joining our vibrant and free whatsapp tech community</p>
        </div>
        <button className="register-btn" onClick={handleClick}>
          Join Now
        </button>
      </div>
    </div>
  )
}

export default Community