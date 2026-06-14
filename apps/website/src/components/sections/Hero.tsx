import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero relative overflow-hidden flex items-center justify-center min-h-[95vh] pt-28" style={{ minHeight: '95vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '7rem' }}>
      {/* Background Decorative Elements */}
      <div aria-hidden="true" className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[120px] -z-10" style={{ position: 'absolute', top: '-20%', right: '-10%', width: '50vw', height: '50vw', background: 'rgba(230, 57, 70, 0.05)', borderRadius: '50%', filter: 'blur(120px)', zIndex: -10 }}></div>
      <div aria-hidden="true" className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-secondary/5 rounded-full blur-[120px] -z-10" style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '40vw', height: '40vw', background: 'rgba(69, 123, 157, 0.05)', borderRadius: '50%', filter: 'blur(120px)', zIndex: -10 }}></div>

      <div className="container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6 font-semibold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(230, 57, 70, 0.1)', color: 'var(--primary)', borderRadius: '9999px', marginBottom: '1.5rem', fontWeight: 600 }}>
            <Heart size={18} fill="currentColor" aria-hidden="true" />
            <span>{t('hero.badge')}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-text" style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', color: 'var(--text)', marginBottom: '1.5rem' }}>
            <span className="text-primary" style={{ color: 'var(--primary)' }}>{t('hero.title1')}</span>
            <br />
            {t('hero.title2')}
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-text/80 mb-10 mx-auto" style={{ maxWidth: '42rem', fontSize: '1.25rem', color: 'rgba(29, 53, 87, 0.8)', marginBottom: '2.5rem', marginLeft: 'auto', marginRight: 'auto' }}>
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4" style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#donate"
              className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/30 text-lg hover:bg-primary-dark transition-all w-full sm:w-auto text-center"
              style={{ padding: '1rem 2rem', background: 'var(--primary)', color: 'white', borderRadius: '1rem', fontWeight: 'bold', fontSize: '1.125rem', boxShadow: '0 10px 15px -3px rgba(230, 57, 70, 0.3)', textDecoration: 'none' }}
            >
              {t('hero.cta')}
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 bg-white text-text rounded-2xl font-bold border-2 border-text/10 text-lg hover:border-text/30 transition-all w-full sm:w-auto text-center"
              style={{ padding: '1rem 2rem', background: 'white', color: 'var(--text)', borderRadius: '1rem', fontWeight: 'bold', border: '2px solid rgba(29, 53, 87, 0.1)', fontSize: '1.125rem', textDecoration: 'none' }}
            >
              {t('hero.join_volunteer')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
