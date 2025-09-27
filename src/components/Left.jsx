import React from 'react'
import Logo from './Logo'
const Left = () => {
    return (
        <>
            <div className="left w-1/4 bg-green-400 p-5 flex flex-col gap-6 sticky h-screen top-0">
                <div className="flex justify-center items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
                        <img
                            src="Leviathan pic.jpg"
                            alt="Leviathan"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <Logo />
            </div>
        </>
    )
}

export default Left
