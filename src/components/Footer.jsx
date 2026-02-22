export default function Footer() {
    return (
        <footer className="bg-mafia-charcoal/30 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-7 h-7 border border-mafia-silver/40 flex items-center justify-center rotate-45">
                                <span className="text-mafia-silver font-heading text-[10px] -rotate-45 font-bold">M</span>
                            </div>
                            <span className="font-heading text-lg tracking-[0.3em] chrome-text font-bold">MAFIAWARZ</span>
                        </div>
                        <p className="text-mafia-steel text-xs leading-relaxed max-w-xs">
                            Premium Paint Protection Film specialists. Protecting the world's finest automobiles with military-grade precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading text-[10px] tracking-[0.3em] uppercase text-mafia-chrome mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Protection Detail', 'The Vault', 'Omertà Guarantee', 'Contact Us'].map((link, i) => (
                                <li key={link}>
                                    <a href={['#protection', '#vault', '#omerta', '#contact'][i]} className="text-mafia-steel text-xs hover:text-mafia-chrome transition-colors duration-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h4 className="font-heading text-[10px] tracking-[0.3em] uppercase text-mafia-chrome mb-4">Get Started</h4>
                        <p className="text-mafia-steel text-xs leading-relaxed mb-4">
                            Ready to protect your investment? Get a no-obligation quote today.
                        </p>
                        <a href="#contact" className="btn-chrome text-[10px] inline-block">Request a Quote</a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-mafia-steel/50 text-[10px] tracking-wider">
                        © 2026 MafiaWarz PPF Specialists. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        {['Instagram', 'WhatsApp', 'YouTube'].map((social) => (
                            <a key={social} href="#" className="text-mafia-steel/40 hover:text-mafia-chrome text-[10px] font-heading tracking-[0.1em] uppercase transition-colors duration-300">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
