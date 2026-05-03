import { motion } from 'framer-motion'

const Education = () => {
    return (
        <section id="education" className="mt-40">
            <div className="mb-20 text-center">
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-gold text-xs uppercase tracking-widest block mb-4"
                >
                    Academic Background
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-serif text-white mb-6"
                >
                    Education
                </motion.h2>
                <div className="w-12 h-[1px] bg-gold mx-auto opacity-50"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-card rounded-2xl p-10 md:p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[50px] rounded-full pointer-events-none"></div>
                    <div className="text-[10px] uppercase tracking-widest text-gold mb-6 border border-gold/30 px-3 py-1 rounded-full w-fit">In Process</div>
                    <h3 className="text-2xl font-serif text-white mb-3">Systems and Computer Engineering</h3>
                    <h4 className="text-muted text-xs uppercase tracking-widest mb-6">Universidad Nacional de Colombia</h4>
                    <p className="text-muted text-sm leading-relaxed font-light">
                        Focus in Software Development and information systems.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="glass-card rounded-2xl p-10 md:p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gold/5 blur-[50px] rounded-full pointer-events-none"></div>
                    <div className="text-[10px] uppercase tracking-widest text-gold mb-6 border border-gold/30 px-3 py-1 rounded-full w-fit">2025</div>
                    <h3 className="text-2xl font-serif text-white mb-3">Certified in Data Science</h3>
                    <h4 className="text-muted text-xs uppercase tracking-widest mb-6">University of Andes (Coursera)</h4>
                    <p className="text-muted text-sm leading-relaxed font-light">
                        Specialized in Applied Data Science and Machine Learning.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Education