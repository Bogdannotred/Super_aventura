import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { client } from '../client';
import { useLanguage } from '../context/LanguageContext';
import { TiltCard } from '../components/TiltCard';

const FadeIn = ({ children, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className={className}
    >
        {children}
    </motion.div>
);

export default function Events() {
    const { t, lang } = useLanguage();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = () => {
            const eventsQuery = '*[_type == "eveniment"] | order(date asc) {..., "image": image.asset->url}';
            client.fetch(eventsQuery).then(data => {
                setEvents(data);
                setLoading(false);
            }).catch(err => {
                console.error("Sanity Fetch Error:", err);
                setLoading(false);
            });
        };

        fetchEvents();
    }, []);

    return (
        <section className="py-20 container mx-auto px-6">
            <FadeIn>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t.events.title}</h1>
                    <div className="w-20 h-1.5 bg-brand-DEFAULT mx-auto rounded-full" />
                </div>
            </FadeIn>

            {loading ? (
                <div className="text-center py-12 text-slate-500">{t.events.loading}</div>
            ) : events.length === 0 ? (
                <div className="text-center py-12 text-slate-500 bg-white rounded-xl border border-dashed border-slate-300"><p>{t.events.empty}</p></div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((evt) => (
                        <FadeIn key={evt._id} className="h-full">
                            <TiltCard className="h-full">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-full group flex flex-col">
                                    <div className="h-56 bg-slate-200 relative overflow-hidden">
                                        {evt.image && (<img src={evt.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={(lang === 'en' && evt.title_en) ? evt.title_en : evt.title} />)}
                                        {!evt.image && <div className="w-full h-full bg-brand-light flex items-center justify-center text-brand-dark"><Calendar size={40} /></div>}
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                                            {new Date(evt.date).toLocaleDateString(lang === 'ro' ? 'ro-RO' : 'en-US')}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-brand-DEFAULT transition-colors">{(lang === 'en' && evt.title_en) ? evt.title_en : evt.title}</h3>
                                        <p className="text-slate-600 line-clamp-3 mb-6 flex-grow">{(lang === 'en' && evt.description_en) ? evt.description_en : evt.description}</p>
                                        <Link to={`/event/${evt._id}`} className="w-full py-3 rounded-lg bg-slate-50 text-brand-dark font-bold hover:bg-brand-DEFAULT hover:text-white transition-all text-sm block text-center">
                                            {lang === 'en' ? 'Read More' : 'Citește Mai Mult'}
                                        </Link>
                                    </div>
                                </div>
                            </TiltCard>
                        </FadeIn>
                    ))}
                </div>
            )}
        </section>
    );
}
