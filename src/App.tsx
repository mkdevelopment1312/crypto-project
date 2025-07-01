// Copyright © 2025 Kamil Maslanka

import React, { useState, useEffect } from 'react';

// Header Component
const Header: React.FC<{ onScrollTo: (section: string) => void }> = ({ onScrollTo }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-blue-500/20 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-400">
            XAXACURRENCY
          </div>
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => onScrollTo('home')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => onScrollTo('features')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => onScrollTo('technology')}
              className="text-white hover:text-blue-400 transition-colors"
            >
              Technology
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Hero Component
const Hero: React.FC<{ onScrollTo: (section: string) => void }> = ({ onScrollTo }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          XAXACURRENCY
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          The Future of Anonymous Cryptocurrency
        </p>
        <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
          Experience the next generation of fully encrypted, anonymous digital currency. 
          Built for privacy, security, and complete financial freedom.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button 
            onClick={() => onScrollTo('features')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Explore Features
          </button>
          <button 
            onClick={() => onScrollTo('technology')}
            className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

// Features Component
const Features: React.FC = () => {
  const features = [
    {
      title: "Complete Anonymity",
      description: "Advanced cryptographic techniques ensure your transactions remain completely private and untraceable.",
      icon: "🔒"
    },
    {
      title: "Quantum Resistance",
      description: "Built with quantum-resistant algorithms to secure your assets against future computing threats.",
      icon: "⚛️"
    },
    {
      title: "Lightning Fast",
      description: "Process transactions in seconds with our innovative consensus mechanism and optimized network.",
      icon: "⚡"
    },
    {
      title: "Decentralized",
      description: "Truly decentralized network with no central authority or control points.",
      icon: "🌐"
    }
  ];
  
  return (
    <section id="features" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Revolutionary Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-colors">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Technology Component
const Technology: React.FC = () => {
  return (
    <section id="technology" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Advanced Technology
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Blockchain Innovation</h3>
              <p className="text-gray-300 mb-6">
                Our proprietary blockchain technology combines the best of proof-of-stake 
                and proof-of-work mechanisms to create a truly secure and efficient network.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Zero-knowledge proofs</li>
                <li>• Ring signatures</li>
                <li>• Stealth addresses</li>
                <li>• Confidential transactions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Security First</h3>
              <p className="text-gray-300 mb-6">
                Built with military-grade encryption and multiple layers of security 
                to protect your digital assets from any potential threats.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Multi-signature wallets</li>
                <li>• Hardware security modules</li>
                <li>• Biometric authentication</li>
                <li>• Cold storage integration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('home');
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'technology'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header onScrollTo={scrollToSection} />
      <Hero onScrollTo={scrollToSection} />
      <Features />
      <Technology />
      <footer className="bg-gray-900 border-t border-blue-500/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-blue-400 mb-4">XAXACURRENCY</div>
          <p className="text-gray-400 mb-4">
            The future of anonymous cryptocurrency is here.
          </p>
          <p className="text-gray-500 text-sm">
            Copyright © 2025 Kamil Maslanka. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
