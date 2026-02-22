import { useState } from 'react'

export default function SecureChat() {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([
        { from: 'system', text: 'Welcome to MafiaWarz Secure Chat. This channel is end-to-end encrypted. How can we help you?' },
    ])

    const handleSend = (e) => {
        e.preventDefault()
        if (!message.trim()) return
        setMessages([...messages, { from: 'user', text: message }])
        setMessage('')
        setTimeout(() => {
            setMessages((prev) => [...prev, { from: 'system', text: 'Thank you for your message. A specialist will reach out shortly.' }])
        }, 1500)
    }

    return (
        <>
            {/* Chat Panel */}
            <div className={`fixed bottom-24 right-6 z-50 w-[340px] max-h-[460px] flex flex-col bg-mafia-charcoal border border-white/10 shadow-2xl shadow-black/60 transition-all duration-500 origin-bottom-right rounded-2xl overflow-hidden ${open ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'}`}>
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-mafia-black/50">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-heading text-[10px] tracking-[0.15em] uppercase text-mafia-chrome">Encrypted Chat</span>
                    </div>
                    <button onClick={() => setOpen(false)} className="text-mafia-steel hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <div className="px-4 py-2 bg-mafia-black/30 text-center">
                    <span className="text-[9px] text-mafia-steel/50 flex items-center justify-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        Messages are end-to-end encrypted
                    </span>
                </div>
                <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-[200px] max-h-[280px]">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] px-3 py-2 text-xs leading-relaxed ${msg.from === 'user' ? 'bg-mafia-gunmetal text-mafia-chrome border border-mafia-silver/10' : 'bg-mafia-black/60 text-mafia-steel border border-white/5'}`}>{msg.text}</div>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSend} className="px-3 py-3 border-t border-white/5 flex gap-2">
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message..." className="flex-1 bg-mafia-black/60 border border-white/10 px-3 py-2 text-xs text-white placeholder:text-mafia-steel/40 focus:outline-none focus:border-mafia-silver/30" />
                    <button type="submit" className="px-3 py-2 bg-mafia-gunmetal border border-mafia-silver/20 text-mafia-chrome hover:border-mafia-silver/40 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    </button>
                </form>
            </div>
            {/* Floating Button */}
            <button onClick={() => setOpen(!open)} className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center bg-mafia-gunmetal border border-mafia-silver/30 text-mafia-chrome shadow-lg shadow-black/50 hover:border-mafia-silver/50 transition-all duration-300 ${!open ? 'animate-glow-pulse' : ''}`} aria-label="Open secure chat">
                {open ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
                ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                )}
            </button>
        </>
    )
}
