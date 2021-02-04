import React,{useState} from 'react'
import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
import  {Button} from './Button'
import Dropdown from './Dropdown'
import MediaQuery from "react-responsive";
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick =() => setClick(!click);
    const closeMobileMenu =()=> setClick(false);

    const onMouseEnter = () => {
        if( window.innerWidth < 960 ){
            setDropdown(false)
        }else {
            setDropdown(true)
        }
    };

    const onMouseLeave = () => {
        if( window.innerWidth < 960 ){
            setDropdown(false)
        }else {
            setDropdown(false)
        }
    };

    const iconVariant ={
        hidden:{
            opacity:0,
        },
        animate:{
            opacity:1,
            transition:{
                delay:3,
                duration:0.8
            }
        }
    }


    return (
        <div>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    Bloggen. <motion.i className="fas fa-pen-fancy" variants={iconVariant} initial='hidden' animate='animate' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <MediaQuery maxDeviceWidth={960} >

                        <Link to='category' className='nav-links' onClick={closeMobileMenu}>
                            Category <i className='fas fa-caret-down' />
                        </Link>

                        </MediaQuery>
                        <MediaQuery minDeviceWidth={960} >

                        <Link className='nav-links' onClick={closeMobileMenu}>
                            Category <i className='fas fa-caret-down' />
                        </Link>

                        </MediaQuery>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
            
        </div>
    )
}

export default Navbar
