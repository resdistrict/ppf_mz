import { useEffect, useRef, useState } from 'react'

const projects = [
    {
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80&auto=format&fit=crop',
        title: 'Porsche 911 GT3',
        service: 'Full Body PPF + Ceramic Coating',
        tag: 'Completed',
    },
    {
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80&auto=format&fit=crop',
        title: 'Mercedes-AMG GT',
        service: 'Matte PPF Wrap — Stealth Finish',
        tag: 'Featured',
    },
    {
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80&auto=format&fit=crop',
        title: 'Ferrari F8 Tributo',
        service: 'Full Front + Side PPF Package',
        tag: 'Completed',
    },
    {
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80&auto=format&fit=crop',
        title: 'BMW M4 Competition',
        service: 'Full Body Clear PPF',
        tag: 'Completed',
    },
    {
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80&auto=format&fit=crop',
        title: 'Lamborghini Huracán',
        service: 'Track-Ready PPF + Ceramic',
        tag: 'Featured',
    },
    {
        image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80&auto=format&fit=crop',
        title: 'Audi RS7 Sportback',
        service: 'Satin PPF + Chrome Delete',
        tag: 'Completed',
    },
]

export default function Gallery() {
    const [visible, setVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true)
            },
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="vault"
            className="section-padding bg-mafia-charcoal/30 relative"
        >
            {/* Subtle top border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-mafia-silver/10 to-transparent" />

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <span className="font-heading text-[10px] tracking-[0.5em] uppercase text-mafia-steel mb-4 block">
                        The Vault
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-white mb-4">
                        Our <span className="chrome-text">Finest Work</span>
                    </h2>
                    <p className="text-mafia-steel max-w-xl mx-auto text-sm leading-relaxed">
                        Every vehicle that enters our facility receives the same obsessive attention to detail.
                        No shortcuts. No compromises.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, idx) => (
                        <div
                            key={project.title}
                            className={`group relative overflow-hidden aspect-[4/3] cursor-pointer transition-all duration-700 ${visible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-12'
                                }`}
                            style={{ transitionDelay: `${200 + idx * 100}ms` }}
                        >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-mafia-black via-mafia-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                            {/* Tag */}
                            <div className="absolute top-4 right-4 z-10">
                                <span className={`font-heading text-[9px] tracking-[0.2em] uppercase px-3 py-1 border ${project.tag === 'Featured'
                                        ? 'text-mafia-gold border-mafia-gold/40 bg-mafia-gold/10'
                                        : 'text-mafia-steel border-mafia-steel/30 bg-mafia-black/50'
                                    }`}>
                                    {project.tag}
                                </span>
                            </div>

                            {/* Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="font-heading text-sm tracking-[0.15em] uppercase text-white mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-mafia-steel text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {project.service}
                                </p>
                            </div>

                            {/* Border Glow on Hover */}
                            <div className="absolute inset-0 border border-transparent group-hover:border-mafia-silver/20 transition-all duration-500 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
