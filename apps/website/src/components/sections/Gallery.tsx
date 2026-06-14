import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// רשימה של כל התמונות בתקיה - יצירה דינמית
const allPhotos = Array.from({ length: 76 }, (_, i) => 
  `/images/field-activity-photos/${i + 1}.jpeg`
);

// פונקציה לבחירת 8 תמונות רנדומליות
const selectRandomImages = (photos: string[], count: number = 8): string[] => {
  const shuffled = [...photos].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, photos.length));
};

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages(selectRandomImages(allPhotos, 8));
  }, []);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];

    // כל תמונה תקבל זמן אקראי משלה להחלפה
    for (let i = 0; i < 8; i++) {
      const randomDelay = Math.random() * 4000 + 2000; // בין 2-6 שניות

      const interval = setInterval(() => {
        setImages(prevImages => {
          const newImages = [...prevImages];
          const randomIndex = Math.floor(Math.random() * allPhotos.length);
          newImages[i] = allPhotos[randomIndex];
          return newImages;
        });
      }, randomDelay);

      intervals.push(interval);
    }

    return () => {
      timeouts.forEach(t => clearTimeout(t));
      intervals.forEach(i => clearInterval(i));
    };
  }, []);

  return (
    <section id="gallery" className="section-padding bg-text/5">
      <div className="container">
        <div className="flex justify-between items-end mb-12" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <h2 className="text-4xl font-extrabold text-text mb-2">{t('gallery.title')}</h2>
            <div className="w-20 h-1 bg-primary rounded-full" aria-hidden="true"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: false }}
              className="aspect-square rounded-2xl overflow-hidden shadow-lg"
              style={{ aspectRatio: '1/1', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
            >
              <img 
                src={img} 
                alt={`${t('gallery.image_alt') || 'תמונה מפעילות העמותה'} ${i + 1}`} 
                className="w-full h-full object-cover" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
