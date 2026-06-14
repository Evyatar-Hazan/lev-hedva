import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Facebook, Instagram } from 'lucide-react';

import logo from '../../assets/logoLevChedva.png';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-text text-white py-20 px-6 border-t border-white/5" style={{ background: 'var(--text)', color: 'white', padding: '6rem 1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container grid md:grid-cols-4 gap-16" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '4rem' }}>
        <div className="col-span-1 md:col-span-1" style={{ gridColumn: 'span 1' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <img src={logo} alt="Logo" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
            <div className="text-2xl font-black text-primary" style={{ fontSize: '1.5rem', color: 'var(--primary)', fontWeight: 900 }}>{t('nav.home')}</div>
          </div>
          <p className="text-white/50 leading-loose mb-10" style={{ color: 'rgba(255, 255, 255, 0.5)', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
            {t('footer.description')}
          </p>
          <div className="flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://www.facebook.com/share/1CDYdUnLMj/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label={t('footer.facebook_aria') || 'Facebook'} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Facebook size={20} aria-hidden="true" /></a>
            <a href="https://www.instagram.com/levchedva?igsh=MXV3NzJkYTR6bWwweQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label={t('footer.instagram_aria') || 'Instagram'} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><Instagram size={20} aria-hidden="true" /></a>
            <a href="https://x.com/levchedva?s=11" target="_blank" rel="noopener noreferrer" aria-label={t('footer.twitter_aria') || 'X'} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all"><img src="/images/x-logo.svg" alt="X" style={{ width: '20px', height: '20px' }} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">{t('footer.nav_title')}</h4>
          <ul className="space-y-4 text-white/60" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><a href="#" className="hover:text-primary transition-colors">{t('nav.home')}</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">{t('nav.about')}</a></li>
            <li><a href="#gallery" className="hover:text-primary transition-colors">{t('nav.activities')}</a></li>
            <li><a href="#donate" className="hover:text-primary transition-colors">{t('nav.donation')}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">{t('footer.contact_title')}</h4>
          <ul className="space-y-4 text-white/60" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li>{t('contact.phone')}: 054-5420068</li>
            <li>{t('contact.email')}: levchedva2021@gmail.com</li>
            <li>{t('footer.address_label')}: {t('contact.address_value')}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">{t('footer.donation_title')}</h4>
          <p className="text-white/60 mb-6" style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: '1.5rem' }}>{t('footer.donation_desc')}</p>          
          <div className="mb-6 flex justify-center md:justify-start" style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <div className="p-2 bg-white rounded-lg shadow-sm" style={{ padding: '0.5rem', backgroundColor: 'white', borderRadius: '0.5rem' }}>
              <img 
            onClick={() => window.location.href = '#donate'}
                src="/images/qrcode_www.matara.pro.png" 
                alt={t('footer.qr_alt') || 'קוד QR לתרומה מהירה'} 
                style={{ width: '120px', height: '120px', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center', color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.875rem' }}>
        <p className="flex flex-wrap justify-center items-center gap-1">
          <span>© {new Date().getFullYear()} {t('footer.rights')}</span>
          <span className="flex items-center gap-1">
            {t('footer.built_with')} <Heart size={12} aria-hidden="true" className="text-primary" fill="currentColor" style={{ color: 'var(--primary)' }} /> {t('footer.by')}
          </span>
          <a href="https://evyatarhazan.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }} className="hover:underline" aria-label="Evyatar Hazan - Website Developer (Opens in new tab)"> Evyatar Hazan </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
