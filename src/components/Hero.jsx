import { useEffect, useRef, useState } from 'react'

export default function Hero() {
    const [offset, setOffset] = useState(0)
    const [visible, setVisible] = useState(false)
    const heroRef = useRef(null)

    useEffect(() => {
        setVisible(true)
        const onScroll = () => {
            setOffset(window.scrollY * 0.4)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image with Parallax */}
            <div
                className="absolute inset-0 z-0"
                style={{ transform: `translateY(${offset}px)` }}
            >
                <img
                    src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80&auto=format&fit=crop"
                    alt="Luxury supercar"
                    className="w-full h-[120%] object-cover"
                    loading="eager"
                />
                {/* Dark Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-mafia-black/70 via-mafia-black/50 to-mafia-black" />
                <div className="absolute inset-0 bg-gradient-to-r from-mafia-black/60 to-transparent" />
            </div>

            {/* Decorative Lines */}
            <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none overflow-hidden">
                <div className="absolute top-[20%] left-0 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-mafia-silver/20 to-transparent" />
                <div className="absolute bottom-[30%] right-0 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-mafia-silver/15 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
                {/* Tagline */}
                <div
                    className={`transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <span className="inline-block font-heading text-[10px] md:text-xs tracking-[0.5em] uppercase text-mafia-steel mb-6 border border-mafia-steel/20 px-4 py-1.5">
                        Premium PPF Specialists
                    </span>
                </div>

                {/* Headline */}
                <h1
                    className={`font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95] mb-6 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <span className="text-white block">The Ultimate</span>
                    <span className="text-white block">Protection for</span>
                    <span className="chrome-text block">Your Empire.</span>
                </h1>

                {/* Subheadline */}
                <p
                    className={`text-mafia-steel text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-light transition-all duration-1000 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    Elite paint protection film for those who demand nothing less than perfection.
                    Self-healing. Invisible. Uncompromising.
                </p>

                {/* CTA */}
                <div
                    className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <a href="#contact" className="btn-chrome text-sm px-10 py-4">
                        Request a Quote
                    </a>
                    <a
                        href="#vault"
                        className="group font-heading text-xs tracking-[0.2em] uppercase text-mafia-steel hover:text-mafia-chrome transition-all duration-300 flex items-center gap-2"
                    >
                        View Our Work
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
                <span className="text-mafia-steel/50 font-heading text-[9px] tracking-[0.3em] uppercase">Scroll</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-mafia-silver/40 to-transparent animate-pulse-slow" />
            </div>
        </section>
    )
}
