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
            <div className="right w-3/4 bg-green-300 p-10 flex flex-col">
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
