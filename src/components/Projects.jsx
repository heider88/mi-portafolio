import { motion } from 'framer-motion'
import { Github, ExternalLink, Code } from 'lucide-react'
import proyectoIngesoftImg from '../assets/images/proyecto_ingesoft.png'
import spotifyCloneImg from '../assets/images/spotify_clone.png'
import manualUsuarioImg from '../assets/images/manual_usuario.png'

const Projects = () => {
    const projects = [
        {
            title: 'Proyecto-ingesoft',
            description: 'Este repositorio tiene como propósito servir de espacio grupal para la clase de Ingeniería de Software. Aquí iremos subiendo y organizando las tareas, talleres, documentación y avances del proyecto...',
            tags: ['Software Engineering', 'Documentation', 'Collaboration'],
            github: 'https://github.com/heider88/Proyecto-ingesoft',
            image: proyectoIngesoftImg
        },
        {
            title: 'spotify-premium-clone',
            description: 'Premium Music Player with Glassmorphism UI, dynamic JSON data rendering, and LocalStorage persistence. Built with Vanilla JS/CSS.',
            tags: ['JavaScript', 'CSS', 'Glassmorphism', 'Vanilla JS'],
            github: 'https://github.com/heider88/spotify-premium-clone',
            image: spotifyCloneImg
        },
        {
            title: 'Manual-de-usuario',
            description: 'Documentación y manual de usuario para proyectos desarrollados, enfocado en guiar la navegación y el uso del sistema final.',
            tags: ['Documentation', 'User Manual', 'Tech Writing'],
            github: 'https://github.com/heider88/Manual-de-usuario',
            image: manualUsuarioImg
        }
    ]

    return (
        <section id="projects" className="py-20 scroll-mt-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="text-3xl md:text-5xl font-outfit font-bold text-white mb-4">Featured Work</h2>
                    <p className="text-gray-400 max-w-xl">Applications showcasing backend logic, automation, and API design.</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="glass-card flex flex-col group h-full"
                    >
                        {/* Project Image */}
                        <div className="h-48 bg-deep-dark rounded-t-2xl border-b border-glass-border relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-cian-neon/5 to-violet-accent/5 opacity-50 z-10 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold font-outfit text-white mb-3 group-hover:text-cian-neon transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6 text-xs font-mono">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-cian-neon/80">
                                        <span className="text-violet-accent">#</span>{tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 pt-4 border-t border-glass-border">
                                <a
                                    href={project.github}
                                    className="p-2 rounded-lg bg-deep-dark border border-glass-border text-gray-400 hover:text-white hover:border-white transition-all"
                                    aria-label="View Source on GitHub"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="p-2 rounded-lg bg-deep-dark border border-glass-border text-gray-400 hover:text-white hover:border-cian-neon transition-all"
                                    aria-label="View Live Project"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Projects
