import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen relative font-sans text-text overflow-x-hidden">
      
      {/* Ethereal Ambient Background */}
      <div className="bg-aurora"></div>

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-32 pb-20">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>

      <Contact />
    </div>
  )
}

export default App