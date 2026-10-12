import './index.css'
import { AppProvider } from './context/AppContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Shortener from './components/Shortener'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function App() {
  return (
    <AppProvider>
      <Navbar />
      <main>
        <Hero />
        <Shortener />
        <Features />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </AppProvider>
  )
}
