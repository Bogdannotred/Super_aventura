import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TiltCard } from '../components/TiltCard';

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

export default function Contact() {
    const { t } = useLanguage();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically integrate EmailJS or a backend
        alert("Thanks via template! (Integrate email service here)");
    };

    return (
        <div className="py-20 container mx-auto px-6">
            <FadeIn>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t.contact.title}</h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-brand-light to-brand-DEFAULT mx-auto rounded-full" />
                </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <FadeIn delay={0.2}>
                    <div className="space-y-8">
                        <TiltCard>
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 h-full flex items-center space-x-6">
                                <div className="w-16 h-16 bg-brand-light/20 text-brand-DEFAULT rounded-2xl flex items-center justify-center shrink-0">
                                    <Phone size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">{t.contact.phone}</h3>
                                    <a href="tel:+40742345529" className="text-lg text-slate-600 hover:text-brand-DEFAULT transition-colors">
                                        +40 742 345 529
                                    </a>
                                </div>
                            </div>
                        </TiltCard>

                        <TiltCard>
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 h-full flex items-center space-x-6">
                                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
                                    <MessageCircle size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">WhatsApp</h3>
                                    <a href="https://wa.me/40742345529" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-emerald-500 text-white rounded-lg font-bold hover:bg-emerald-600 transition-colors shadow-md shadow-emerald-500/30 text-sm mt-1">
                                        {t.contact.whatsapp}
                                    </a>
                                </div>
                            </div>
                        </TiltCard>

                        <TiltCard>
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 h-full flex items-center space-x-6">
                                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
                                    <MapPin size={32} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">Locație</h3>
                                    <p className="text-lg text-slate-600">Suplacu de Barcău, Bihor</p>
                                </div>
                            </div>
                        </TiltCard>
                    </div>
                </FadeIn>

                {/* Contact Form */}
                <FadeIn delay={0.4}>
                    <TiltCard className="h-full">
                        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 h-full relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-light/20 rounded-bl-full -mr-20 -mt-20 pointer-events-none" />

                            <div className="space-y-6 relative z-10">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">{t.contact.name}</label>
                                    <input type="text" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-DEFAULT focus:ring-2 focus:ring-brand-light outline-none transition-all" required placeholder="Numele tău" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">{t.contact.email}</label>
                                    <input type="email" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-DEFAULT focus:ring-2 focus:ring-brand-light outline-none transition-all" required placeholder="email@exemplu.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">{t.contact.message}</label>
                                    <textarea rows="4" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-brand-DEFAULT focus:ring-2 focus:ring-brand-light outline-none transition-all resize-none" required placeholder="Mesajul tău..." />
                                </div>
                                <button type="submit" className="w-full py-4 bg-brand-dark text-white rounded-xl font-bold shadow-lg shadow-brand-DEFAULT/30 hover:bg-brand-DEFAULT transition-all flex items-center justify-center group active:scale-95">
                                    {t.contact.send} <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </TiltCard>
                </FadeIn>
            </div>

            {/* Google Map */}
            <FadeIn delay={0.6}>
                <div className="mt-20 max-w-6xl mx-auto">
                    <TiltCard>
                        <div className="bg-white p-2 rounded-3xl shadow-xl border border-slate-100 overflow-hidden h-[450px] relative">
                            <iframe
                                width="100%"
                                height="100%"
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=Suplacu+de+Barc%C4%83u&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                className="rounded-2xl w-full h-full grayscale-[50%] hover:grayscale-0 transition-all duration-700"
                                title="Map Location"
                            ></iframe>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-slate-800 font-bold shadow-sm pointer-events-none">
                                <span className="flex items-center"><MapPin size={16} className="mr-2 text-brand-DEFAULT" /> Suplacu de Barcău</span>
                            </div>
                        </div>
                    </TiltCard>
                </div>
            </FadeIn>
        </div>
    );
}
