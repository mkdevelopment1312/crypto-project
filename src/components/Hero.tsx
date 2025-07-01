
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

interface HeroProps {
  onScrollTo: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden mesh-gradient">
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400/20 rounded-3xl rotate-12 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-purple-500/20 rounded-2xl rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 border border-green-400/20 rounded-xl rotate-12 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-32 w-16 h-16 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent leading-tight">
              {t('hero_title')}
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white/90">
              {t('hero_subtitle')}
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-gray-300 leading-relaxed font-light">
            {t('hero_description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold text-xl px-10 py-6 rounded-2xl hover:from-cyan-300 hover:to-purple-400 transition-all duration-300 modern-glow"
            >
              {t('hero_cta')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 text-xl px-10 py-6 rounded-2xl backdrop-blur-sm bg-black/20"
              onClick={() => onScrollTo('features')}
            >
              {t('hero_learn_more')}
            </Button>
          </div>
        </div>
        
        {/* Modern stats display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: '100%', label: 'Anonymous', color: 'from-cyan-400 to-blue-500' },
            { value: '256-bit', label: 'Encryption', color: 'from-purple-400 to-pink-500' },
            { value: '0s', label: 'Transaction Time', color: 'from-green-400 to-emerald-500' }
          ].map((stat, index) => (
            <div key={index} className="glass-modern p-8 rounded-3xl border border-white/10 floating-card group">
              <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
