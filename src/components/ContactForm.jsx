import { useEffect, useRef, useState } from 'react'

const serviceTypes = [
    'Full Body PPF',
    'Partial Coverage (Front Only)',
    'Matte / Stealth PPF',
    'Ceramic Coating + PPF',
    'Chrome Delete',
    'Custom Package',
]

export default function ContactForm() {
    const [visible, setVisible] = useState(false)
    const sectionRef = useRef(null)
    const [formData, setFormData] = useState({ name: '', email: '', vehicle: '', service: '' })
    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)

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

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitting(true)
        // Simulate submission
        setTimeout(() => {
            setSubmitting(false)
            setSubmitted(true)
        }, 1500)
    }

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="section-padding bg-mafia-charcoal/20 relative"
        >
            {/* Top border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-mafia-silver/10 to-transparent" />

            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div
                    className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <span className="font-heading text-[10px] tracking-[0.5em] uppercase text-mafia-steel mb-4 block">
                        Secure Contact
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase text-white mb-4">
                        Request a <span className="chrome-text">Quote</span>
                    </h2>
                    <p className="text-mafia-steel text-sm leading-relaxed">
                        Fill out the form below and our specialists will respond within 24 hours
                        with a detailed, no-obligation quote.
                    </p>
                </div>

                {/* Form Card */}
                <div
                    className={`glass-dark p-8 md:p-10 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    {submitted ? (
                        <div className="text-center py-10">
                            <div className="w-16 h-16 mx-auto mb-5 border border-green-500/30 rounded-full flex items-center justify-center text-green-400 animate-fade-in">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="font-heading text-sm tracking-[0.15em] uppercase text-white mb-2">
                                Message Received
                            </h3>
                            <p className="text-mafia-steel text-sm">
                                Our team will reach out to you shortly. Your data is encrypted and secure.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="font-heading text-[10px] tracking-[0.2em] uppercase text-mafia-steel mb-2 block">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Enter your name"
                                    className="w-full bg-mafia-black/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-mafia-steel/40 focus:outline-none focus:border-mafia-silver/30 transition-colors duration-300 rounded-lg"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="font-heading text-[10px] tracking-[0.2em] uppercase text-mafia-steel mb-2 block">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="your@email.com"
                                    className="w-full bg-mafia-black/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-mafia-steel/40 focus:outline-none focus:border-mafia-silver/30 transition-colors duration-300 rounded-lg"
                                />
                            </div>

                            {/* Vehicle */}
                            <div>
                                <label className="font-heading text-[10px] tracking-[0.2em] uppercase text-mafia-steel mb-2 block">
                                    Vehicle Model
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.vehicle}
                                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                                    placeholder="e.g., 2024 Porsche 911 GT3 RS"
                                    className="w-full bg-mafia-black/60 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-mafia-steel/40 focus:outline-none focus:border-mafia-silver/30 transition-colors duration-300 rounded-lg"
                                />
                            </div>

                            {/* Service Type */}
                            <div>
                                <label className="font-heading text-[10px] tracking-[0.2em] uppercase text-mafia-steel mb-2 block">
                                    Service Type
                                </label>
                                <select
                                    required
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    className="w-full bg-mafia-black/60 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-mafia-silver/30 transition-colors duration-300 appearance-none cursor-pointer rounded-lg"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2371797E'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 12px center',
                                        backgroundSize: '18px',
                                    }}
                                >
                                    <option value="" disabled className="bg-mafia-charcoal">Select a service</option>
                                    {serviceTypes.map((s) => (
                                        <option key={s} value={s} className="bg-mafia-charcoal">{s}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Security Badge */}
                            <div className="flex items-center gap-2 text-mafia-steel/60 text-xs">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <span>Your data is protected with end-to-end encryption</span>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={submitting}
                                className="btn-chrome w-full py-4 text-xs flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {submitting ? (
                                    <>
                                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Sending Securely...
                                    </>
                                ) : (
                                    'Submit Request'
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}
