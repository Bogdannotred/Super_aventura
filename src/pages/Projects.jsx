import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { TiltCard } from '../components/TiltCard';
import Gallery from './Gallery';

const FadeIn = ({ children, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay }}
        className={className}
    >
        {children}
    </motion.div>
);

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section className="py-20 container mx-auto px-6">
            <FadeIn>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t.projects.title}</h1>
                    <div className="w-20 h-1.5 bg-brand-DEFAULT mx-auto rounded-full mb-8" />
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">{t.projects.intro}</p>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {t.projects.items.map((item, index) => (
                    <FadeIn key={index} delay={index * 0.1} className="h-full">
                        <TiltCard className="h-full">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col hover:border-brand-light transition-colors relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-light/20 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500" />
                                <h3 className="text-xl font-bold mb-4 text-slate-800 group-hover:text-brand-DEFAULT transition-colors relative z-10">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed flex-grow relative z-10">{item.desc}</p>
                            </div>
                        </TiltCard>
                    </FadeIn>
                ))}
            </div>

            <FadeIn delay={0.4}>
                <div className="mt-16 text-center">
                    <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed italic bg-brand-50 p-6 rounded-2xl border border-brand-light/50">
                        {t.projects.outro}
                    </p>
                </div>
            </FadeIn>

            <div className="mt-24">
                <Gallery embedded />
            </div>
        </section>
    );
}
