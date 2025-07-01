
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';

const Technology: React.FC = () => {
  const { t } = useTranslation();

  const techStack = [
    {
      name: 'Quantum-Resistant Cryptography',
      description: 'Future-proof security against quantum computing threats',
      status: 'Active'
    },
    {
      name: 'Zero-Knowledge Proofs',
      description: 'Mathematically proven privacy without revealing data',
      status: 'Implemented'
    },
    {
      name: 'Proof of Stake 3.0',
      description: 'Energy-efficient consensus with 99.9% reduction in power usage',
      status: 'Live'
    },
    {
      name: 'Cross-Chain Bridges',
      description: 'Seamless interoperability with major blockchain networks',
      status: 'Beta'
    }
  ];

  return (
    <section id="technology" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 neon-text text-crypto-neon">
            {t('tech_title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('tech_subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {techStack.map((tech, index) => (
              <Card key={index} className="glass-effect border-crypto-glow/30 hover:border-crypto-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-crypto-neon">{tech.name}</CardTitle>
                    <span className="px-3 py-1 bg-crypto-gradient text-black text-xs font-semibold rounded-full">
                      {tech.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {tech.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="relative">
            <div className="glass-effect p-8 rounded-2xl border border-crypto-glow/30">
              <h3 className="text-2xl font-bold text-crypto-neon mb-6">Network Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Network Hashrate</span>
                  <span className="text-crypto-neon font-mono">2.5 EH/s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Active Nodes</span>
                  <span className="text-crypto-neon-pink font-mono">45,892</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Block Time</span>
                  <span className="text-crypto-neon-green font-mono">0.5s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Privacy Level</span>
                  <span className="text-crypto-neon font-mono">100%</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-crypto-dark rounded-lg border border-crypto-glow/20">
                <div className="text-sm text-crypto-neon mb-2">Live Transaction Volume (24h)</div>
                <div className="text-3xl font-bold text-crypto-gradient bg-gradient-to-r bg-clip-text text-transparent">
                  $1,247,832,901
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
