import React, { useEffect } from 'react'; // Add useEffect and React import for AOS initialization
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import '/src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// AOS imports
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in milliseconds
      
      // once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
