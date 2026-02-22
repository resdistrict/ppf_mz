import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProtectionDetail from './components/ProtectionDetail'
import Gallery from './components/Gallery'
import Omerta from './components/Omerta'
import ContactForm from './components/ContactForm'
import SecureChat from './components/SecureChat'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen bg-mafia-black text-gray-300 font-body">
            <Navbar />
            <main>
                <Hero />
                <ProtectionDetail />
                <Gallery />
                <Omerta />
                <ContactForm />
            </main>
            <Footer />
            <SecureChat />
        </div>
    )
}

export default App
