import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import logo from '../../assets/logoLevChedva.png';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'he' ? 'en' : 'he');
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.statistics'), href: '#stats' },
    { name: t('nav.activities'), href: '#gallery' },
    { name: t('nav.donation'), href: '#donate' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav 
      aria-label={t('nav.aria_label') || 'Main Navigation'}
      className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled 
        ? "bg-white shadow-2xl py-3" 
        : "bg-white/90 backdrop-blur-md py-5 shadow-lg"
    )} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      backgroundColor: isScrolled ? '#ffffff' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(12px)',
      boxShadow: isScrolled ? '0 15px 40px -10px rgba(0,0,0,0.15)' : '0 4px 20px -5px rgba(0,0,0,0.05)',
      padding: isScrolled ? '0.75rem 1.5rem' : '1.25rem 1.5rem',
      borderTop: '4px solid var(--primary)',
    }}>
      <div className="container" style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={handleLogoClick}>
          <img src={logo} alt={t('nav.logo_alt') || 'לב חדווה - דף הבית'} style={{ height: '55px', width: 'auto', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.05))' }} />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="navbar-link" style={{
              color: 'var(--text)',
              fontSize: '0.95rem',
              fontWeight: 800,
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative'
            }}>
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleLanguage} 
            aria-label={i18n.language === 'he' ? 'Switch to English' : 'החלף לעברית'}
            className="bg-primary hover:bg-primary-dark text-white" 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 1.25rem',
              borderRadius: '0.75rem',
              backgroundColor: 'var(--primary)',
              color: 'white',
              fontWeight: 800,
              fontSize: '0.85rem',
              boxShadow: '0 8px 20px -6px rgba(230, 57, 70, 0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <Globe size={18} aria-hidden="true" />
            <span style={{ letterSpacing: '0.05em' }}>{i18n.language === 'he' ? 'English' : 'עברית'}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex items-center justify-center p-2 text-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? t('nav.close_menu') || 'Close menu' : t('nav.open_menu') || 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          style={{ border: 'none', background: 'none', cursor: 'pointer' }}
        >
          {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            style={{ 
              backgroundColor: 'white', 
              borderTop: '1px solid rgba(0,0,0,0.05)',
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
            }}
          >
            <div className="flex flex-col p-6 gap-4" style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', gap: '1rem' }}>
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: 'var(--text)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    padding: '0.75rem 0',
                    borderBottom: '1px solid rgba(0,0,0,0.03)'
                  }}
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }} 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem',
                  borderRadius: '0.75rem',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  marginTop: '0.5rem',
                  justifyContent: 'center'
                }}
              >
                <Globe size={20} />
                <span>{i18n.language === 'he' ? 'English' : 'עברית'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden { display: none !important; }
          .md\\:flex { display: none !important; }
          .md\\:hidden { display: flex !important; }
        }
        @media (min-width: 769px) {
          .md\\:flex { display: flex !important; }
          .md\\:hidden { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
