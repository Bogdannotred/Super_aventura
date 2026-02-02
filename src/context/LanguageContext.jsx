import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
    en: {
        nav: { home: "Home", about: "About", services: "Services", projects: "Projects & Gallery", events: "Events", contact: "Contact" },
        hero: {
            title: "Super Aventura",
            subtitle: "Experience the thrill of nature",
            cta: "Explore Events"
        },
        stats: {
            exp: "Years Experience",
            people: "Happy Clients",
            activities: "Activities"
        },
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
            title: "Projects & Gallery",
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
            title: "Join the Movement",
            subtitle: "Make an Impact",
            desc: "Volunteering with Super Aventura is about more than just showing up—it's about leading the change. Join a community that values action over words. cleaning our waters, protecting our shores, and inspiring the next generation. Be the hero our nature needs.",
            cta: "Become a Volunteer"
        },
        sponsors: {
            title: "Sponsors",
            desc: "We would like to thank all our sponsors for their support and contributions to our mission of promoting water sports and protecting nature. Your generosity allows us to offer the highest quality equipment and safe, enjoyable experiences for our participants. Interested in becoming a sponsor? Contact us today to learn about the benefits of partnering with Super Aventura Association and supporting our mission."
        },
        events: { title: "Upcoming Events", loading: "Loading events...", empty: "No upcoming events at the moment." },
        gallery: { title: "Photo Gallery" },
        contact: {
            title: "Contact Us",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send Message",
            phone: "Phone",
            whatsapp: "Chat on WhatsApp"
        },
        kids: {
            title: "Fun for Kids",
            desc: "Ideal for children! Safe splashing and water fun are guaranteed. Our instructors ensure a safe and enjoyable environment for the little ones."
        },
        footer: { contact: "Contact Us", rights: "All rights reserved." }
    },
    ro: {
        nav: { home: "Acasă", about: "Despre", services: "Servicii", projects: "Proiecte și Galerie", events: "Evenimente", contact: "Contact" },
        hero: {
            title: "Super Aventura",
            subtitle: "Trăiește emoția naturii",
            cta: "Vezi Evenimente"
        },
        stats: { exp: "Ani Experiență", people: "Clienți Fericiți", activities: "Activități" },
        services: {
            title: "Ce Oferim",
            s1_title: "Lecții Sporturi Nautice",
            s1_desc: "Instructorii noștri cu experiență oferă lecții de stand-up paddleboarding (SUP), kitesurfing și surfing. Fie că ești începător sau avansat, avem programul potrivit pentru tine.",
            s2_title: "Echipament Sporturi Nautice",
            s2_desc: "Nu ai propriul echipament? Nici o problemă! Oferim plăci de stand-up paddle, echipament de kitesurfing și plăci de surf de cea mai bună calitate.",
            s3_title: "Evenimente Sporturi Nautice",
            s3_desc: "Alătură-te nouă pentru evenimente interesante de sporturi nautice, cum ar fi curse SUP, competiții SUP, testarea noilor echipamente și multe altele. Verifică calendarul nostru pentru a fi la curent cu evenimentele viitoare."
        },
        about: {
            title: "Cine Suntem",
            desc: "La Super Aventura, suntem dedicați să oferim experiențe excepționale de sporturi nautice și să promovăm beneficiile activităților în aer liber. Echipa noastră de instructori și ghizi cu experiență este pasionată să-și împărtășească cunoștințele și dragostea pentru sporturile nautice cu prietenii noștri. Fie că ești un începător sau un atlet experimentat, avem ceva de oferit. Alăturați-vă nouă astăzi și descoperiți o nouă modalitate de a vă distra, de a rămâne activ și de a vă conecta cu natura."
        },
        projects: {
            title: "Proiecte și Galerie",
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
            title: "Alătură-te Mișcării",
            subtitle: "Fii Schimbarea",
            desc: "Voluntariatul la Super Aventura înseamnă acțiune, nu doar vorbe. Alătură-te unei comunități care protejează activ apele și natura. De la curățarea malurilor la inspirarea tinerilor, tu poți fi eroul de care natura are nevoie. Hai în echipă!",
            cta: "Devino Voluntar"
        },
        sponsors: {
            title: "Sponsori",
            desc: "Dorim să mulțumim tuturor sponsorilor noștri pentru sprijinul și contribuțiile lor la misiunea noastră de promovare a sporturilor nautice și protejare a naturii. Generozitatea voastră ne permite să oferim echipamente de cea mai înaltă calitate și experiențe sigure și plăcute pentru participanţii noștri. Ești interesat să devii sponsor? Contactați-ne astăzi pentru a afla despre beneficiile parteneriatului cu Asociația Super Aventura și sprijinirea misiunii noastre."
        },
        events: { title: "Evenimente Viitoare", loading: "Se încarcă evenimentele...", empty: "Nu sunt evenimente programate." },
        gallery: { title: "Galerie" },
        contact: {
            title: "Contactează-ne",
            name: "Nume",
            email: "Email",
            message: "Mesaj",
            send: "Trimite Mesaj",
            phone: "Telefon",
            whatsapp: "Scrie-ne pe WhatsApp"
        },
        kids: {
            title: "Distracție pentru Copii",
            desc: "Ideal și pentru copii! Bălăceală, distracție și siguranță garantată. Instructorii noștri asigură un mediu sigur și plăcut pentru cei mici."
        },
        footer: { contact: "Contactează-ne", rights: "Toate drepturile rezervate." }
    }
};

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('ro');
    const toggleLang = () => setLang(l => l === 'en' ? 'ro' : 'en');

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
