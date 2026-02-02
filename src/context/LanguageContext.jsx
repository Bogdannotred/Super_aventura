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
            title: "Volunteering",
            desc: "Being a volunteer for Super Aventura Association means more than just involvement; it is an opportunity to make a significant impact and be part of a community dedicated to adventure, nature, and positive change. As a volunteer, you become an integral part of our mission to promote outdoor activities, environmental awareness, and community engagement. Volunteering at Super Aventura Association means actively contributing to the organization and running of various events, initiatives, and projects that align with our values. It involves collaborating with a passionate and diverse team, united by a common love for adventure and a commitment to promoting a sense of responsibility towards the environment. One of the key aspects of volunteering is the chance to connect with like-minded individuals who share a common passion for outdoor activities and a desire to contribute to the community. Whether it's organizing outdoor trips, eco-friendly cleanup actions, or community-building activities, volunteers play a crucial role in bringing these initiatives to life. Super Aventura Association volunteers have the opportunity to develop valuable skills in event planning, teamwork, leadership, and communication. The practical experience gained through volunteering is not only personally fulfilling but also improves the ability to adapt to various challenges and positively contribute to future projects. Additionally, being part of Super Aventura Association as a volunteer opens doors to new adventures and experiences. It offers the chance to explore stunning natural landscapes, participate in outdoor activities, and create unforgettable memories while making a difference in the community. In essence, volunteering at Super Aventura Association is a journey that goes beyond the limits of routine. It is about embracing the spirit of adventure, promoting care for the environment, and building a sense of community that extends beyond nature trails and penetrates the hearts of those who share a passion for exploration and positive change."
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
            title: "Voluntariat",
            desc: "A fi voluntar al Asociației Super Aventura înseamnă mai mult decât o simplă implicare; este o oportunitate de a avea un impact semnificativ și de a face parte dintr-o comunitate dedicată aventurii, naturii și schimbărilor pozitive. Ca voluntar, devii o parte integrantă a misiunii noastre de a promova activitățile în aer liber, conștientizarea mediului și implicarea comunitară. A fi voluntar la Asociația Super Aventura înseamnă să contribui activ la organizarea și desfășurarea diverselor evenimente, inițiative și proiecte care se aliniază cu valorile noastre. Implică colaborarea cu o echipă pasionată și diversificată, unită de dragostea comună pentru aventură și de angajamentul de a promova un simț de responsabilitate față de mediul înconjurător. Unul dintre aspectele cheie ale voluntariatului este șansa de a te conecta cu persoane cu interese similare, care împărtășesc o pasiune comună pentru activitățile în aer liber și dorința de a contribui la comunitate. Fie că este vorba despre organizarea excursiilor în aer liber, acțiunilor de curățenie ecologică sau a activităților de construire a comunității, voluntarii au un rol crucial în ducerea acestor inițiative la îndeplinire. Voluntarii Asociației Super Aventura au oportunitatea de a dezvolta abilități valoroase în planificarea evenimentelor, lucrul în echipă, leadership și comunicare. Experiența practică obținută prin voluntariat nu este doar împlinitoare personal, ci și îmbunătățește capacitatea de a se adapta la diverse provocări și de a contribui pozitiv la proiectele viitoare. În plus, a face parte din Asociația Super Aventura ca voluntar deschide uși către noi aventuri și experiențe. Oferă șansa de a explora peisaje naturale uimitoare, de a participa la activități în aer liber și de a crea amintiri de neuitat în timp ce faci o diferență în comunitate. În esență, voluntariatul la Asociația Super Aventura este o călătorie care depășește limitele rutinei. Este despre îmbrățișarea spiritului de aventură, promovarea grijii față de mediu și construirea unui sentiment de comunitate care se extinde dincolo de cărările naturii și pătrunde în inimile celor care împărtășesc pasiunea pentru explorare și schimbare pozitivă."
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
