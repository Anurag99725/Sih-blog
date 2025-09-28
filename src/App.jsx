import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Left from './components/Left'
import Right from './components/Right'

function App() {
  

  return (
    <>
      <div className=" scroll-smooth container flex mx-auto w-4/5 ">
        <Left/>
        <Right/>
        
      </div>
    </>
  )
}

export default App
