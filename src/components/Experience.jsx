import { motion } from 'framer-motion'

const Experience = () => {
    const experiences = [
        {
            company: "Freelance",
            role: "Software Developer",
            date: "CURRENT - REMOTE",
            points: [
                "Lead the full Software Development Life Cycle using generative AI tools, reducing delivery times for complex features by 50% while maintaining high code quality.",
                "Architected and deployed a scheduling platform using technologies like Next.js and Supabase achieving 100% digitalization of booking workflows for local businesses.",
                "Developed web applications with different frameworks of JavaScript (Reactjs, Nextjs, Nodejs, TypeScript) and CSS tools (TailwindCSS).",
                "Developed AI projects with different technologies and tools (Python, OpenAI, Langchain)."
            ]
        },
        {
            company: "Club Gentleman For Men",
            role: "Software Solutions Consultant",
            date: "Jan. 2024 - PRESENT - Bogota",
            points: [
                "Led the digital transformation of the business by architecting a custom Full-Stack SaaS platform for appointment scheduling and internal management.",
                "Engineered a Booking Wizard with collision-prevention logic using PostgreSQL JSONB, automating the scheduling of staff across multiple shifts.",
                "Optimized business workflows by integrating automated WhatsApp (Twilio) and Email (Resend) notifications, reducing no-shows by 25%.",
                "Digitized inventory and financial records tracking, implementing an administrative dashboard that provides real-time business growth metrics."
            ]
        }
    ]

    return (
        <section id="experience" className="mt-40 relative">
            <div className="mb-20 text-center">
                <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-gold text-xs uppercase tracking-widest block mb-4"
                >
                    Career Path
                </motion.span>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-serif text-white mb-6"
                >
                    Experience
                </motion.h2>
                <div className="w-12 h-[1px] bg-gold mx-auto opacity-50"></div>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                {experiences.map((exp, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.2 }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        {/* Timeline dot */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gold/30 bg-surface absolute left-0 md:left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 group-hover:border-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-500">
                            <div className="w-2 h-2 rounded-full bg-gold"></div>
                        </div>

                        {/* Content Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-8 md:p-12 rounded-2xl">
                            <div className="text-[10px] uppercase tracking-widest text-gold mb-3">
                                {exp.date}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{exp.role}</h3>
                            <h4 className="text-sm font-medium text-muted uppercase tracking-widest mb-6">{exp.company}</h4>
                            
                            <ul className="space-y-4">
                                {exp.points.map((point, idx) => (
                                    <li key={idx} className="text-muted text-sm leading-relaxed font-light flex gap-4">
                                        <span className="text-gold/50 mt-1 text-xs">◆</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Experience