import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FadeIn = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
    >
        {children}
    </motion.div>
);

export default function About() {
    const { t } = useLanguage();

    return (
        <div className="bg-white">
            {/* About Main */}
            <section className="py-20 container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <FadeIn>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                                <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                                <img src="/poze/about.png" onError={(e) => e.target.style.backgroundColor = '#cbd5e1'} alt="About Us" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                            </div>
                        </FadeIn>
                    </div>
                    <div className="w-full md:w-1/2">
                        <FadeIn delay={0.2}>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t.about.title}</h1>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">{t.about.desc}</p>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center text-brand-dark font-semibold"><MapPin className="mr-2" size={20} /> Suplacu de Barcău</div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Volunteer Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <FadeIn>
                        <div className="mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">{t.volunteer?.title || 'Voluntariat'}</h2>
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed">
                                {t.volunteer?.desc?.split('. ').map((sentence, i) => (
                                    <span key={i}>{sentence}. </span>
                                )) || "Loading..."}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Sponsors */}
                    <FadeIn delay={0.2}>
                        <div className="text-center max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.sponsors?.title || 'Sponsori'}</h2>
                            <p className="text-lg text-slate-600 leading-relaxed bg-brand-light/30 p-8 rounded-3xl border border-brand-light">
                                {t.sponsors?.desc || "Loading..."}
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
