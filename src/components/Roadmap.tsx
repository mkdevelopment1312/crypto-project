
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';

const Roadmap: React.FC = () => {
  const { t } = useTranslation();

  const roadmapItems = [
    {
      quarter: 'Q1 2024',
      title: 'Genesis Launch',
      status: 'completed',
      items: [
        'Mainnet deployment',
        'Core wallet release',
        'Initial mining pools',
        'Community formation'
      ]
    },
    {
      quarter: 'Q2 2024',
      title: 'Privacy Enhancement',
      status: 'completed',
      items: [
        'Zero-knowledge implementation',
        'Anonymous transactions',
        'Stealth addresses',
        'Ring signatures'
      ]
    },
    {
      quarter: 'Q3 2024',
      title: 'Ecosystem Expansion',
      status: 'in-progress',
      items: [
        'DEX integration',
        'Mobile wallet app',
        'Smart contracts',
        'Cross-chain bridges'
      ]
    },
    {
      quarter: 'Q4 2024',
      title: 'Enterprise Features',
      status: 'upcoming',
      items: [
        'Institutional custody',
        'API marketplace',
        'Quantum resistance',
        'Global partnerships'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-crypto-neon-green';
      case 'in-progress': return 'text-crypto-neon';
      case 'upcoming': return 'text-crypto-neon-pink';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-crypto-neon-green/20 border-crypto-neon-green/50';
      case 'in-progress': return 'bg-crypto-neon/20 border-crypto-neon/50';
      case 'upcoming': return 'bg-crypto-neon-pink/20 border-crypto-neon-pink/50';
      default: return 'bg-muted';
    }
  };

  return (
    <section id="roadmap" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 neon-text text-crypto-neon">
            {t('roadmap_title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('roadmap_subtitle')}
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-crypto-glow transform md:-translate-x-0.5"></div>
          
          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 transform md:-translate-x-2 ${getStatusBg(item.status)}`}></div>
                
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="glass-effect border-crypto-glow/30 hover:border-crypto-glow transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className={`text-xl ${getStatusColor(item.status)}`}>
                          {item.quarter}
                        </CardTitle>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBg(item.status)}`}>
                          {item.status.toUpperCase().replace('-', ' ')}
                        </span>
                      </div>
                      <CardDescription className="text-lg font-semibold text-foreground">
                        {item.title}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.items.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-muted-foreground">
                            <div className={`w-2 h-2 rounded-full mr-3 ${item.status === 'completed' ? 'bg-crypto-neon-green' : item.status === 'in-progress' ? 'bg-crypto-neon' : 'bg-crypto-neon-pink'}`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
