import React from 'react'
import './About.css';
import kristhina from '../../../assets/img/kristhina.png'
function About() {
    return (
        <div className="container">
            <div className="about-us-container">
                <div className="team-members">
                    <h2>Our Team</h2>
                    <div className="member-card">
                        <img src={kristhina} alt="" className="member-image" />
                        <h3 className="member-name">Kristina helinski</h3>
                        <p className="member-role">CO-FOUNDER</p>
                    </div>
                </div>
                <div className="about-us-description">
                    <h1 className="about-us-heading">About Us</h1>
                    <p>
                        With a passion for empowering learners of all ages, Our mission is to make education accessible,engaging,and personalized through our cutting-edge educational technology platform
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About