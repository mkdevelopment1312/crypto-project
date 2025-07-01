
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const footerLinks = [
    {
      title: 'Product',
      links: ['Wallet', 'Exchange', 'API', 'Documentation']
    },
    {
      title: 'Community',
      links: ['Discord', 'Telegram', 'Twitter', 'Reddit']
    },
    {
      title: 'Resources',
      links: ['Whitepaper', 'Blog', 'Support', 'Privacy Policy']
    },
    {
      title: 'Developers',
      links: ['GitHub', 'SDK', 'Smart Contracts', 'Testnet']
    }
  ];

  return (
    <footer className="bg-crypto-dark-secondary border-t border-crypto-glow/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-crypto-gradient rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-2xl">X</span>
              </div>
              <span className="text-3xl font-bold neon-text text-crypto-neon">XAXACURRENCY</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              {t('footer_description')}
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-crypto-glow/20 rounded-lg flex items-center justify-center hover:bg-crypto-glow/40 transition-colors cursor-pointer">
                <span>📱</span>
              </div>
              <div className="w-10 h-10 bg-crypto-glow/20 rounded-lg flex items-center justify-center hover:bg-crypto-glow/40 transition-colors cursor-pointer">
                <span>🐦</span>
              </div>
              <div className="w-10 h-10 bg-crypto-glow/20 rounded-lg flex items-center justify-center hover:bg-crypto-glow/40 transition-colors cursor-pointer">
                <span>💬</span>
              </div>
              <div className="w-10 h-10 bg-crypto-glow/20 rounded-lg flex items-center justify-center hover:bg-crypto-glow/40 transition-colors cursor-pointer">
                <span>📧</span>
              </div>
            </div>
          </div>
          
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-crypto-neon font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-crypto-neon transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-crypto-glow/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            {t('copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-crypto-neon text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-crypto-neon text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-crypto-neon text-sm transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
