import { motion } from 'framer-motion'
import { Terminal, Code, Cpu } from 'lucide-react'

const About = () => {
    return (
        <section id="about" className="py-24 scroll-mt-32 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-12 gap-16 items-center"
            >
                <div className="lg:col-span-5 order-2 lg:order-1">
                    {/* Hyper-Pop Terminal */}
                    <div className="pop-box bg-ink p-1">
                        <div className="flex items-center justify-between px-4 py-2 bg-blue border-b-4 border-ink">
                            <div className="flex items-center gap-2 text-paper font-accent font-bold text-sm">
                                <Terminal size={18} />
                                <span>SYSTEM.LOG</span>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-4 h-4 rounded-full border-2 border-ink bg-lime"></div>
                                <div className="w-4 h-4 rounded-full border-2 border-ink bg-pink"></div>
                            </div>
                        </div>

                        <div className="p-6 md:p-8 font-mono text-sm whitespace-pre-wrap overflow-x-auto text-paper leading-relaxed">
                            <span className="text-lime">user@h_navarro:~$</span> execute profile.sh
                            <br/><br/>
                            <span className="text-pink">{"{"}</span>
                            <br />
                            <span className="text-blue pl-4">"role"</span><span className="text-lime">: </span><span className="text-paper">"AI-Driven Fullstack"</span><span>,</span>
                            <br />
                            <span className="text-blue pl-4">"base"</span><span className="text-lime">: </span><span className="text-paper">"Universidad Nacional de Colombia"</span><span>,</span>
                            <br />
                            <span className="text-blue pl-4">"stack"</span><span className="text-lime">: </span><span className="text-paper">["Next.js", "Django", "Flutter"]</span><span>,</span>
                            <br />
                            <span className="text-blue pl-4">"mission"</span><span className="text-lime">: </span><span className="text-paper">"Automate the boring stuff."</span>
                            <br />
                            <span className="text-pink">{"}"}</span>
                            <br /><br />
                            <span className="text-lime">user@h_navarro:~$</span> <span className="animate-pulse bg-paper w-3 h-5 inline-block align-middle"></span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
                    <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] tracking-tighter text-ink">
                        THE <span className="text-transparent text-stroke-ink block">OPERATOR</span>
                    </h2>
                    
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue transform rotate-2"></div>
                        <div className="pop-box bg-pink p-8 relative z-10 transform -rotate-1 hover:rotate-0 transition-transform">
                            <p className="text-paper font-body font-medium text-xl leading-relaxed">
                                I am an AI-Driven Fullstack Developer. I engineer advanced prompts and leverage generative AI tools to <strong className="text-ink bg-lime px-1">accelerate the Software Development Life Cycle.</strong>
                            </p>
                        </div>
                    </div>

                    <div className="pop-box bg-paper p-8">
                        <p className="text-ink font-body font-medium text-xl leading-relaxed border-l-8 border-blue pl-6">
                            From architecting custom Full-Stack SaaS platforms to digitizing archaic business workflows, I integrate automated notifications, offline-first architectures, and complex LLM pipelines that execute perfectly.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default About