import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ServicesSection } from '../components/ServicesSection';

export default function Home() {
    const { t } = useLanguage();

    return (
        <div className="bg-slate-50">
            {/* Hero */}
            <section id="hero" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/poze/hero.png" onError={(e) => e.target.style.backgroundColor = '#0ea5e9'} className="w-full h-full object-cover scale-105 animate-slow-zoom" alt="Hero Background" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center text-white">
                    <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                        {t.hero.title}
                    </motion.h1>
                    <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-xl md:text-2xl font-light mb-10 text-brand-light">
                        {t.hero.subtitle}
                    </motion.p>
                    <motion.a href="/events" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="inline-block px-8 py-4 bg-brand-DEFAULT hover:bg-brand-dark text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-brand-DEFAULT/50">
                        {t.hero.cta}
                    </motion.a>
                </div>

                <motion.div
                    className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden leading-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                >
                    <svg className="relative block w-full h-[60px] md:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <motion.path
                            fill="#f8fafc" // slate-50
                            fillOpacity="1"
                            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            initial={{ d: "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
                            animate={{
                                d: [
                                    "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                    "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,160C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                    "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                ]
                            }}
                            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                        />
                    </svg>
                </motion.div>
            </section>

            {/* Services */}
            <ServicesSection className="mb-20" />

            {/* Stats */}
            <div className="relative z-10 -mt-10 mb-20 container mx-auto px-6">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row justify-around items-center space-y-8 md:space-y-0 text-slate-800">
                    <div className="text-center border-r border-gray-100 last:border-0 md:w-1/3">
                        <div className="text-3xl font-bold text-brand-dark mb-2">4+</div>
                        <div className="text-slate-500 font-medium">{t.stats.exp}</div>
                    </div>
                    <div className="text-center border-r border-gray-100 last:border-0 md:w-1/3">
                        <div className="text-3xl font-bold text-brand-dark mb-2">600+</div>
                        <div className="text-slate-500 font-medium">{t.stats.people}</div>
                    </div>
                    <div className="text-center md:w-1/3">
                        <div className="text-3xl font-bold text-brand-dark mb-2">21+</div>
                        <div className="text-slate-500 font-medium">{t.stats.activities}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
