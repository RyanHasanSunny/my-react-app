import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'
import Contact from './pages/Contact'
import Reviews from './pages/Reviews'
import Support from './pages/Support'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/support" element={<Support />} />
          <Route path="/services" element={<Services />} />
           <Route path="/services/:serviceId" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App