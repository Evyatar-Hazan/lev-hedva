import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-padding">
      <div className="container grid md:grid-cols-2 gap-12 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="relative"
        >
          <div className="aspect-square bg-primary/10 rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1', background: 'rgba(230, 57, 70, 0.1)', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            <img 
              src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt={t('about.image_alt') || 'מתנדבי עמותת לב חדווה בפעילות'} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'filter 0.7s ease' }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl font-extrabold mb-8 text-text" style={{ fontSize: '2.25rem', marginBottom: '2rem' }}>
            {t('about.title')}
          </h2>
          <p className="text-lg text-text/80 mb-6" style={{ fontSize: '1.125rem', color: 'rgba(29, 53, 87, 0.8)', marginBottom: '1.5rem' }}>
            {t('about.description')}
          </p>
          <div className="p-6 bg-primary/5 border-r-4 border-primary rounded-2xl md:rounded-r-none md:rounded-l-2xl" style={{ padding: '1.5rem', background: 'rgba(230, 57, 70, 0.05)', borderRight: '4px solid var(--primary)', borderRadius: '1.5rem' }}>
            <p className="text-lg font-medium italic text-text" style={{ fontSize: '1.125rem', fontWeight: 500, fontStyle: 'italic' }}>
              {t('about.mission')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
