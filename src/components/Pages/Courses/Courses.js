import React from 'react'
import './Courses.css';
import artificial from '../../../assets/img/artificial.avif'
import software from '../../../assets/img/software.png'
import digital from '../../../assets/img/digital.jpg'
import hackers from '../../../assets/img/hackers.avif'

function Courses() {
    const courseData = [
        {
            title: "AI Development",
            desc: "Master AI Development",
            img: artificial,
        },
        {
            title: "DIGITAL MARKETING",
            desc: "Master Digital MARKETING !!!",
            img: software,
        },
        {
            title: "CYBER SECURITY",
            desc: "Master Cyber SECURITY!!!",
            img: digital,
        },
        {
            title: "SOFTWARE DEVELOPMENT",
            desc: "Master Software Development!!!",
            img: hackers,
        },
    ];
    return (
        <div className="container course-container">
            <div className="course-top">
                <h2 className="section-title">
                    Our Free Courses
                </h2>
                <p>The Top Trending Free Courses with Free Certificate</p>
                <div className="course-wrapper">
                    {
                        courseData.map((course, index) => (
                            <div className="course-item" key={index}>
                                <span className="course-icon">
                                    <img src={course.img} alt="" />
                                </span>
                                <div className="course-content">
                                    <h4>{course.title}</h4>
                                    <p>{course.desc}</p>
                                </div>


                            </div>
                        ))
                    }





                </div>
            </div>
        </div>
    )
}

export default Courses