import React from 'react';
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
    const { t, lang } = useLanguage();

    return (
        <footer id="footer" className="bg-slate-900 text-white py-20 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <div className="text-3xl font-bold bg-gradient-to-r from-brand-light to-brand-DEFAULT bg-clip-text text-transparent mb-4">Super Aventura</div>
                        <p className="text-slate-400 text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">
                            {lang === 'en' ? 'Connecting people with nature through water sports. Join our community today.' : 'Conectând oamenii cu natura prin sporturi nautice. Alătură-te comunității noastre.'}
                        </p>
                    </div>
                    <div className="flex space-x-8 mb-8 md:mb-0">
                        <a href="#" className="p-3 rounded-full bg-slate-800 text-slate-400 hover:bg-brand-DEFAULT hover:text-white transition-all transform hover:-translate-y-1"><Facebook size={24} /></a>
                        <a href="#" className="p-3 rounded-full bg-slate-800 text-slate-400 hover:bg-pink-600 hover:text-white transition-all transform hover:-translate-y-1"><Instagram size={24} /></a>
                        <a href="mailto:contact@superaventura.ro" className="p-3 rounded-full bg-slate-800 text-slate-400 hover:bg-emerald-500 hover:text-white transition-all transform hover:-translate-y-1"><Mail size={24} /></a>
                    </div>
                </div>
                <div className="border-t border-slate-800 mt-12 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between text-sm text-slate-500">
                    <p>{t.footer.rights}</p>
                    <p className="flex items-center justify-center md:justify-start mt-2 md:mt-0"><MapPin size={14} className="mr-1" /> Suplacu de Barcău, Bihor</p>
                </div>
            </div>
        </footer>
    );
}
