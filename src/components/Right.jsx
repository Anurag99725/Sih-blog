import React from 'react'
import Problem from './Problem'
import Approach from './Approach'
import Contact from './Contact'
import Video from './Video'
import Navbar from './Navbar'
import Home from './Home'

const Right = () => {
    return (
        <>
            <div className="right flex w-full flex-1 flex-col gap-8 rounded-3xl bg-gradient-to-br from-[#f5fbf7] via-[#eef6f0] to-[#f5fbf7] p-6 text-[#112117] shadow-[0_20px_60px_rgba(9,28,17,0.25)] sm:p-9 lg:w-[66%] xl:w-[70%]">
                <Navbar />
                <Home/>
                <Problem />
                <Approach />
                <Video />
                <Contact />
            </div>

        </>
    )
}

export default Right
