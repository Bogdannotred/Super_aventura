import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Anchor, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TiltCard } from './TiltCard';

const FadeIn = ({ children, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

export function ServicesSection({ className = "" }) {
    const { t } = useLanguage();

    return (
        <section className={`py-20 container mx-auto px-6 ${className}`}>
            <FadeIn>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t.services.title}</h1>
                    <div className="w-20 h-1.5 bg-brand-DEFAULT mx-auto rounded-full" />
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: t.services.s1_title, desc: t.services.s1_desc, icon: <Wind size={40} className="text-brand-DEFAULT" />, img: '/poze/lessons.png' },
                    { title: t.services.s2_title, desc: t.services.s2_desc, icon: <Anchor size={40} className="text-brand-DEFAULT" />, img: '/poze/equipment.png' },
                    { title: t.services.s3_title, desc: t.services.s3_desc, icon: <Users size={40} className="text-brand-DEFAULT" />, img: '/poze/events.png' }
                ].map((s, i) => (
                    <TiltCard key={i} className="h-full">
                        <motion.div
                            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden group h-full glass flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/30 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                            <div className="mb-6 relative z-10">{s.icon}</div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-brand-DEFAULT transition-colors">{s.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{s.desc}</p>
                            <div className="w-full h-48 rounded-2xl overflow-hidden mt-auto shadow-sm">
                                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                        </motion.div>
                    </TiltCard>
                ))}
            </div>
        </section>
    );
}
