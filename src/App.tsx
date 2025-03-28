import React from 'react';
import { Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="grid-background"></div>
        <div className="glow-circle"></div>
        <div className="glow-circle delayed"></div>
        <div className="data-lines">
          {Array.from({ length: 8 }).map((_, index) => (
            <div 
              key={`line-${index}`} 
              className="data-line" 
              style={{ 
                top: `${(index + 1) * 12}%`,
                animationDelay: `${index * 0.75}s`
              }}
            ></div>
          ))}
        </div>
        <div className="noise-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="company-title text-6xl md:text-8xl font-bold mb-6">
          <span className="glow-text">Solvencia</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Industries</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
          
        </p>
        
        <a 
          href="https://solvenciaindustries.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pulse-button bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
        >
          <Sparkles className="inline-block mr-2 h-5 w-5" />
          Automate your business today
        </a>
      </div>
      
      {/* Floating elements */}
      <div className="floating-elements">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
        <div className="floating-orb orb-4"></div>
        <div className="floating-orb orb-5"></div>
      </div>
      
      {/* Particles */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className={`particle particle-${index + 1}`}></div>
        ))}
      </div>
    </div>
  );
}

export default App;