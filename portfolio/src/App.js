import React, { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from './tools/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ProfHist from './components/ProfHist';
import ContactMe from './components/ContactMe';

const sections = [
  { id: 'about-me', component: <AboutMe /> },
  { id: 'projects', component: <Projects /> },
  { id: 'professional-history', component: <ProfHist /> },
  { id: 'contact-me', component: <ContactMe /> },
];

const App = () => {
  const [visibleSections, setVisibleSections] = useState([sections[0].id]);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [showArrow, setShowArrow] = useState(true);

  const handleScroll = useCallback(() => {
    if (!inView) {
      setShowArrow(false);
    }
  }, [inView]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (inView && visibleSections.length < sections.length) {
      setVisibleSections((prev) => [...prev, sections[prev.length].id]);
    }
  }, [inView, visibleSections]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      {/* Home Section */}
      <div
        id="home"
        className="min-h-screen flex flex-col items-center justify-center relative"
      >
        <img
          src={`${process.env.PUBLIC_URL}/logogif.gif`}
          alt="Logo"
          className="h-50 w-50 mb-6"
        />
        <h1 className="text-4xl font-bold fade-in">Hello, I'm Peter Tran!</h1>
        <p className="text-lg text-gray-600 fade-in mt-4">
          A passionate 3rd Year Computer Science Student Studying at the University of Calgary
        </p>

        {/* Scroll Down Arrow */}
        {showArrow && (
          <div className="absolute bottom-10 flex flex-col items-center animate-fade-in-out">
            <p className="text-sm text-gray-600 mb-2">Scroll Down</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-600 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        )}
      </div>

      {/* Render Sections */}
      <div className="space-y-20">
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="fade-in"
          >
            {section.component}
          </div>
        ))}
      </div>

      {/* Infinite Scroll Trigger */}
      <div ref={ref} className="h-10 bg-transparent" />
    </div>
  );
};

export default App;
