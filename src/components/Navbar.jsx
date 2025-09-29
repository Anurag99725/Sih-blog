import React from 'react'

const Navbar = () => {
    return (

        <nav className='sticky top-0 z-40'>
            <ul className="flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-emerald-100/70 bg-white/80 px-4 py-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-emerald-700 shadow-[0_12px_32px_rgba(17,65,40,0.18)] backdrop-blur-sm sm:gap-2.5 sm:px-5 sm:text-[0.72rem] md:gap-3 md:text-sm">
                <li>
                    <a href="#home" className="cursor-pointer transition-colors duration-300 hover:text-emerald-500">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#problem" className="cursor-pointer transition-colors duration-300 hover:text-emerald-500">
                        Problem
                    </a>
                </li>
                <li>
                    <a href="#approach" className="cursor-pointer transition-colors duration-300 hover:text-emerald-500">
                        Approach
                    </a>
                </li>
                <li>
                    <a href="#video" className="cursor-pointer transition-colors duration-300 hover:text-emerald-500">
                        Video
                    </a>
                </li>
                <li>
                    <a href="#contact" className="cursor-pointer transition-colors duration-300 hover:text-emerald-500">
                        Contact Us
                    </a>
                </li>
            </ul>
        </nav>

    )
}

export default Navbar
