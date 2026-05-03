import { motion } from 'framer-motion'
import proyectoIngesoftImg from '../assets/images/dame_un_break.png'
import alfredBankImg from '../assets/images/momo.png'
import clubGentlemanImg from '../assets/images/get.png'

const Projects = () => {
    return (
        <section id="projects" className="mt-40 relative">
            <div className="mb-20 text-center">
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-gold text-xs uppercase tracking-widest block mb-4"
                >
                    Curated Collection
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-serif text-white mb-6"
                >
                    Selected Works
                </motion.h2>
                <div className="w-12 h-[1px] bg-gold mx-auto opacity-50"></div>
            </div>

            <div className="flex flex-col gap-12">
                
                {/* Project 1 - Alfred Bank (Foolproof Layout) */}
                <motion.a 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    href="https://alfred-bank.vercel.app/" target="_blank" rel="noreferrer" className="block w-full group"
                >
                    <div className="glass-card rounded-2xl overflow-hidden relative">
                        <div className="grid md:grid-cols-12 gap-0 min-h-[450px]">
                            
                            {/* Left side: Text Content */}
                            <div className="md:col-span-5 p-8 md:p-16 flex flex-col justify-center relative z-10 border-r border-border/50">
                                <div className="inline-flex items-center gap-3 mb-8">
                                    <span className="text-gold text-[10px] uppercase tracking-widest border border-gold/30 px-3 py-1 rounded-full">Primary Case Study</span>
                                    <span className="text-muted text-[10px] uppercase tracking-widest group-hover:text-gold transition-colors">Launch App &rarr;</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Alfred Bank</h3>
                                <p className="text-muted text-base leading-relaxed mb-10 font-light">
                                    Fintech system fulfilling the complete financial cycle. Features secure account creation, simulated balance loading, and peer-to-peer transfers built with modern architecture.
                                </p>
                                <div className="flex flex-wrap gap-3 mt-auto">
                                    <span className="text-[10px] uppercase tracking-widest text-muted">TypeScript</span>
                                    <span className="text-border">|</span>
                                    <span className="text-[10px] uppercase tracking-widest text-muted">Next.js</span>
                                    <span className="text-border">|</span>
                                    <span className="text-[10px] uppercase tracking-widest text-muted">Fullstack</span>
                                </div>
                            </div>

                            {/* Right side: Explicit Image Container (Cannot be hidden) */}
                            <div className="md:col-span-7 bg-surface/30 p-8 md:p-16 flex items-center justify-center relative overflow-hidden">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gold/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-gold/10 transition-colors duration-700"></div>
                                
                                <img 
                                    src={alfredBankImg} 
                                    alt="Alfred Bank Mockup" 
                                    className="relative z-10 w-full h-auto max-h-[400px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-1000 ease-out"
                                />
                            </div>

                        </div>
                    </div>
                </motion.a>

                {/* Sub-grid for other projects */}
                <div className="grid md:grid-cols-2 gap-12">
                    
                    {/* Project 2 - SmartCar */}
                    <motion.a 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        href="https://github.com/heider88/Proyecto-ingesoft" target="_blank" rel="noreferrer" className="block group"
                    >
                        <div className="glass-card rounded-2xl overflow-hidden h-[450px] flex flex-col relative">
                            <div className="h-56 overflow-hidden relative border-b border-border bg-surface/30">
                                <div className="absolute inset-0 bg-base/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <img 
                                    src={proyectoIngesoftImg} 
                                    alt="Smartcar System" 
                                    className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8 md:p-10 flex flex-col flex-grow">
                                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">SmartCar</h3>
                                <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3 font-light">Cross-platform application for budget management with real-time tracking, Offline-First sync, and &lt;200ms calculation algorithms.</p>
                                <div className="flex flex-wrap gap-3 mt-auto">
                                    <span className="text-[10px] uppercase tracking-widest text-muted">Flutter</span>
                                    <span className="text-[10px] uppercase tracking-widest text-muted">Offline-First</span>
                                </div>
                            </div>
                        </div>
                    </motion.a>

                    {/* Project 3 - Club Gentleman SaaS */}
                    <motion.a 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        href="https://club-gentleman-saa-s-b2-b2-c.vercel.app" target="_blank" rel="noreferrer" className="block group"
                    >
                        <div className="glass-card rounded-2xl overflow-hidden h-[450px] flex flex-col relative">
                            <div className="h-56 overflow-hidden relative border-b border-border bg-surface/30">
                                <div className="absolute inset-0 bg-base/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-base/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
                                    <span className="text-gold text-[8px] font-bold uppercase tracking-widest">Live</span>
                                </div>
                                <img 
                                    src={clubGentlemanImg} 
                                    alt="Club Gentleman SaaS" 
                                    className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8 md:p-10 flex flex-col flex-grow">
                                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">Club Gentleman SaaS</h3>
                                <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3 font-light">
                                    Automated scheduling SaaS with collision-prevention logic, PostgreSQL JSONB, and real-time orchestration for multi-tenant environments.
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex flex-wrap gap-3">
                                        <span className="text-[10px] uppercase tracking-widest text-muted">Next.js</span>
                                        <span className="text-[10px] uppercase tracking-widest text-muted">TypeScript</span>
                                    </div>
                                    <span className="text-muted group-hover:text-gold transition-colors">&rarr;</span>
                                </div>
                            </div>
                        </div>
                    </motion.a>

                </div>
            </div>
        </section>
    )
}

export default Projects