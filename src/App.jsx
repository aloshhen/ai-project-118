import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Catalog from './components/Catalog'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0F172A] min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Catalog />
      <Footer />
    </div>
  )
}

export default App