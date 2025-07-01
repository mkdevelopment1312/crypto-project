
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';

const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('feature_anonymous_title'),
      description: t('feature_anonymous_desc'),
      icon: '🔒',
      gradient: 'from-cyan-400 to-blue-500',
      delay: '0s'
    },
    {
      title: t('feature_encrypted_title'),
      description: t('feature_encrypted_desc'),
      icon: '🛡️',
      gradient: 'from-purple-400 to-pink-500',
      delay: '0.2s'
    },
    {
      title: t('feature_decentralized_title'),
      description: t('feature_decentralized_desc'),
      icon: '🌐',
      gradient: 'from-green-400 to-emerald-500',
      delay: '0.4s'
    }
  ];

  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {t('features_title')}
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            {t('features_subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="glass-modern border border-white/10 floating-card group overflow-hidden"
              style={{ animationDelay: feature.delay }}
            >
              <CardHeader className="text-center pb-6">
                <div className="relative mb-6">
                  <div className={`text-6xl mb-4 filter drop-shadow-lg`}>
                    {feature.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-20 blur-xl rounded-full`}></div>
                </div>
                <CardTitle className={`text-2xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-300 leading-relaxed text-lg">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Modern technical specs */}
        <div className="mt-32 glass-modern p-12 rounded-3xl border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10,000+', label: 'TPS', color: 'text-cyan-400' },
              { value: '0.001s', label: 'Latency', color: 'text-purple-400' },
              { value: '99.99%', label: 'Uptime', color: 'text-green-400' },
              { value: '24/7', label: 'Support', color: 'text-orange-400' }
            ].map((spec, index) => (
              <div key={index} className="text-center group">
                <div className={`text-5xl font-black mb-3 ${spec.color} group-hover:scale-110 transition-transform duration-300`}>
                  {spec.value}
                </div>
                <div className="text-gray-400 font-medium tracking-wide">
                  {spec.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
