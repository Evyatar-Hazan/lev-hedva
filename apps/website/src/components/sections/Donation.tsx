import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Building2, Smartphone, Heart, Package, ExternalLink, MessageCircle } from 'lucide-react';

/* ─── donation options ─── */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const Donation: React.FC = () => {
  const { t } = useTranslation();

  const OPTIONS = [
    {
      icon: Building2,
      image: '/images/bank.jpeg',
      title: t('donation.bank_transfer'),
      desc: t('donation.bank_desc'),
      gradient: 'linear-gradient(135deg,#3b82f6,#06b6d4)',
      glow: 'rgba(59,130,246,0.28)',
      accent: '#3b82f6',
      lightBg: 'rgba(59,130,246,0.07)',
      details: [
        { label: t('donation.bank_name'), value: t('donation.bank_value') },
        { label: t('donation.branch'), value: t('donation.branch_value') },
        { label: t('donation.account'), value: t('donation.account_value') },
        { label: t('donation.for'), value: t('donation.account_name') },
      ],
    },
    {
      icon: Smartphone,
      title: 'ביט & פייבוקס',
      desc: t('donation.bit_desc'),
      gradient: 'linear-gradient(135deg,#10b981,#34d399)',
      glow: 'rgba(16,185,129,0.28)',
      accent: '#10b981',
      lightBg: 'rgba(16,185,129,0.07)',
      phone: '054-5420068',
      dualAction: [
        {
          image: '/images/bit-logo.png',
          label: 'ביט',
          url: 'https://www.bitpay.co.il/app/me/6FA56EBA-0152-B598-592D-F9AAC4017A0E7082',
        },
        {
          image: '/images/paybox_logo.png',
          label: 'פייבוקס',
          url: 'https://www.paybox.co.il/TzedakaPro/Default.aspx?OrgID=1130&OrgName=LevChedva',
        },
      ],
    },
    {
      icon: Heart,
      image: '/images/Nedarim_plus_logo.jpeg',
      title: t('donation.nedarim_plus'),
      desc: t('donation.nedarim_desc'),
      gradient: 'linear-gradient(135deg,#8b5cf6,#ec4899)',
      glow: 'rgba(139,92,246,0.28)',
      accent: '#8b5cf6',
      lightBg: 'rgba(139,92,246,0.07)',
      url: 'https://www.matara.pro/nedarimplus/online/?mosad=7005008',
      action: t('donation.nedarim_cta'),
    },
    {
      icon: Package,
      title: t('donation.medical_equipment'),
      desc: t('donation.medical_desc'),
      gradient: 'linear-gradient(135deg,#f97316,#fbbf24)',
      glow: 'rgba(249,115,22,0.28)',
      accent: '#f97316',
      lightBg: 'rgba(249,115,22,0.07)',
      phone: t('donation.phone'),
      action: t('donation.send_message'),
    },
  ];

  return (
    <section
      id="donate"
      className="section-padding"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg,#f1faee 0%,#e8f4f8 100%)',
      }}
    >
      {/* decorative blobs */}
      <div style={{ position:'absolute', top:'-12%', right:'-6%', width:'45vw', height:'45vw', background:'radial-gradient(circle,rgba(230,57,70,0.07) 0%,transparent 70%)', borderRadius:'50%', pointerEvents:'none', zIndex:0 }} />
      <div style={{ position:'absolute', bottom:'-12%', left:'-6%', width:'38vw', height:'38vw', background:'radial-gradient(circle,rgba(69,123,157,0.07) 0%,transparent 70%)', borderRadius:'50%', pointerEvents:'none', zIndex:0 }} />

      <div className="container" style={{ position:'relative', zIndex:1 }}>

        {/* ── header ── */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:false, amount:0.3 }}
          transition={{ duration:0.7 }}
          style={{ textAlign:'center', marginBottom:'4rem' }}
        >
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'0.5rem',
            padding:'0.4rem 1.1rem',
            background:'rgba(230,57,70,0.1)', color:'var(--primary)',
            borderRadius:'9999px', fontSize:'0.88rem', fontWeight:700,
            marginBottom:'1.1rem', border:'1px solid rgba(230,57,70,0.18)',
          }}>
            <Heart size={14} fill="currentColor" aria-hidden="true" />
            <span>{t('donation.badge')}</span>
          </div>

          <h2 style={{
            fontSize:'clamp(1.9rem,5vw,3rem)', fontWeight:900,
            color:'var(--text)', marginBottom:'0.75rem', lineHeight:1.15,
          }}>
            {t('donation.title')}
          </h2>
          <p style={{ fontSize:'1.05rem', color:'rgba(29,53,87,0.62)', maxWidth:'520px', margin:'0 auto' }}>
            {t('donation.subtitle')}
          </p>
        </motion.div>

        {/* ── cards ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false, amount:0.1 }}
          style={{
            display:'grid',
            gridTemplateColumns: '1fr',
            gap:'1.5rem',
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-4"
        >
          <style>{`
            @media (min-width: 640px) {
              #donate .grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (min-width: 1024px) {
              #donate .grid { grid-template-columns: repeat(4, 1fr) !important; }
            }
          `}</style>
          {OPTIONS.map((opt, i) => {
            const Icon = opt.icon;
            const waLink = opt.phone
              ? `https://wa.me/972${opt.phone.replace(/-/g,'').replace(/^0/,'')}?text=${encodeURIComponent(t('donation.methods_title'))}`
              : undefined;

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y:-10, boxShadow:`0 28px 56px ${opt.glow},0 0 0 1.5px rgba(255,255,255,0.65)` }}
                aria-labelledby={`donation-title-${i}`}
                style={{
                  position:'relative', overflow:'hidden',
                  background:'rgba(255,255,255,0.84)',
                  backdropFilter:'blur(18px)', WebkitBackdropFilter:'blur(18px)',
                  borderRadius:'1.75rem',
                  border:'1.5px solid rgba(255,255,255,0.7)',
                  boxShadow:'0 8px 32px rgba(31,38,135,0.09)',
                  padding: '2rem 1.25rem',
                  display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center',
                  transition:'box-shadow 0.3s ease, transform 0.3s ease',
                }}
              >
                {/* top gradient accent bar */}
                <div style={{
                  position:'absolute', top:0, left:0, right:0,
                  height:'5px', background:opt.gradient,
                  borderRadius:'1.75rem 1.75rem 0 0',
                }} />

                {/* icon bubble */}
                {opt.dualAction ? (
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1.25rem',
                    marginTop: '0.5rem',
                  }}>
                    {opt.dualAction.map((action, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.12, rotate: 6 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '1rem',
                          background: opt.gradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 8px 24px ${opt.glow}`,
                          color: 'white',
                          overflow: 'hidden',
                          padding: '3px',
                        }}
                      >
                        <img
                          src={action.image}
                          alt={action.label}
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '1.2rem',
                      background: opt.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 8px 24px ${opt.glow}`,
                      marginBottom: '1.25rem',
                      marginTop: '0.5rem',
                      color: 'white',
                      overflow: 'hidden',
                      padding: '4px',
                    }}
                  >
                    {opt.image ? (
                      <img
                        src={opt.image}
                        alt={opt.title}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    ) : (
                      <Icon size={28} strokeWidth={2} aria-hidden="true" />
                    )}
                  </motion.div>
                )}

                <h3 id={`donation-title-${i}`} style={{ fontSize:'1.1rem', fontWeight:800, color:'var(--text)', marginBottom:'0.35rem' }}>
                  {opt.title}
                </h3>
                <p style={{ fontSize:'0.87rem', color:'rgba(29,53,87,0.58)', marginBottom:'1.4rem', flexGrow:1 }}>
                  {opt.desc}
                </p>

                {/* bank details block */}
                {opt.details && (
                  <div style={{
                    width:'100%', background:opt.lightBg, borderRadius:'1rem',
                    padding:'1rem 0.75rem', marginBottom:'1.25rem',
                    borderRight:`4px solid ${opt.accent}`, textAlign:'right',
                  }}>
                    {opt.details.map((d, idx) => (
                      <div key={idx} style={{ display:'flex', justifyContent:'space-between', fontSize:'0.75rem', gap: '0.5rem', lineHeight:2.2, color:'rgba(29,53,87,0.72)' }}>
                        <span style={{ fontWeight:700, color:opt.accent, whiteSpace: 'nowrap' }}>{d.label}</span>
                        <span style={{ fontWeight:600, wordBreak: 'break-word', textAlign: 'left' }}>{d.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* phone badge */}
                {opt.phone && (
                  <div style={{
                    width:'100%', padding:'0.6rem 1rem', marginBottom:'1.25rem',
                    background:opt.lightBg, borderRadius:'0.8rem',
                    border:`1.5px solid ${opt.accent}33`,
                    color:opt.accent, fontWeight:700, fontSize:'1rem', direction:'ltr',
                    display:'flex', alignItems:'center', justifyContent:'center',
                  }}>
                    {opt.phone}
                  </div>
                )}

                {/* CTA */}
                {opt.details ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => {
                      const detailsText = opt.details
                        .map((d) => `${d.label}: ${d.value}`)
                        .join('\n');
                      navigator.clipboard.writeText(detailsText).then(() => {
                        alert('פרטי התרומה הועתקו ללוח!');
                      });
                    }}
                    style={{
                      marginTop: 'auto',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.7rem 1.5rem',
                      background: opt.gradient,
                      color: 'white',
                      borderRadius: '0.85rem',
                      fontWeight: 700,
                      fontSize: '0.93rem',
                      boxShadow: `0 6px 18px ${opt.glow}`,
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    aria-label={`העתק פרטי תרומה - ${opt.title}`}
                  >
                    📋 העתק פרטים
                  </motion.button>
                ) : opt.dualAction ? (
                  <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto', width: '100%' }}>
                    {opt.dualAction.map((action, idx) => (
                      <motion.a
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        href={action.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${action.label} - ${opt.title} (Opens in new tab)`}
                        style={{
                          flex: 1,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.4rem',
                          padding: '0.6rem 1rem',
                          background: opt.gradient,
                          color: 'white',
                          borderRadius: '0.75rem',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          boxShadow: `0 6px 18px ${opt.glow}`,
                          textDecoration: 'none',
                        }}
                      >
                        <ExternalLink size={12} aria-hidden="true" />
                        {action.label}
                      </motion.a>
                    ))}
                  </div>
                ) : opt.url ? (
                  <motion.a
                    whileHover={{ scale:1.05 }} whileTap={{ scale:0.96 }}
                    href={opt.url} target="_blank" rel="noopener noreferrer"
                    aria-label={`${opt.action} - ${opt.title} (Opens in new tab)`}
                    style={{
                      marginTop:'auto', display:'inline-flex', alignItems:'center', gap:'0.4rem',
                      padding:'0.7rem 1.5rem', background:opt.gradient, color:'white',
                      borderRadius:'0.85rem', fontWeight:700, fontSize:'0.93rem',
                      boxShadow:`0 6px 18px ${opt.glow}`, textDecoration:'none',
                    }}
                  >
                    <ExternalLink size={14} aria-hidden="true" />
                    {opt.action}
                  </motion.a>
                ) : waLink ? (
                  <motion.a
                    whileHover={{ scale:1.05 }} whileTap={{ scale:0.96 }}
                    href={waLink} target="_blank" rel="noopener noreferrer"
                    aria-label={`${opt.action} - ${opt.title} via WhatsApp (Opens in new tab)`}
                    style={{
                      marginTop:'auto', display:'inline-flex', alignItems:'center', gap:'0.4rem',
                      padding:'0.7rem 1.5rem', background:opt.gradient, color:'white',
                      borderRadius:'0.85rem', fontWeight:700, fontSize:'0.93rem',
                      boxShadow:`0 6px 18px ${opt.glow}`, textDecoration:'none',
                    }}
                  >
                    <MessageCircle size={14} aria-hidden="true" />
                    {opt.action}
                  </motion.a>
                ) : (
                  <motion.button
                    whileHover={{ scale:1.05 }} whileTap={{ scale:0.96 }}
                    style={{
                      marginTop:'auto', display:'inline-flex', alignItems:'center', gap:'0.4rem',
                      padding:'0.7rem 1.5rem', background:opt.gradient, color:'white',
                      borderRadius:'0.85rem', fontWeight:700, fontSize:'0.93rem',
                      boxShadow:`0 6px 18px ${opt.glow}`, border:'none', cursor:'pointer',
                    }}
                  >
                    {opt.action ?? t('donation.choose')}
                  </motion.button>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Donation;
