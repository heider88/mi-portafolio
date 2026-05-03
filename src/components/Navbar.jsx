import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4"
        >
            <nav className={`flex items-center justify-between px-8 py-4 rounded-full transition-all duration-700 ease-out ${scrolled ? 'bg-surface/60 backdrop-blur-xl border border-border w-full max-w-5xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]' : 'bg-transparent w-full max-w-7xl border border-transparent'}`}>
                
                <div className="text-text font-serif font-bold tracking-widest text-lg flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                    HEIDER NAVARRO
                </div>

                <div className="hidden md:flex gap-10 items-center">
                    <a href="#about" className="text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors duration-300">About</a>
                    <a href="#projects" className="text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors duration-300">Selected Work</a>
                    <a href="#experience" className="text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors duration-300">Experience</a>
                </div>

                <a href="mailto:hnavarroq@unal.edu.co" className="text-xs tracking-widest uppercase font-medium bg-gold text-base px-6 py-2.5 rounded-full hover:bg-white transition-colors duration-300">
                    Connect
                </a>
            </nav>
        </motion.div>
    )
}

export default Navbar