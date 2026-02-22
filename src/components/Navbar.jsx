import { useState, useEffect } from 'react'

const navLinks = [
    { label: 'Protection', href: '#protection' },
    { label: 'The Vault', href: '#vault' },
    { label: 'Guarantee', href: '#omerta' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? 'bg-mafia-black/90 backdrop-blur-xl border-b border-white/5 py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 border border-mafia-silver/40 flex items-center justify-center rotate-45 group-hover:border-mafia-silver transition-colors duration-300">
                        <span className="text-mafia-silver font-heading text-xs -rotate-45 font-bold">M</span>
                    </div>
                    <span className="font-heading text-xl tracking-[0.3em] chrome-text font-bold">
                        MAFIAWARZ
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="font-heading text-xs tracking-[0.2em] uppercase text-mafia-steel hover:text-mafia-chrome transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-mafia-silver after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="btn-chrome ml-4 text-xs"
                    >
                        Request a Quote
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-[1px] bg-mafia-silver transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`block w-6 h-[1px] bg-mafia-silver transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-[1px] bg-mafia-silver transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-mafia-black/95 backdrop-blur-xl border-b border-white/5 transition-all duration-500 overflow-hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="font-heading text-sm tracking-[0.2em] uppercase text-mafia-steel hover:text-mafia-chrome transition-colors duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="btn-chrome text-xs text-center mt-2"
                    >
                        Request a Quote
                    </a>
                </div>
            </div>
        </nav>
    )
}
