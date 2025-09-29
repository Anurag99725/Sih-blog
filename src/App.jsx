import Left from './components/Left'
import Right from './components/Right'

function App() {
  

  return (
    <div className="relative min-h-screen overflow-hidden bg-[url('/bg.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(45,125,79,0.18),_transparent_62%)]" />
      <div className="pointer-events-none absolute left-[-20%] top-[-10%] -z-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(24,73,49,0.35)_0%,_rgba(4,8,6,0)_75%)]" />
      <div className="pointer-events-none absolute right-[-15%] bottom-[-20%] -z-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,_rgba(69,139,94,0.28)_0%,_rgba(4,8,6,0)_72%)]" />

      <div className="scroll-smooth  flex w-full  flex-col gap-8 px-0 py-0 md:px-0 lg:flex-row lg:items-start lg:gap-5 ">
        <Left />
        <Right />
      </div>
    </div>
  )
}

export default App
