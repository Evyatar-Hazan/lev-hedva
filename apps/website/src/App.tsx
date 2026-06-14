import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Statistics from './components/sections/Statistics';
import Donation from './components/sections/Donation';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './App.css';

const App: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        {i18n.language === 'he' ? 'דלג לתוכן המרכזי' : 'Skip to main content'}
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Statistics />
        <Gallery />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
