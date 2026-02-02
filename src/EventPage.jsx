import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client } from './client';
import { useLanguage } from './context/LanguageContext';
import { PortableText } from '@portabletext/react';
import { ArrowLeft, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EventPage() {
    const { id } = useParams();
    const { lang } = useLanguage();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = `*[_type == "eveniment" && _id == $id][0]{
            ...,
            "imageUrl": image.asset->url
        }`;

        client.fetch(query, { id }).then((data) => {
            setEvent(data);
            setLoading(false);
        }).catch(console.error);
    }, [id]);

    if (loading) return <div className="min-h-screen flex items-center justify-center text-slate-500">Loading...</div>;
    if (!event) return <div className="min-h-screen flex items-center justify-center text-slate-500">Event not found.</div>;

    const components = {
        block: {
            normal: ({ children }) => <p className="mb-4 leading-relaxed text-slate-700 font-lg">{children}</p>,
            h1: ({ children }) => <h1 className="text-3xl font-bold mb-4 mt-8">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl font-bold mb-4 mt-8">{children}</h2>,
            ul: ({ children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
            li: ({ children }) => <li className="mb-2">{children}</li>,
        }
    };

    const content = {
        title: (lang === 'en' && event.title_en) ? event.title_en : event.title,
        description: (lang === 'en' && event.description_en) ? event.description_en : event.description,
        details: (lang === 'en' && event.details_en) ? event.details_en : event.details,
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            <div className="relative h-[50vh] overflow-hidden">
                <img
                    src={event.imageUrl || event.image}
                    className="w-full h-full object-cover"
                    alt={content.title}
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4 shadow-sm"
                    >
                        {content.title}
                    </motion.h1>
                    <div className="flex items-center text-white/90 space-x-6 text-lg">
                        <span className="flex items-center"><Calendar className="mr-2" /> {new Date(event.date).toLocaleDateString(lang === 'ro' ? 'ro-RO' : 'en-US')}</span>
                        {/* <span className="flex items-center"><MapPin className="mr-2" /> Locație</span> */}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-4xl relative z-10 -mt-20">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100"
                >
                    <Link to="/" className="inline-flex items-center text-brand-DEFAULT font-bold mb-8 hover:-translate-x-2 transition-transform">
                        <ArrowLeft className="mr-2" /> {lang === 'en' ? 'Back to Home' : 'Înapoi la Acasă'}
                    </Link>

                    <div className="prose prose-lg prose-slate max-w-none">
                        {content.details ? (
                            <PortableText value={content.details} components={components} />
                        ) : (
                            <p className="text-xl leading-relaxed">{content.description}</p>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
