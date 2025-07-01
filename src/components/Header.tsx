
import React from 'react';
import { Button } from '@/components/ui/button';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';

interface HeaderProps {
  onScrollTo: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onScrollTo }) => {
  const { t, currentLanguage, changeLanguage } = useTranslation();

  return (
    <header className="fixed top-0 w-full z-50 glass-modern border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center modern-glow">
              <span className="text-black font-black text-2xl">X</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-white">XAXA</span>
            <span className="text-xs text-cyan-400 font-medium tracking-wider">CURRENCY</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { key: 'nav_home', id: 'home' },
            { key: 'nav_features', id: 'features' },
            { key: 'nav_technology', id: 'technology' },
            { key: 'nav_roadmap', id: 'roadmap' },
            { key: 'nav_community', id: 'community' }
          ].map(({ key, id }) => (
            <button 
              key={id}
              onClick={() => onScrollTo(id)}
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group"
            >
              {t(key)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={changeLanguage}
          />
          <Button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold hover:from-cyan-300 hover:to-purple-400 transition-all duration-300 px-6 py-2 rounded-xl">
            {t('hero_cta')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
