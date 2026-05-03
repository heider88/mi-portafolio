import { useEffect, useRef } from 'react'

import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section id="about" className="min-h-[80vh] flex flex-col justify-center mt-10 md:mt-20 relative">
            <div className="max-w-5xl relative z-10 mx-auto text-center">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-border bg-surface/30 text-xs uppercase tracking-widest text-muted mb-10"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
                    Systems & Computer Engineer
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="text-6xl md:text-8xl lg:text-[7rem] font-serif leading-[1.1] mb-8 text-glow"
                >
                    <span className="block text-muted text-4xl md:text-6xl italic">Architecting</span>
                    INTELLIGENCE
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-muted text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed font-light"
                >
                    AI-Driven Fullstack Developer specialized in building scalable, robust applications. 
                    I leverage generative AI tools and modern frameworks to engineer elegant solutions to complex problems.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 items-center justify-center"
                >
                    <a href="#projects" className="text-xs uppercase tracking-widest bg-gold text-base px-8 py-4 rounded-full hover:bg-white transition-all duration-300 w-full sm:w-auto">
                        Explore Portfolio
                    </a>
                    <a href="https://github.com/heider88" target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest px-8 py-4 rounded-full border border-border text-text hover:border-gold transition-all duration-300 w-full sm:w-auto">
                        GitHub Profile
                    </a>
                </motion.div>
            </div>

            {/* Decorative Lines */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-gold to-transparent opacity-20"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-gold to-transparent opacity-20"></div>
        </section>
    )
}

export default Hero