import { useEffect, useRef, useState } from 'react'

const guarantees = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
        title: 'Invisible to the Eye',
        description: 'Our precision-cut film conforms seamlessly to every curve and edge — completely undetectable to the naked eye.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: '10-Year Warranty',
        description: 'Every installation backed by our industry-leading decade-long warranty covering yellowing, cracking, peeling, and delamination.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        title: 'Certified Installers',
        description: 'Our team consists exclusively of factory-trained, certified technicians with a minimum of 5 years of hands-on experience.',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        title: 'Flawless Finish',
        description: 'Zero dust, zero bubbles, zero imperfections. Our climate-controlled facility ensures a factory-perfect finish every single time.',
    },
]

export default function Omerta() {
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
            id="omerta"
            className="section-padding bg-mafia-black relative overflow-hidden"
        >
            {/* Decorative Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-mafia-silver/[0.03] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-mafia-silver/[0.05] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <span className="font-heading text-[10px] tracking-[0.5em] uppercase text-mafia-steel mb-4 block">
                        The Omertà Guarantee
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-white mb-4">
                        Silent.{' '}
                        <span className="chrome-text">Invisible.</span>{' '}
                        Absolute.
                    </h2>
                    <p className="text-mafia-steel max-w-2xl mx-auto text-sm leading-relaxed">
                        Like the code of silence itself, our film speaks through what remains unseen.
                        No evidence it was ever applied — only the proof that your paint remains immaculate,
                        year after year.
                    </p>
                </div>

                {/* Guarantee Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {guarantees.map((item, idx) => (
                        <div
                            key={item.title}
                            className={`group flex gap-5 p-6 bg-mafia-charcoal/30 border border-white/5 hover:border-mafia-silver/15 transition-all duration-500 ${visible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                }`}
                            style={{ transitionDelay: `${300 + idx * 100}ms` }}
                        >
                            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-mafia-silver/20 text-mafia-silver/60 group-hover:text-mafia-chrome group-hover:border-mafia-silver/40 transition-all duration-300">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-heading text-xs tracking-[0.15em] uppercase text-white mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-mafia-steel text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div
                    className={`text-center mt-14 transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <a href="#contact" className="btn-chrome text-xs px-10 py-4">
                        Protect Your Investment
                    </a>
                </div>
            </div>
        </section>
    )
}
