import { motion } from 'framer-motion'
import { Server, Database, Code, Wrench } from 'lucide-react'

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming',
            icon: <Code className="text-cian-neon" size={32} />,
            skills: ['Python', 'JavaScript']
        },
        {
            title: 'Backend',
            icon: <Server className="text-violet-accent" size={32} />,
            skills: ['REST APIs', 'HTTP', 'JSON', 'OOP']
        },
        {
            title: 'Databases',
            icon: <Database className="text-cian-neon" size={32} />,
            skills: ['MySQL', 'PostgreSQL']
        },
        {
            title: 'Tools',
            icon: <Wrench className="text-violet-accent" size={32} />,
            skills: ['Git', 'GitHub']
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section id="skills" className="py-20 scroll-mt-20">
            <div className="flex flex-col items-center mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-outfit font-bold text-white mb-4">Technical Stack</h2>
                <p className="text-gray-400 max-w-xl">Deep foundations in backend systems with an expanding skillset across the full stack.</p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="glass-card p-6 flex flex-col group"
                    >
                        <div className="mb-6 bg-deep-dark/50 inline-block p-4 rounded-xl self-start group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                            {category.icon}
                        </div>
                        <h3 className="text-xl font-bold font-outfit text-gray-100 mb-4">{category.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {category.skills.map(skill => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-glass-bg border border-glass-border rounded-md text-sm text-gray-300 group-hover:border-cian-neon/30 group-hover:text-white transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Skills
