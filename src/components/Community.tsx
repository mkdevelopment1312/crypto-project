
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';

const Community: React.FC = () => {
  const { t } = useTranslation();

  const socialPlatforms = [
    {
      name: 'Discord',
      icon: '💬',
      members: '125K+',
      description: 'Join our active community for real-time discussions',
      color: 'text-crypto-neon'
    },
    {
      name: 'Telegram',
      icon: '📱',
      members: '89K+',
      description: 'Get instant updates and announcements',
      color: 'text-crypto-neon-pink'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      members: '245K+',
      description: 'Follow us for the latest news and updates',
      color: 'text-crypto-neon-green'
    },
    {
      name: 'Reddit',
      icon: '🤖',
      members: '67K+',
      description: 'Deep discussions and technical analysis',
      color: 'text-crypto-neon'
    }
  ];

  return (
    <section id="community" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 neon-text text-crypto-neon">
            {t('community_title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('community_subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialPlatforms.map((platform, index) => (
            <Card key={index} className="glass-effect border-crypto-glow/30 hover:border-crypto-glow transition-all duration-300 hover:scale-105 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{platform.icon}</div>
                <CardTitle className={`text-xl ${platform.color} group-hover:neon-text transition-all`}>
                  {platform.name}
                </CardTitle>
                <CardDescription className={`font-semibold ${platform.color}`}>
                  {platform.members}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground text-sm">
                  {platform.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="glass-effect p-8 rounded-2xl border border-crypto-glow/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-crypto-neon mb-4">Join the Revolution</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the financial future. Connect with developers, traders, and privacy advocates building the next generation of cryptocurrency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-crypto-gradient text-black font-bold px-8 py-4 hover:scale-105 transition-transform">
                Join Discord
              </Button>
              <Button size="lg" variant="outline" className="border-crypto-glow text-crypto-neon hover:bg-crypto-glow/10 px-8 py-4">
                Follow on Twitter
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-crypto-neon">500K+</div>
                <div className="text-sm text-muted-foreground">Total Community Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-crypto-neon-pink">24/7</div>
                <div className="text-sm text-muted-foreground">Community Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-crypto-neon-green">15+</div>
                <div className="text-sm text-muted-foreground">Languages Supported</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
