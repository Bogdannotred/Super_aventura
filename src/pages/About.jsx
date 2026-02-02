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
                                <img src="/poze/about_us.png" onError={(e) => e.target.style.backgroundColor = '#cbd5e1'} alt="About Us" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
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
            <section className="py-20 bg-emerald-50/50">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-emerald-100 flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                            <div className="absolute inset-0 bg-emerald-900/20 z-10" />
                            <img
                                src="/poze/cleanup.png"
                                onError={(e) => { e.target.style.backgroundColor = '#10b981'; e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMxMGI5ODEiLz48dGV4dCB4PSI1MCIgeT0iNTAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC1zaXplPSIxMiI+Q2xlYW51cC4qcGc8L3RleHQ+PC9zdmc+'; }}
                                alt="Environmental Cleanup"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold tracking-wide w-fit mb-4 uppercase">{t.volunteer?.subtitle}</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t.volunteer?.title}</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">{t.volunteer?.desc}</p>
                            <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-emerald-600/30 w-fit">
                                {t.volunteer?.cta}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsors */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
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
