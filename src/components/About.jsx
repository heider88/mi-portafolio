import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about" className="py-20 scroll-mt-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold text-white">About Me</h2>
                    <div className="h-px flex-1 bg-glass-border"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            Hello! I'm a passionate <span className="text-cian-neon font-medium">Systems Engineering student</span> specializing in building
                            robust backend architectures and clean, maintainable code. My journey in tech started with a deep curiosity
                            about how data flows behind the scenes of complex applications.
                        </p>
                        <p>
                            I strongly emphasize <span className="text-white font-medium">REST API design</span>, efficient relational database management,
                            and optimizing server-side logic primarily using Python. Currently, I'm expanding my horizons into the frontend with modern
                            frameworks like React to deliver complete end-to-end solutions.
                        </p>
                        <p>
                            I believe in continuous learning, clean code principles, and writing scalable software that solves real-world problems.
                        </p>
                    </div>

                    <div className="relative group lg:w-4/5 mx-auto">
                        <div className="absolute -inset-1 bg-gradient-to-br from-teal-500/20 to-deep-dark rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative glass-card bg-[#0b0f19]/90 overflow-hidden border-b-2 border-b-cyan-500">
                            {/* Terminal Window Header */}
                            <div className="flex items-center px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <span className="ml-4 text-xs font-mono text-gray-500">profile.json</span>
                            </div>

                            {/* JSON Code Area */}
                            <div className="p-6 md:p-8 font-mono text-sm md:text-base whitespace-pre overflow-x-auto text-gray-300">
                                <span className="text-gray-400">{"{"}</span>
                                <br />
                                <span className="text-cyan-400 pl-4">"profile"</span><span className="text-white">: {"{"}</span>
                                <br />
                                <span className="text-cyan-400 pl-8">"role"</span><span className="text-white">: </span><span className="text-green-300">"Systems Engineering Student"</span><span className="text-gray-400">,</span>
                                <br />
                                <span className="text-cyan-400 pl-8">"backend"</span><span className="text-white">: {"{"}</span>
                                <br />
                                <span className="text-cyan-400 pl-12">"language"</span><span className="text-white">: </span><span className="text-green-300">"Python"</span><span className="text-gray-400">,</span>
                                <br />
                                <span className="text-cyan-400 pl-12">"architectures"</span><span className="text-white">: [</span><span className="text-green-300">"REST APIs"</span><span className="text-white">]</span><span className="text-gray-400">,</span>
                                <br />
                                <span className="text-cyan-400 pl-12">"focus"</span><span className="text-white">: </span><span className="text-green-300">"Clean Code principles"</span>
                                <br />
                                <span className="text-white pl-8">{"}"}</span><span className="text-gray-400">,</span>
                                <br />
                                <span className="text-cyan-400 pl-8">"data"</span><span className="text-white">: {"{"}</span>
                                <br />
                                <span className="text-cyan-400 pl-12">"type"</span><span className="text-white">: </span><span className="text-green-300">"Relational Databases"</span><span className="text-gray-400">,</span>
                                <br />
                                <span className="text-cyan-400 pl-12">"flow"</span><span className="text-white">: </span><span className="text-green-300">"Backend-to-Frontend"</span>
                                <br />
                                <span className="text-white pl-8">{"}"}</span><span className="text-gray-400">,</span>
                                <br />
                                <span className="text-cyan-400 pl-8">"frontend_learning"</span><span className="text-white">: </span><span className="text-green-300">"React"</span>
                                <br />
                                <span className="text-white pl-4">{"}"}</span><span className="text-gray-400">,</span>
                                <br />
                                <span className="text-cyan-400 pl-4">"status"</span><span className="text-white">: </span><span className="text-green-300">"Ready to build"</span>
                                <br />
                                <span className="text-gray-400">{"}"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default About
