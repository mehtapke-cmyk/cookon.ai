
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SensoryCarouselPage from '@/pages/SensoryCarouselPage';
import { Toaster } from '@/components/ui/toaster';

// Extracted main page content to keep App.jsx clean with routing
const MainLayout = () => (
  <>
    <Helmet>
      <title>Cookon.ai - Innovative Spectacular Culinary Solutions</title>
      <meta name="description" content="Innovative spectacular culinary solutions powered by artificial intelligence. Discover a new era of personalized recipes and extraordinary dining experiences." />
    </Helmet>
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/experience" element={<SensoryCarouselPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
