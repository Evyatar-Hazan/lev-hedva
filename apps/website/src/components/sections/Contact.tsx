import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const contactItems = [
    { 
      icon: Phone, 
      label: t('contact.phone'), 
      value: '054-5420068', 
      color: 'var(--primary)',
      link: 'tel:0545420068'
    },
    { 
      icon: MessageCircle, 
      label: t('contact.whatsapp'), 
      value: '054-5420068', 
      color: '#10b981',
      link: 'https://wa.me/972545420068'
    },
    { 
      icon: Mail, 
      label: t('contact.email'), 
      value: 'levchedva2021@gmail.com', 
      color: 'var(--secondary)',
      link: 'mailto:levchedva2021@gmail.com'
    },
    { 
      icon: MapPin, 
      label: t('contact.address'), 
      value: t('contact.address_value'), 
      color: '#60a5fa',
      link: null
    },
  ];

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      {/* Background Decorative Elements */}
      <div aria-hidden="true" style={{ position: 'absolute', top: '10%', left: '-5%', width: '30vw', height: '30vw', background: 'rgba(230, 57, 70, 0.05)', borderRadius: '50%', filter: 'blur(100px)', zIndex: -1 }}></div>
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '25vw', height: '25vw', background: 'rgba(69, 123, 157, 0.05)', borderRadius: '50%', filter: 'blur(100px)', zIndex: -1 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="glass-card"
          style={{ 
            padding: isMobile ? '2.5rem 1.5rem' : '4rem', 
            borderRadius: '2.5rem', 
            border: '1px solid rgba(230, 57, 70, 0.1)',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            marginBottom: '1.5rem', 
            padding: '0.4rem 1.25rem', 
            background: 'rgba(230, 57, 70, 0.1)', 
            color: 'var(--primary)', 
            borderRadius: '9999px',
            fontWeight: 'bold',
            fontSize: '0.875rem'
          }}>
            <MessageCircle size={16} aria-hidden="true" />
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t('contact.badge')}</span>
          </div>
          
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            fontWeight: 900, 
            marginBottom: '1.5rem', 
            color: 'var(--text)', 
            lineHeight: 1.1 
          }}>
            {t('contact.title')}
          </h2>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'rgba(29, 53, 87, 0.7)', 
            lineHeight: 1.6, 
            fontWeight: 500, 
            marginBottom: '3rem', 
            maxWidth: '700px', 
            marginInline: 'auto',
            textAlign: 'center'
          }}>
            {t('contact.description')}
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', 
            gap: isMobile ? '2rem' : '1.5rem',
            alignItems: 'start',
            marginBottom: '4rem'
          }}>
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false }}
                  whileHover={item.link ? { y: -8, scale: 1.02 } : {}}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  {item.link ? (
                    <a 
                      href={item.link} 
                      aria-label={`${item.label}: ${item.value}`}
                      target={item.link.startsWith('http') ? '_blank' : undefined} 
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        textDecoration: 'none',
                        color: 'inherit',
                        width: '100%',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ 
                        width: '80px',
                        height: '80px',
                        borderRadius: '1.5rem', 
                        background: 'white', 
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)', 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem',
                        color: item.color,
                        border: '1px solid rgba(0,0,0,0.03)',
                        transition: 'all 0.3s ease'
                      }}>
                        <Icon size={38} strokeWidth={2} aria-hidden="true" />
                      </div>
                      <div style={{ 
                        fontSize: '0.875rem', 
                        color: 'rgba(29, 53, 87, 0.4)', 
                        fontWeight: '800', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.15em', 
                        marginBottom: '0.5rem' 
                      }}>
                        {item.label}
                      </div>
                      <div style={{ 
                        fontSize: '1.125rem', 
                        fontWeight: '800', 
                        color: 'var(--text)', 
                        direction: 'ltr' 
                      }}>
                        {item.value}
                      </div>
                    </a>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                      <div style={{ 
                        width: '80px',
                        height: '80px',
                        borderRadius: '1.5rem', 
                        background: 'white', 
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)', 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem',
                        color: item.color,
                        border: '1px solid rgba(0,0,0,0.03)'
                      }}>
                        <Icon size={38} strokeWidth={2} aria-hidden="true" />
                      </div>
                      <div style={{ 
                        fontSize: '0.875rem', 
                        color: 'rgba(29, 53, 87, 0.4)', 
                        fontWeight: '800', 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.15em', 
                        marginBottom: '0.5rem' 
                      }}>
                        {item.label}
                      </div>
                      <div style={{ 
                        fontSize: '1.125rem', 
                        fontWeight: '800', 
                        color: 'var(--text)', 
                        textAlign: 'center'
                      }}>
                        {item.value}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div style={{ 
            paddingTop: '3rem', 
            borderTop: '1px solid rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? '1.5rem' : '3rem'
          }}>
            <div style={{ textAlign: isMobile ? 'center' : 'right' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text)' }}>{t('contact.volunteer_title')}</h3>
              <p style={{ color: 'rgba(29, 53, 87, 0.6)', fontWeight: 600, fontSize: '1rem' }}>{t('contact.volunteer_desc')}</p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/972545420068"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                padding: '1.1rem 2.5rem', 
                background: 'var(--primary)', 
                color: 'white', 
                borderRadius: '1.25rem', 
                fontWeight: '900',
                boxShadow: '0 15px 30px -5px rgba(230, 57, 70, 0.4)',
                fontSize: '1.1rem'
              }}
            >
              <MessageCircle size={22} fill="currentColor" />
              <span>{t('contact.whatsapp_cta')}</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;