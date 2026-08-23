import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AgentSimulator from './components/AgentSimulator';
import ProblemSolution from './components/ProblemSolution';
import SolutionsGrid from './components/SolutionsGrid';
import QrDemo from './components/QrDemo';
import TechStack from './components/TechStack';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-layout" style={{ position: 'relative', minHeight: '100vh' }}>
      <div className="cyber-bg" />
      <Navbar />
      <main>
        <Hero />
        <AgentSimulator />
        <ProblemSolution />
        <SolutionsGrid />
        <QrDemo />
        <TechStack />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
