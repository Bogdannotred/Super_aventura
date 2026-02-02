import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { client } from '../client';
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

export default function Gallery({ embedded = false }) {
    const { t } = useLanguage();
    const [gallery, setGallery] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchGallery = () => {
            const galleryQuery = '*[_type == "galerie"] { title, "imageUrl": image.asset->url }';
            const localImagesGlob = import.meta.glob('../poze/galery/*.{png,jpg,jpeg,svg,avif}', { eager: true });

            // Map local images
            const localGallery = Object.values(localImagesGlob).map((mod) => ({
                imageUrl: mod.default,
                title: 'Gallery Image'
            }));

            client.fetch(galleryQuery).then(sanityGallery => {
                setGallery([...sanityGallery, ...localGallery]);
            }).catch(err => {
                console.error(err);
                setGallery(localGallery);
            });
        };

        fetchGallery();
    }, []);

    return (
        <section className={embedded ? "" : "py-20 container mx-auto px-6"}>
            <FadeIn>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t.gallery.title}</h1>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-brand-light to-brand-DEFAULT mx-auto rounded-full" />
                </div>
            </FadeIn>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {gallery.map((item, idx) => (
                    <motion.div
                        key={idx}
                        layoutId={`gallery-img-${idx}`}
                        onClick={() => setSelectedImage(item.imageUrl)}
                        whileHover={{ scale: 1.03, y: -5 }}
                        className="aspect-square rounded-2xl overflow-hidden shadow-md cursor-pointer relative group"
                    >
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />
                        <img src={item.imageUrl} alt={item.title || 'Gallery'} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)} className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out">
                        <motion.img layoutId={`gallery-img-${gallery.findIndex(g => g.imageUrl === selectedImage)}`} src={selectedImage} className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain" onClick={(e) => e.stopPropagation()} />
                        <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors" onClick={() => setSelectedImage(null)}><X size={48} /></button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
