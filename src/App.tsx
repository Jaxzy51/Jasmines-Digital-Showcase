import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './components/Hero'; 

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Navigation />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
          </>
        } />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
