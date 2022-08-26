import React, { useEffect, useState } from 'react'
import logo from '../../assets/img/logo.png'
import Navbar from '../Navbar/Navbar'
import NavMobile from '../Navbar/NavMovile/NavMobile'

const Header = () => {
    const [bg, setBg] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                setBg(true)
            } else {
                setBg(false)
            }
        })
    })

    return (
        <header className={`${bg && 'bg-white shadow-md py-4'} p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}>
            <div className='container mx-auto flex items-center justify-between'>
                <a href="#">
                    <img src={logo} alt='logo' />
                </a>
                <Navbar />
                <NavMobile />
            </div>
        </header>
    )
}

export default Header