import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="my-navbar">
                <div className="my-navbar-container">
                    <Link to='/' className="my-navbar-logo" onClick={closeMobileMenu}>
                        VENTURE
                    </Link>
                    <div className="my-menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'my-nav-menu active' : 'my-nav-menu'}>
                        <li className='my-nav-item'>
                            <Link to="/" className='my-nav-links' onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className='my-nav-item'>
                            <Link to="/services" className='my-nav-links' onClick={closeMobileMenu}>
                                SERVICES
                            </Link>
                        </li>
                        <li className='my-nav-item'>
                            <Link to="/venture" className='my-nav-links' onClick={closeMobileMenu}>
                                VENTURES
                            </Link>
                        </li>
                        <li className='my-nav-item'>
                            <Link to="/trailer" className='my-nav-links' onClick={closeMobileMenu}>
                                TRAILERS
                            </Link>
                        </li>
                        <li className='my-nav-item'>
                            <Link to="/sign-up" className='my-nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>

                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
