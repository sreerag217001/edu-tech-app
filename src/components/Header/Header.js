import React from 'react'
import skill from '../../assets/img/skill.png'
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
    const nav_title = [{
        path: '/', display: 'Home'
    },
    {
        path: '/services', display: 'Services'
    },
    {
        path: '/courses', display: 'Courses'
    },
    {
        path: '/about', display: 'About Us'
    }
    ]
    return (
        <header className='header'>
            <div className="container">
                <div className="nav_container">
                    <div className="logo">
                        <div className="logo_img">
                            <img src={skill} alt="" />
                        </div>
                        <h2>Skill Crafter</h2>
                    </div>
                    <div className="navigation">
                        <ul className="menu">
                            {

                                nav_title.map((item) => (
                                    <li className='name_item'><Link to={item.path}>{item.display}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>



            </div>
        </header>
    )
}

export default Header