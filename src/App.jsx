import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden text-gray-200">
      {/* Dynamic Background Glow Effect */}
      <div className="fixed inset-0 z-[-1] pointer-events-none flex items-center justify-center">
        <div className="absolute top-0 right-[10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute bottom-0 left-[10%] w-[60%] h-[60%] rounded-full bg-purple-500/15 blur-[150px]" />
      </div>

      <Navbar />

      <main className="container mx-auto px-6 pt-24 pb-12 space-y-20 md:space-y-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-gray-500 border-t border-glass-border border-opacity-30">
        <p>&copy; {new Date().getFullYear()} Heider Navarro. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  )
}

export default App
