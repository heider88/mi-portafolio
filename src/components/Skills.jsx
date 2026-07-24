const Skills = () => {
    const skills = [
        { name: 'Prompt Engineering', size: 'text-4xl md:text-5xl', opacity: 'opacity-100' },
        { name: 'JavaScript', size: 'text-3xl md:text-4xl', opacity: 'opacity-90' },
        { name: 'Python', size: 'text-4xl md:text-5xl', opacity: 'opacity-90' },
        { name: 'React', size: 'text-3xl md:text-4xl', opacity: 'opacity-80' },
        { name: 'Next.js', size: 'text-4xl', opacity: 'opacity-100' },
        { name: 'Django', size: 'text-3xl', opacity: 'opacity-85' },
        { name: 'Flutter', size: 'text-4xl md:text-5xl', opacity: 'opacity-95' },
        { name: 'TypeScript', size: 'text-2xl md:text-3xl', opacity: 'opacity-80' },
        { name: 'PostgreSQL', size: 'text-3xl', opacity: 'opacity-75' },
        { name: 'Supabase', size: 'text-3xl', opacity: 'opacity-85' },
        { name: 'AI Agents', size: 'text-2xl', opacity: 'opacity-70' },
        { name: 'Docker', size: 'text-2xl', opacity: 'opacity-60' },
        { name: 'Dart', size: 'text-2xl', opacity: 'opacity-60' },
        { name: 'Claude', size: 'text-xl', opacity: 'opacity-50' },
    ]

    return (
        <section id="skills" className="mt-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="text-gold">Skills</span> and tools
                    </h2>
                    <p className="text-[#a1a1aa] leading-relaxed text-lg">
                        Expert in integrating LLMs to automate complex business processes and deliver high-performance software. Proficient in modern web and mobile frameworks, robust databases, and AI agent automation.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center lg:justify-end content-center min-h-[300px]">
                    {skills.map((skill, index) => (
                        <span 
                            key={index} 
                            className={`font-bold ${skill.size} ${skill.opacity} text-white hover:text-gold transition-colors cursor-default`}
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills