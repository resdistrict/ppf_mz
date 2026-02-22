import { useEffect, useRef, useState } from 'react'

const features = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: 'Self-Healing Technology',
        description:
            'Our premium TPU film features molecular-level self-healing properties. Minor scratches and swirl marks vanish within minutes under ambient heat, keeping your finish flawless.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        title: 'UV Resistance',
        description:
            'Advanced UV-blocking nano layer prevents yellowing, fading, and oxidation from prolonged sun exposure. Your paint stays as vivid as the day it left the factory.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        title: 'Hydrophobic Finish',
        description:
            'A ceramic-infused top coat repels water, dirt, and contaminants on contact. Cleaning becomes effortless while maintaining that showroom-level gloss at all times.',
    },
]

export default function ProtectionDetail() {
    const [visible, setVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true)
            },
            { threshold: 0.15 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="protection"
            className="section-padding bg-mafia-black relative"
        >
            {/* Subtle top border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-mafia-silver/10 to-transparent" />

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <span className="font-heading text-[10px] tracking-[0.5em] uppercase text-mafia-steel mb-4 block">
                        The Protection Detail
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-white mb-4">
                        Engineered for <span className="chrome-text">Perfection</span>
                    </h2>
                    <p className="text-mafia-steel max-w-2xl mx-auto text-sm leading-relaxed">
                        We exclusively use military-grade polyurethane film — the same technology
                        trusted by aerospace and defense industries — precision-cut and hand-applied
                        by certified technicians.
                    </p>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <div
                            key={feature.title}
                            className={`group relative p-8 bg-mafia-charcoal/50 border border-white/5 hover:border-mafia-silver/20 transition-all duration-500 card-glow ${visible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${300 + idx * 150}ms` }}
                        >
                            {/* Icon */}
                            <div className="text-mafia-silver/60 group-hover:text-mafia-chrome transition-colors duration-300 mb-5">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="font-heading text-sm tracking-[0.15em] uppercase text-white mb-3">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-mafia-steel text-sm leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-mafia-silver/40 to-transparent group-hover:w-full transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
