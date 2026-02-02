import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export function Navbar() {
    const { t, lang, toggleLang } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Map paths to translation keys
    const navLinks = [
        { key: 'home', path: '/' },
        { key: 'projects', path: '/projects' },
        { key: 'about', path: '/about' },
        { key: 'events', path: '/events' },
        { key: 'contact', path: '/contact' },
    ];

    const currentTab = navLinks.find(l => l.path === location.pathname)?.key || 'home';

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-sm transition-all duration-300">
            <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                <Link to="/" className="hover:scale-105 transition-transform cursor-pointer">
                    <img src="/poze/logo.avif" alt="Super Aventura" className="h-16 w-auto" />
                </Link>

                {/* Desktop Surfboard Menu */}
                <div className="hidden md:flex items-center space-x-2 bg-white/50 p-2 rounded-full border border-white/40 shadow-inner backdrop-blur-md">
                    <LayoutGroup id="navbar">
                        {navLinks.map((link) => (
                            <Link
                                key={link.key}
                                to={link.path}
                                className="relative px-5 py-2.5 text-sm font-bold transition-colors duration-300 rounded-full group cursor-pointer"
                            >
                                {currentTab === link.key && (
                                    <motion.div
                                        layoutId="surfboard"
                                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full shadow-lg shadow-cyan-500/50 z-0"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                                <span className={`relative z-10 transition-colors duration-200 ${currentTab === link.key ? 'text-white' : 'text-slate-600 group-hover:text-brand-DEFAULT'}`}>
                                    {t.nav[link.key]}
                                </span>
                            </Link>
                        ))}
                    </LayoutGroup>
                    <div className="w-px h-6 bg-slate-300 mx-2" />
                    <button
                        onClick={toggleLang}
                        className="px-4 py-2 rounded-full border-2 border-slate-200 text-slate-500 hover:border-brand-DEFAULT hover:text-brand-DEFAULT transition-all text-xs font-bold uppercase tracking-widest"
                    >
                        {lang}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <button onClick={toggleLang} className="px-3 py-1 rounded-full border border-brand-DEFAULT text-brand-DEFAULT text-xs font-bold">{lang.toUpperCase()}</button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700 p-2 bg-white rounded-full shadow-sm active:scale-95 transition-transform">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link key={link.key} to={link.path} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-brand-light/30 text-lg font-bold text-slate-700 hover:text-brand-DEFAULT transition-colors">
                                    {t.nav[link.key]}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
