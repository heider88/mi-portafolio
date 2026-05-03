import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <footer id="contact" className="mt-40 border-t border-border bg-surface/10 pt-32 pb-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-gold/5 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center gap-12"
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight">
                        <span className="italic text-muted font-light">Let's create</span><br/>
                        <span className="text-glow">SOMETHING</span>
                    </h2>
                    
                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <a href="mailto:hnavarroq@unal.edu.co" className="text-xs uppercase tracking-widest bg-gold text-base px-10 py-5 rounded-full hover:bg-white transition-all duration-300 w-full sm:w-auto">
                            Initiate Contact
                        </a>
                        <a href="tel:+573223999930" className="text-xs uppercase tracking-widest px-10 py-5 rounded-full border border-border text-text hover:border-gold transition-all duration-300 w-full sm:w-auto">
                            +57 3223999930
                        </a>
                    </div>
                </motion.div>
                
                <div className="mt-40 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-muted text-[10px] uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} Heider Navarro. All rights reserved.</p>
                    <div className="flex gap-10">
                        <a href="https://github.com/heider88" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/heider-hailober-navarro-quintero-a20541256" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact