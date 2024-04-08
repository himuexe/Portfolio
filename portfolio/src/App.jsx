import Navbar from "./Components/Navbar"
import Hero from './Components/Hero'
import About from "./Components/About"
import Tech from "./Components/Tech"
import Exp from "./Components/Exp"
import Project from "./Components/Project"
import Contact from "./Components/Contact"
const App = () => {
  return (
    <div className="over-flow-x-hidden text-neutral-300 antialiased  selection:bg-purple-200 selection:text-cyan-900 "> 
    <div className="fixed  top-0 -z-10 h-full w-full ">
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
    <div className="container mx-auto px-8">
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Exp />
      <Project />
      <Contact />
    </div>
    </div>
  )
}

export default App