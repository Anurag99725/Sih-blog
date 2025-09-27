import React from 'react'

const Navbar = () => {
    return (

        <nav className='sticky top-0 z-50'>
            <ul className="flex justify-center gap-8 py-2 text-white bg-gradient-to-r from-[#4b5320] via-[#6b705c] to-[#2d2f2a]">
                <li>
                    <a href="#home" className="cursor-pointer hover:text-sky-300 transition-colors duration-300 text-lg">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#problem" className="cursor-pointer hover:text-sky-300 transition-colors duration-300 text-lg">
                        Problem
                    </a>
                </li>
                <li>
                    <a href="#approach" className="cursor-pointer hover:text-sky-300 transition-colors duration-300 text-lg">
                        Approach
                    </a>
                </li>
                <li>
                    <a href="#video" className="cursor-pointer hover:text-sky-300 transition-colors duration-300 text-lg">
                        Video
                    </a>
                </li>
                <li>
                    <a href="#contact" className="cursor-pointer hover:text-sky-300 transition-colors duration-300 text-lg">
                        Contact Us
                    </a>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar
