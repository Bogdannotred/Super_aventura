import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CustomCursor } from './components/CustomCursor';
import { Layout } from './components/Layout';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import EventPage from './EventPage'; // Keeping original EventPage for details

function App() {
    return (
        <div className="cursor-none">
            <CustomCursor />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="services" element={<Services />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="about" element={<About />} />
                    <Route path="events" element={<Events />} />
                    <Route path="event/:id" element={<EventPage />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
