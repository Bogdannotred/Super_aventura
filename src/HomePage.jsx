import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Menu, X, Instagram, Facebook, Mail, MapPin, Calendar, Camera, ChevronRight, Anchor, Wind, Users } from 'lucide-react';
import { client } from './client';
import { events as localEventsData } from './data/events';
import { TiltCard } from './components/TiltCard';
import { Link } from 'react-router-dom';

// --- Translations ---
const translations = {
    en: {
        nav: { home: "Home", about: "About", services: "Services", projects: "Projects", events: "Events", gallery: "Gallery", contact: "Contact" },
        hero: {
            title: "Super Aventura",
            subtitle: "Experience the thrill of nature",
            cta: "Explore Events"
        },
        stats: { exp: "Years Experience", people: "Happy Clients", activities: "Activities" },
        services: {
            title: "What we offer",
            s1_title: "Water Sports Lessons",
            s1_desc: "Our experienced instructors offer lessons in stand-up paddleboarding (SUP), kitesurfing, and surfing. Whether you're a beginner or an advanced rider, we have the right program for you.",
            s2_title: "Water Sports Equipment",
            s2_desc: "Don't have your own equipment? No problem! We offer top-quality stand-up paddleboards, kitesurfing gear, and surfboards to use.",
            s3_title: "Water Sports Events",
            s3_desc: "Join us for exciting water sports events, such as SUP races, SUP competitions, testing new water sports equipment and much more. Check our calendar to stay up-to-date with our upcoming events."
        },
        about: {
            title: "Who We Are",
            desc: "At Super Aventura, we are dedicated to providing exceptional water sports experiences and promoting the benefits of outdoor activities. Our team of experienced instructors and guides is passionate about sharing their knowledge and love for water sports with our friends. Whether you are a beginner or an experienced athlete, we have something to offer. Join us today and discover a new way to have fun, stay active, and connect with nature."
        },
        projects: {
            title: "Projects",
            intro: "We are proud to present some of the projects organized by Super Aventura Association, initiatives designed to bring the passion for adventure and Stand Up Paddle (SUP) to our community. We strive to offer opportunities for fun, learning, and connection for everyone interested in this exciting sport. Here are some of our initiatives:",
            items: [
                { title: "Stand Up Paddle Water Trips", desc: "We have organized numerous outings on the water, offering participants the chance to explore the beauty of surrounding lakes and rivers using Stand Up Paddleboards. These events have gathered SUP enthusiasts in a relaxing and pleasant environment." },
                { title: "Free Stand Up Paddle Lessons", desc: "We encourage the passion for SUP by offering free lessons to those who want to start or improve their skills in this sport. We instruct participants in basic techniques, water safety, and all the secrets of Stand Up Paddle." },
                { title: "Partnerships and Collaborative Projects", desc: "We take pride in collaborating with other organizations to offer unique events and projects. From adventurous trips domestically or abroad to educational projects, we strive to bring diversity and innovation to our community." },
                { title: "SUP Competitions and Special Events", desc: "We organize Stand Up Paddle competitions and special events to bring the SUP community together in a friendly environment. These offer opportunities to test skills and socialize with other SUP enthusiasts." },
                { title: "Environmental Protection Programs", desc: "We actively participate in environmental protection projects, organizing cleanup actions on riverbanks and lake beds to help maintain healthy ecosystems." }
            ],
            outro: "Through these projects, we aim to encourage a love for adventure and outdoor activities while promoting a healthy lifestyle and respect for the environment. We invite you to join Super Aventura Association and experience the joy of Stand Up Paddle and outdoor adventures with a passionate and friendly community!"
        },
        volunteer: {
            title: "Volunteering",
            desc: "Being a volunteer for Super Aventura Association means more than just involvement; it is an opportunity to make a significant impact and be part of a community dedicated to adventure, nature, and positive change. As a volunteer, you become an integral part of our mission to promote outdoor activities, environmental awareness, and community engagement. Volunteering at Super Aventura Association means actively contributing to the organization and running of various events, initiatives, and projects that align with our values. It involves collaborating with a passionate and diverse team, united by a common love for adventure and a commitment to promoting a sense of responsibility towards the environment. One of the key aspects of volunteering is the chance to connect with like-minded individuals who share a common passion for outdoor activities and a desire to contribute to the community. Whether it's organizing outdoor trips, eco-friendly cleanup actions, or community-building activities, volunteers play a crucial role in bringing these initiatives to life. Super Aventura Association volunteers have the opportunity to develop valuable skills in event planning, teamwork, leadership, and communication. The practical experience gained through volunteering is not only personally fulfilling but also improves the ability to adapt to various challenges and positively contribute to future projects. Additionally, being part of Super Aventura Association as a volunteer opens doors to new adventures and experiences. It offers the chance to explore stunning natural landscapes, participate in outdoor activities, and create unforgettable memories while making a difference in the community. In essence, volunteering at Super Aventura Association is a journey that goes beyond the limits of routine. It is about embracing the spirit of adventure, promoting care for the environment, and building a sense of community that extends beyond nature trails and penetrates the hearts of those who share a passion for exploration and positive change."
        },
        sponsors: {
            title: "Sponsors",
            desc: "We would like to thank all our sponsors for their support and contributions to our mission of promoting water sports and protecting nature. Your generosity allows us to offer the highest quality equipment and safe, enjoyable experiences for our participants. Interested in becoming a sponsor? Contact us today to learn about the benefits of partnering with Super Aventura Association and supporting our mission."
        },
        events: { title: "Upcoming Events", loading: "Loading events...", empty: "No upcoming events at the moment." },
        gallery: { title: "Photo Gallery" },
        footer: { contact: "Contact Us", rights: "All rights reserved." }
    },
    ro: {
        nav: { home: "Acasă", about: "Despre", services: "Servicii", projects: "Proiecte", events: "Evenimente", gallery: "Galerie", contact: "Contact" },
        hero: {
            title: "Super Aventura",
            subtitle: "Trăiește emoția naturii",
            cta: "Vezi Evenimente"
        },
        stats: { exp: "Ani Experiență", people: "Clienți Fericiți", activities: "Activități" },
        services: {
            title: "Water Sports Lessons",
            s1_title: "Water Sports Lessons", s1_desc: "Our experienced instructors offer lessons in stand-up paddleboarding (SUP), kitesurfing, and surfing. Whether you're a beginner or an advanced rider, we have the right program for you.",
            s2_title: "Water Sports Equipment", s2_desc: "Don't have your own equipment? No problem! We offer top-quality stand-up paddleboards, kitesurfing gear, and surfboards to use.",
            s3_title: "Water Sports Events", s3_desc: "Join us for exciting water sports events, such as SUP races, SUP competitions,testing new water sports equipment and much more. Check our calendar to stay up-to-date with our upcoming events."
        },
        about: {
            title: "Cine Suntem",
            desc: "La Super Aventura, suntem dedicați să oferim experiențe excepționale de sporturi nautice și să promovăm beneficiile activităților în aer liber. Echipa noastră de instructori și ghizi cu experiență este pasionată să-și împărtășească cunoștințele și dragostea pentru sporturile nautice cu prietenii noștri. Fie că ești un începător sau un atlet experimentat, avem ceva de oferit. Alăturați-vă nouă astăzi și descoperiți o nouă modalitate de a vă distra, de a rămâne activ și de a vă conecta cu natura."
        },
        projects: {
            title: "Proiecte",
            intro: "Suntem mândri să prezentăm câteva dintre proiectele organizate de Asociația Super Aventura, inițiative concepute pentru a aduce pasiunea pentru aventură și Stand Up Paddle (SUP) în comunitatea noastră. Ne străduim să oferim oportunități de distracție, învățare și conectare pentru toți cei interesați de acest sport captivant. Iată câteva dintre inițiativele noastre:",
            items: [
                { title: "Excursii cu Stand Up Paddle pe Apă", desc: "Am organizat numeroase ieșiri pe apă, oferind participanților șansa de a explora frumusețea lacurilor și râurilor din zonele înconjurătoare, folosind plăci de Stand Up Paddle. Aceste evenimente au adunat entuziaști SUP într-un mediu relaxant și plăcut." },
                { title: "Lecții Gratuite de Stand Up Paddle", desc: "Încurajăm pasiunea pentru SUP, oferind lecții gratuite celor care vor să înceapă sau să-și îmbunătățească abilitățile în acest sport. Instruim participanții în tehnici de bază, siguranță pe apă și toate secretele Stand Up Paddle." },
                { title: "Parteneriate și Proiecte Colaborative", desc: "Ne mândrim cu colaborarea cu alte organizații pentru a oferi evenimente și proiecte unice. De la călătorii aventuroase în țară sau în străinătate până la proiecte educaționale, ne străduim să aducem diversitate și inovare în comunitatea noastră." },
                { title: "Competiții de SUP și Evenimente Speciale", desc: "Organizăm competiții de Stand Up Paddle și evenimente speciale pentru a aduna comunitatea SUP într-un mediu prietenos. Acestea oferă oportunități de testare a abilităților și socializare cu alți entuziaști SUP." },
                { title: "Programe de Protecție a Mediului", desc: "Participăm activ la proiecte de protecție a mediului, organizând acțiuni de curățenie pe malurile și albiile râurilor și lacurilor,pentru a contribui la menținerea ecosistemelor sănătoase." }
            ],
            outro: "Prin aceste proiecte, ne propunem să încurajăm dragostea pentru aventură și activități în aer liber, promovând în același timp un stil de viață sănătos și respect față de mediul înconjurător. Vă invităm să vă alăturați Asociației Super Aventura și să experimentați bucuria Stand Up Paddle și a aventurilor în aer liber alături de o comunitate pasionată și prietenoasă!"
        },
        volunteer: {
            title: "Voluntariat",
            desc: "A fi voluntar al Asociației Super Aventura înseamnă mai mult decât o simplă implicare; este o oportunitate de a avea un impact semnificativ și de a face parte dintr-o comunitate dedicată aventurii, naturii și schimbărilor pozitive. Ca voluntar, devii o parte integrantă a misiunii noastre de a promova activitățile în aer liber, conștientizarea mediului și implicarea comunitară. A fi voluntar la Asociația Super Aventura înseamnă să contribui activ la organizarea și desfășurarea diverselor evenimente, inițiative și proiecte care se aliniază cu valorile noastre. Implică colaborarea cu o echipă pasionată și diversificată, unită de dragostea comună pentru aventură și de angajamentul de a promova un simț de responsabilitate față de mediul înconjurător. Unul dintre aspectele cheie ale voluntariatului este șansa de a te conecta cu persoane cu interese similare, care împărtășesc o pasiune comună pentru activitățile în aer liber și dorința de a contribui la comunitate. Fie că este vorba despre organizarea excursiilor în aer liber, acțiunilor de curățenie ecologică sau a activităților de construire a comunității, voluntarii au un rol crucial în ducerea acestor inițiative la îndeplinire. Voluntarii Asociației Super Aventura au oportunitatea de a dezvolta abilități valoroase în planificarea evenimentelor, lucrul în echipă, leadership și comunicare. Experiența practică obținută prin voluntariat nu este doar împlinitoare personal, ci și îmbunătățește capacitatea de a se adapta la diverse provocări și de a contribui pozitiv la proiectele viitoare. În plus, a face parte din Asociația Super Aventura ca voluntar deschide uși către noi aventuri și experiențe. Oferă șansa de a explora peisaje naturale uimitoare, de a participa la activități în aer liber și de a crea amintiri de neuitat în timp ce faci o diferență în comunitate. În esență, voluntariatul la Asociația Super Aventura este o călătorie care depășește limitele rutinei. Este despre îmbrățișarea spiritului de aventură, promovarea grijii față de mediu și construirea unui sentiment de comunitate care se extinde dincolo de cărările naturii și pătrunde în inimile celor care împărtășesc pasiunea pentru explorare și schimbare pozitivă."
        },
        sponsors: {
            title: "Sponsori",
            desc: "Dorim să mulțumim tuturor sponsorilor noștri pentru sprijinul și contribuțiile lor la misiunea noastră de promovare a sporturilor nautice și protejare a naturii. Generozitatea voastră ne permite să oferim echipamente de cea mai înaltă calitate și experiențe sigure și plăcute pentru participanţii noștri. Ești interesat să devii sponsor? Contactați-ne astăzi pentru a afla despre beneficiile parteneriatului cu Asociația Super Aventura și sprijinirea misiunii noastre."
        },
        events: { title: "Evenimente Viitoare", loading: "Se încarcă evenimentele...", empty: "Nu sunt evenimente programate." },
        gallery: { title: "Galerie" },
        footer: { rights: "Toate drepturile rezervate." }
    }
};

const Section = ({ children, className = "", id = "" }) => (
    <section id={id} className={`py-20 ${className}`}>
        {children}
    </section>
);

const FadeIn = ({ children, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

export default function HomePage() {
    console.log('HomePage rendering...');
    const [lang, setLang] = useState('ro');
    const t = translations[lang];
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [loadingEvents, setLoadingEvents] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeTab, setActiveTab] = useState('home');

    const toggleLang = () => setLang(l => l === 'en' ? 'ro' : 'en');

    useEffect(() => {
        const fetchEvents = () => {
            const eventsQuery = '*[_type == "eveniment"] | order(date asc) {..., "image": image.asset->url}';
            client.fetch(eventsQuery).then(data => {
                setEvents(data);
                setLoadingEvents(false);
            }).catch(console.error);
        };

        const fetchGallery = () => {
            const galleryQuery = '*[_type == "galerie"] { title, "imageUrl": image.asset->url }';
            const localImagesGlob = import.meta.glob('./poze/galery/*.{png,jpg,jpeg,svg,avif}', { eager: true });
            const localGallery = Object.values(localImagesGlob).map((mod) => ({
                imageUrl: mod.default,
                title: 'Local Gallery Image'
            }));

            client.fetch(galleryQuery).then(sanityGallery => {
                setGallery([...sanityGallery, ...localGallery]);
            }).catch(err => {
                console.error(err);
                setGallery(localGallery);
            });
        };

        fetchEvents();
        fetchGallery();

        const eventsSubscription = client.listen('*[_type == "eveniment"]').subscribe(() => fetchEvents());
        const gallerySubscription = client.listen('*[_type == "galerie"]').subscribe(() => fetchGallery());

        return () => {
            eventsSubscription.unsubscribe();
            gallerySubscription.unsubscribe();
        };
    }, []);

    const navLinks = [
        { key: 'home', href: '#hero' },
        { key: 'services', href: '#services' },
        { key: 'projects', href: '#projects' },
        { key: 'about', href: '#about' },
        { key: 'events', href: '#events' },
        { key: 'gallery', href: '#gallery' },
        { key: 'contact', href: '#footer' },
    ];

    return (
        <div className="font-sans text-slate-800 bg-slate-50 overflow-x-hidden">

            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-sm transition-all duration-300">
                <div className="container mx-auto px-6 h-24 flex items-center justify-between">
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-brand-dark via-brand-DEFAULT to-brand-teal bg-clip-text text-transparent italic tracking-tighter hover:scale-105 transition-transform cursor-pointer">
                        Super Aventura
                    </div>

                    {/* Desktop Surfboard Menu */}
                    <div className="hidden md:flex items-center space-x-2 bg-white/50 p-2 rounded-full border border-white/40 shadow-inner backdrop-blur-md">
                        <LayoutGroup id="navbar">
                            {navLinks.map((link) => (
                                <a
                                    key={link.key}
                                    href={link.href}
                                    onClick={() => setActiveTab(link.key)}
                                    className="relative px-5 py-2.5 text-sm font-bold transition-colors duration-300 rounded-full group cursor-pointer"
                                >
                                    {activeTab === link.key && (
                                        <motion.div
                                            layoutId="surfboard"
                                            className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full shadow-lg shadow-cyan-500/50 z-0"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                    <span className={`relative z-10 transition-colors duration-200 ${activeTab === link.key ? 'text-white' : 'text-slate-600 group-hover:text-brand-DEFAULT'}`}>
                                        {t.nav[link.key]}
                                    </span>
                                </a>
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
                                    <a key={link.key} href={link.href} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 rounded-xl hover:bg-brand-light/30 text-lg font-bold text-slate-700 hover:text-brand-DEFAULT transition-colors">
                                        {t.nav[link.key]}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero */}
            <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
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
                    <motion.a href="#events" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="inline-block px-8 py-4 bg-brand-DEFAULT hover:bg-brand-dark text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-brand-DEFAULT/50">
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
            <Section id="services" className="bg-slate-50 md:mt-16">
                <div className="container mx-auto px-6">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.services.title}</h2>
                            <div className="w-20 h-1.5 bg-brand-DEFAULT mx-auto rounded-full" />
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: t.services.s1_title, desc: t.services.s1_desc, icon: <Wind size={40} className="text-brand-DEFAULT" />, img: '/poze/lessons.png' },
                            { title: t.services.s2_title, desc: t.services.s2_desc, icon: <Anchor size={40} className="text-brand-DEFAULT" />, img: '/poze/equipment.png' },
                            { title: t.services.s3_title, desc: t.services.s3_desc, icon: <Users size={40} className="text-brand-DEFAULT" />, img: '/poze/events.png' }
                        ].map((s, i) => (
                            <TiltCard key={i} className="h-full">
                                <motion.div
                                    className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden group h-full glass"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-light/30 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                                    <div className="mb-6 relative z-10">{s.icon}</div>
                                    <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-brand-DEFAULT transition-colors">{s.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>
                                    <div className="w-full h-48 rounded-2xl overflow-hidden mt-auto shadow-sm">
                                        <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                </motion.div>
                            </TiltCard>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Projects */}
            <Section id="projects" className="bg-white">
                <div className="container mx-auto px-6">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.projects.title}</h2>
                            <div className="w-20 h-1.5 bg-brand-DEFAULT mx-auto rounded-full mb-8" />
                            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">{t.projects.intro}</p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.projects.items.map((item, index) => (
                            <FadeIn key={index} delay={index * 0.1} className="h-full">
                                <TiltCard className="h-full">
                                    <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col hover:border-brand-light transition-colors relative overflow-hidden group">
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
                </div>
            </Section>

            {/* About */}
            <Section id="about" className="bg-white">
                <div className="container mx-auto px-6">
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
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.about.title}</h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">{t.about.desc}</p>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center text-brand-dark font-semibold"><MapPin className="mr-2" size={20} /> Suplacu de Barcău</div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Volunteer & Sponsors (RO content primarily) */}
            {(lang === 'ro' || t.volunteer) && (
                <Section id="community" className="bg-slate-50">
                    <div className="container mx-auto px-6">
                        {/* Volunteer */}
                        <FadeIn>
                            <div className="mb-20">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">{t.volunteer?.title || 'Voluntariat'}</h2>
                                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed">
                                    {t.volunteer?.desc?.split('. ').map((sentence, i) => (
                                        <span key={i}>{sentence}. </span>
                                    )) || "Coontext voluntariat..."}
                                </div>
                            </div>
                        </FadeIn>

                        {/* Sponsors */}
                        <FadeIn delay={0.2}>
                            <div className="text-center max-w-4xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.sponsors?.title || 'Sponsori'}</h2>
                                <p className="text-lg text-slate-600 leading-relaxed bg-brand-light/30 p-8 rounded-3xl border border-brand-light">
                                    {t.sponsors?.desc || "Continut sponsori..."}
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </Section>
            )}

            {/* Events */}
            <Section id="events" className="bg-brand-50/30">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.events.title}</h2>
                        <Calendar className="text-brand-DEFAULT hidden md:block" size={32} />
                    </div>
                    {loadingEvents ? (
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
                                                {evt.image && (<img src={evt.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={evt.title} />)}
                                                {!evt.image && <div className="w-full h-full bg-brand-light flex items-center justify-center text-brand-dark"><Calendar size={40} /></div>}
                                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                                                    {new Date(evt.date).toLocaleDateString(lang === 'ro' ? 'ro-RO' : 'en-US')}
                                                </div>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <h3 className="text-xl font-bold mb-3 group-hover:text-brand-DEFAULT transition-colors">{evt.title}</h3>
                                                <p className="text-slate-600 line-clamp-3 mb-6 flex-grow">{evt.description}</p>
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
                </div>
            </Section>

            {/* Gallery */}
            <Section id="gallery" className="bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <FadeIn>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">{t.gallery.title}</h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-light to-brand-DEFAULT mx-auto rounded-full" />
                        </FadeIn>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {gallery.map((item, idx) => (
                            <motion.div key={idx} layoutId={`gallery-img-${idx}`} onClick={() => setSelectedImage(item.imageUrl)} whileHover={{ scale: 1.03, y: -5 }} className="aspect-square rounded-2xl overflow-hidden shadow-md cursor-pointer relative group">
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />
                                <img src={item.imageUrl} alt={item.title || 'Gallery'} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)} className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out">
                        <motion.img layoutId={`gallery-img-${gallery.findIndex(g => g.imageUrl === selectedImage)}`} src={selectedImage} className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain" onClick={(e) => e.stopPropagation()} />
                        <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors" onClick={() => setSelectedImage(null)}><X size={48} /></button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Footer */}
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
        </div>
    );
}
