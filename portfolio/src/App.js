import React, { useState } from 'react';
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
  const [visibleSections, setVisibleSections] = useState([sections[0]]);
  const { ref, inView } = useInView({ threshold: 0.5 });

  React.useEffect(() => {
    if (inView && visibleSections.length < sections.length) {
      setVisibleSections((prev) => [...prev, sections[prev.length]]);
    }
  }, [inView, visibleSections]);

  return (
    <div className="App">
      <Navbar />
      {/* Home section */}
      <div id="home" className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </div>
      {/* Dynamically loaded sections */}
      {visibleSections.map((section) => (
        <div key={section.id} id={section.id} className="fade-in">
          {section.component}
        </div>
      ))}
      {/* Infinite scroll trigger */}
      <div ref={ref} className="h-10 bg-transparent" />
    </div>
  );
};

export default App;
