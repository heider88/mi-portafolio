import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, Phone } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="py-20 mb-20 scroll-mt-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card max-w-4xl mx-auto p-8 md:p-12 text-center"
            >
                <div className="inline-flex items-center justify-center p-4 bg-deep-dark rounded-full mb-8 border border-glass-border">
                    <Send className="text-cian-neon" size={32} />
                </div>

                <h2 className="text-3xl md:text-5xl font-outfit font-bold text-white mb-6">Let's Build Something Great</h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                    I'm currently looking for new opportunities and open to exciting projects or roles.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex justify-center gap-6 flex-wrap">
                    <a
                        href="mailto:hnavarroq@unal.edu.co"
                        className="flex items-center gap-2 px-6 py-3 bg-glass-bg border border-glass-border rounded-lg hover:border-cian-neon/50 hover:bg-cian-neon/10 text-white transition-all duration-300 group"
                    >
                        <Mail className="text-gray-400 group-hover:text-cian-neon transition-colors" size={20} />
                        <span className="font-medium">Email Me</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/heider-hailober-navarro-quintero-a20541256"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-glass-bg border border-glass-border rounded-lg hover:border-violet-accent/50 hover:bg-violet-accent/10 text-white transition-all duration-300 group"
                    >
                        <Linkedin className="text-gray-400 group-hover:text-violet-accent transition-colors" size={20} />
                        <span className="font-medium">LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/heider88"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-glass-bg border border-glass-border rounded-lg hover:border-white/50 hover:bg-white/10 text-white transition-all duration-300 group"
                    >
                        <Github className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                        <span className="font-medium">GitHub</span>
                    </a>

                    <a
                        href="tel:+573223999930"
                        className="flex items-center gap-2 px-6 py-3 bg-glass-bg border border-glass-border rounded-lg hover:border-green-400/50 hover:bg-green-400/10 text-white transition-all duration-300 group"
                    >
                        <Phone className="text-gray-400 group-hover:text-green-400 transition-colors" size={20} />
                        <span className="font-medium">Phone</span>
                    </a>
                </div>
            </motion.div>
        </section>
    )
}

export default Contact
