import { motion } from 'framer-motion'
import { ArrowRight, Code2 } from 'lucide-react'

const Hero = () => {
    const nameText = "Heider Navarro."

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3
            }
        }
    }

    const letterVariants = {
        hidden: { opacity: 0, y: 20, display: "none" },
        visible: { opacity: 1, y: 0, display: "inline-block" }
    }

    return (
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center items-start pt-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl"
            >
                <div className="flex items-center gap-3 mb-6">
                    <span className="h-px w-8 bg-cian-neon"></span>
                    <span className="text-cian-neon font-mono text-sm tracking-widest uppercase">Hello World, I am</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-outfit font-extrabold text-white mb-6 leading-tight flex flex-col items-start gap-2">
                    <motion.span
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex overflow-hidden"
                    >
                        {Array.from(nameText).map((letter, index) => (
                            <motion.span key={index} variants={letterVariants}>
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </motion.span>
                    <span className="text-gradient">Junior Full Stack Developer.</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
                    Systems Engineering student with strong backend foundations in Python and REST API development.
                    Passionate about building scalable and clean systems while growing into full stack development.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="group flex items-center gap-2 px-8 py-4 bg-cian-neon text-deep-dark font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:shadow-[0_0_30px_rgba(0,242,255,0.4)]"
                    >
                        View Projects
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center gap-2 px-8 py-4 border border-glass-border rounded-xl text-white hover:bg-glass-bg hover:border-violet-accent/50 transition-all duration-300"
                    >
                        <Code2 size={20} className="text-violet-accent" />
                        Contact Me
                    </a>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
