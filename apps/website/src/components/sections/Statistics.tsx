import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Calendar, Hospital, Heart } from 'lucide-react';

const Statistics: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { icon: <Users size={32} />, label: t('stats.volunteers'), value: '450+' },
    { icon: <Calendar size={32} />, label: t('stats.visits'), value: '12,000+' },
    { icon: <Hospital size={32} />, label: t('stats.centers'), value: '18' },
    { icon: <Heart size={32} />, label: t('stats.smiles'), value: t('stats.limitless') },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="stats" className="section-padding bg-text text-white" style={{ background: 'var(--text)', color: 'white' }}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}
        >
          <style>{`
            @media (min-width: 768px) {
              #stats .grid { grid-template-columns: repeat(4, 1fr) !important; gap: 2rem !important; }
            }
          `}</style>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 glass-card border-white/10"
              aria-label={`${stat.label}: ${stat.value}`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}
            >
              <div aria-hidden="true" className="mb-4 text-primary" style={{ marginBottom: '1rem', color: 'var(--primary)' }}>
                {stat.icon}
              </div>
              <div className="text-3xl font-extrabold mb-2" style={{ fontSize: '1.875rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                {stat.value}
              </div>
              <div className="text-white/70 font-medium" style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
