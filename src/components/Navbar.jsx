import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-deep-dark/90 backdrop-blur-md border-b border-glass-border/50 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-transparent py-5'}`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group z-50">
                    <Terminal className="text-cian-neon group-hover:text-violet-accent transition-colors duration-300" size={24} />
                    <span className="font-outfit font-bold text-xl tracking-tight text-white group-hover:text-gradient">
                        Heider<span className="text-cian-neon">.</span>Dev
                    </span>
                </a>

                {/* Desktop Menu */}
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

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none z-50"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 w-full bg-deep-dark/95 backdrop-blur-xl border-b border-glass-border/30 shadow-2xl md:hidden"
                    >
                        <div className="flex flex-col px-6 py-6 space-y-4">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium text-gray-300 hover:text-cian-neon transition-colors py-2 border-b border-glass-border/30"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 text-center px-5 py-3 rounded-lg bg-cian-neon/10 border border-cian-neon/50 text-white font-medium hover:bg-cian-neon/20 transition-all duration-300"
                            >
                                Let's Talk
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
