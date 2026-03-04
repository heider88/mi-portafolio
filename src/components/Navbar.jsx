import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

const Navbar = () => {
    const links = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 inset-x-0 z-50 bg-deep-dark/80 backdrop-blur-md border-b border-glass-border/30 px-6 py-4"
        >
            <div className="container mx-auto flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <Terminal className="text-cian-neon group-hover:text-violet-accent transition-colors duration-300" size={24} />
                    <span className="font-outfit font-bold text-xl tracking-tight text-white group-hover:text-gradient">
                        Heider<span className="text-cian-neon">.</span>Dev
                    </span>
                </a>

                <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-400">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="hover:text-cyan-400 transition-colors uppercase tracking-wider"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-5 py-2 rounded-lg bg-glass-bg border border-glass-border hover:border-cian-neon/50 hover:bg-cian-neon/10 text-white transition-all duration-300"
                    >
                        Let's Talk
                    </a>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar
